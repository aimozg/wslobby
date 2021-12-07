/*
 * Created by aimozg on 29.11.2021.
 */

import {WebSocket} from "ws";
import {LobbyServer} from "./server";
import {CLOSESTATUS, compose} from "./utils";
import {LobbyRoom} from "./room";
import {wslobby} from "./wslobby";

export enum LobbyClientState {
	UNIDENTIFIED,
	AUTHORIZED,
	KNOCKING,
	INROOM,
	LEFT
}

export type ClientRole = "guest" | "host";

export function decodeRole(role:wslobby.Role):ClientRole {
	switch (role) {
		case wslobby.Role.HOST: return "host";
		case wslobby.Role.GUEST: return "guest";
		default:
			console.warn("Invalid role "+role);
			return "" as ClientRole;
	}
}

export class LobbyClient {
	state: LobbyClientState = LobbyClientState.UNIDENTIFIED;
	role: ClientRole | "" = "";
	identity?: string;
	room?: LobbyRoom;
	greeting?: string;
	goodbye?: string;
	mid: number = 0;
	knockMid: number = 0;

	constructor(
		public server: LobbyServer,
		public socket: WebSocket,
		public address: string) {

	}

	toString(): string {
		let s = "Client";
		if (this.identity) {
			s += "/" + this.identity;
		}
		s += "[" + this.address;
		s += ", " + LobbyClientState[this.state];
		if (this.role) {
			s += " " + this.role;
			if (this.room) s += " of " + this.room.id;
		}
		s += "]"
		return s;
	}

	isOpen(): boolean {
		return this.socket.readyState === WebSocket.OPEN;
	}

	close(status: number, message?: string) {
		this.socket.close(status, message)
	}

	send(reply: wslobby.IReply) {
		this.socket.send(compose(wslobby.Reply, reply));
	}

	sendData(senderId:string, data:Uint8Array) {
		this.send({
			id:this.mid++,
			data: {
				senderId: senderId,
				data: data
			}
		});
	}

	sendAckMessage(mid: number) {
		this.send({
			id: mid,
			ack: {}
		});
	}

	sendErrorMessage(msg: string, mid: number, andClose: boolean = true) {
		this.send({
			id: mid,
			error: {
				message: msg
			}
		});
		if (andClose) {
			this.close(CLOSESTATUS.PROTOCOL_ERROR, msg);
		}
	}

	handleMessage(msg:wslobby.Command) {

		console.debug("< "+msg.payload+ "#"+msg.id+" from "+this);

		switch (msg.payload) {
			case "ping":
				this.handlePing(msg);
				break;
			case "leave":
				this.handleLeave(msg);
				break;
			default:
				switch (this.state) {
					case LobbyClientState.UNIDENTIFIED:
						if (msg.payload === "identify") {
							this.handleIdentify(msg);
						} else {
							this.sendErrorMessage("Must identify first",msg.id);
						}
						break;
					case LobbyClientState.AUTHORIZED:
						switch (msg.payload) {
							case "claimRoom":
								this.handleClaim(msg);
								break;
							case "joinRoom":
								this.handleJoin(msg);
								break;
							default:
								this.sendErrorMessage("Expected join or claim",msg.id);
						}
						break;
					case LobbyClientState.KNOCKING:
						// TODO allow leave and re-enter?
						this.sendErrorMessage("Invalid message",msg.id);
						break;
					case LobbyClientState.INROOM:
						switch (msg.payload) {
							case "kickGuest":
								this.handleKickGuest(msg);
								break
							case "allowGuest":
								this.handleAllowGuest(msg);
								break
							case "broadcast":
								this.handleBroadcast(msg);
								break
							case "unicast":
								this.handleUnicast(msg);
								break
							default:
								this.sendErrorMessage("Invalid message",msg.id);
						}
						break;
					case LobbyClientState.LEFT:
						return;
					default:
						console.warn("Invalid "+this+" state "+this.state);
						this.sendErrorMessage("Internal server error",msg.id);
				}
		}
	}

	private handlePing(msg:wslobby.Command) {
		this.send({
			id: msg.id,
			pong: {}
		});
	}

	private handleLeave(msg: wslobby.Command) {
		this.goodbye = msg.leave.goodbye;
		this.close(CLOSESTATUS.NORMAL);
	}

	private handleIdentify(msg:wslobby.Command) {
		let role = decodeRole(msg.identify.role);
		let authError = this.server.authEngine.authClient(this, msg.identify.identity, msg.identify.token, role);
		if (!authError) {
			this.identity = msg.identify.identity;
			this.state = LobbyClientState.AUTHORIZED;
			this.role = role;
			this.server.addClient(this);
			console.log(""+this+" authorized");
			this.sendAckMessage(msg.id);
		} else {
			console.log(""+this+" unauthorized");
			this.sendErrorMessage("Unauthorized",msg.id);
		}
	}

	private handleClaim(msg:wslobby.Command) {
		if (this.role !== "host") {
			this.sendErrorMessage("Not a host", msg.id);
			return;
		}
		let roomId = msg.claimRoom.roomId;
		let room = this.server.room(roomId);
		if (room) {
			this.sendErrorMessage("Room already owned", msg.id);
			return;
		}
		let error = this.server.authEngine.authClaim(this, roomId);
		if (error) {
			this.sendErrorMessage(error, msg.id);
			return;
		}
		this.server.createRoom(this,roomId);
		this.send({
			id: this.mid++,
			enteredRoom: {
				roomId: roomId,
				hostId: this.identity
			}
		});
	}

	private handleJoin(msg:wslobby.Command) {
		if (this.role !== "guest") {
			this.sendErrorMessage("Not a guest", msg.id);
			return;
		}
		let room = this.server.room(msg.joinRoom.roomId);
		if (!room) {
			this.sendErrorMessage("Room not found", msg.id);
			return;
		}
		this.state = LobbyClientState.KNOCKING;
		this.knockMid = msg.id;
		this.room = room;
		room.addKnocking(this, msg.joinRoom.greeting);
	}

	private handleKickGuest(msg:wslobby.Command) {
		let guest = this.server.client(msg.kickGuest.guestId);
		if (guest && guest.state === LobbyClientState.KNOCKING && guest.room.id === this.room.id) {
			guest.sendErrorMessage(msg.kickGuest.message,guest.knockMid);
		} else {
			this.sendErrorMessage("Cannot kick guest",msg.id,false);
		}
	}

	private handleAllowGuest(msg:wslobby.Command) {
		let guest = this.server.client(msg.allowGuest.guestId);
		if (guest && guest.state === LobbyClientState.KNOCKING && guest.room.id === this.room.id) {
			guest.state = LobbyClientState.INROOM;
			guest.send({
				id: guest.mid++,
				enteredRoom: {
					roomId: guest.room.id,
					hostId: guest.room.host.identity
				}
			});
			this.room.addGuest(guest);
		} else {
			this.sendErrorMessage("Cannot allow guest",msg.id,false);
		}
	}

	private handleBroadcast(msg:wslobby.Command) {
		if (this.role === "host") {
			this.room.broadcast(this.identity, msg.broadcast.data);
			this.sendAckMessage(msg.id);
		} else {
			this.room.host.sendData(this.identity, msg.broadcast.data);
			this.sendAckMessage(msg.id);
		}
	}

	private handleUnicast(msg:wslobby.Command) {
		if (this.role === "host") {
			let guest = this.room.guest(msg.unicast.guestId);
			if (!guest) {
				this.sendErrorMessage("Recepient not found", msg.id, false);
			} else {
				guest.sendData(this.identity, msg.unicast.data);
				this.sendAckMessage(msg.id);
			}
		} else {
			let host = this.room.host;
			if (host.identity === msg.unicast.guestId) {
				host.sendData(this.identity, msg.unicast.data);
				this.sendAckMessage(msg.id);
			} else {
				this.sendErrorMessage("Can only communicate with host", msg.id, false);
			}
		}
	}
}
