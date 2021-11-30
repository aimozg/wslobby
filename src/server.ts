/*
 * Created by aimozg on 29.11.2021.
 * Confidential.
 */
import {ClientRole, LobbyClient, LobbyClientState} from "./client";
import {RawData, ServerOptions, WebSocketServer} from "ws";
import {AddressInfo} from "net";
import {Buffer} from "buffer";
import {CLOSESTATUS} from "./utils";
import {LobbyRoom} from "./room";
import {wslobby} from "./wslobby";

export interface LobbyAuth {
	authClient(client:LobbyClient, identity:string, token:string, role:ClientRole):string|null;
	authClaim(client:LobbyClient, room:string):string|null;
}

export class LobbyServer {
	limbo = [] as LobbyClient[];
	clients = {} as {[index:string]:LobbyClient};
	rooms = {} as {[index:string]:LobbyRoom};
	ws: WebSocketServer;
	authEngine: LobbyAuth;

	client(id:string):LobbyClient|undefined {
		return this.clients[id];
	}
	room(id:string):LobbyRoom|undefined {
		return this.rooms[id];
	}

	constructor(options: LobbyServerOptions) {
		if (options.ws instanceof WebSocketServer) {
			this.ws = options.ws;
		} else {
			this.ws = new WebSocketServer(options.ws);
		}
		this.authEngine = options.auth;

		const ws = this.ws;

		ws.on("listening",()=>{
			let address = ws.address() as AddressInfo;
			console.log("Listening on ws://"+address.address+":"+address.port+(ws.options.path||"/"))
		});
		ws.on("connection",(socket,request)=>{
			let address = request.socket.remoteAddress+":"+request.socket.remotePort;
			console.log("Incoming connection from "+address);
			const client = new LobbyClient(this,socket,address);
			this.limbo.push(client);
			this.initClient(client);
		})
	}

	initClient(client:LobbyClient) {
		client.socket.on("message", (rawData:RawData) => {
			let data:Buffer;
			if (rawData instanceof ArrayBuffer) {
				data = Buffer.from(rawData);
			} else if (Array.isArray(rawData)) {
				data = Buffer.concat(rawData)
			} else {
				data = rawData;
			}
			let msg: wslobby.Command;
			try {
				msg = wslobby.Command.decode(data);
				client.handleMessage(msg);
			} catch (e) {
				console.warn("Malformed message from " + client, e);
				client.sendErrorMessage("Malformed message", msg ? msg.id : 0);
			}
		});
		client.socket.on("close",(code:number,reason:Buffer)=>{
			client.state = LobbyClientState.LEFT;
			if (client.room) {
				client.room.someoneLeft(client);
			}
			console.log(""+client+" closed (code="+code+", reason="+reason+")")
			let li = this.limbo.indexOf(client);
			if (li >= 0) this.limbo.splice(li,1);
			if (client.identity && this.client(client.identity) === client) {
				delete this.clients[client.identity];
			}
		})
	}

	closeRoom(room:LobbyRoom, reason:string) {
		console.log("Closing room "+room.id);
		room.close(reason);
		delete this.rooms[room.id];
	}
	addClient(client:LobbyClient) {
		let duplicate = this.client(client.identity);
		if (duplicate) {
			console.log("Kicking duplicate "+duplicate);
			duplicate.sendErrorMessage("Duplicate connection",CLOSESTATUS.PROTOCOL_ERROR);
		}
		this.clients[client.identity] = client;
	}

	createRoom(host:LobbyClient, roomId:string): LobbyRoom {
		let room = new LobbyRoom(this,host,roomId);
		host.room = room;
		host.state = LobbyClientState.INROOM;
		this.rooms[roomId] = room;
		return room
	}


}

export interface LobbyServerOptions {
	ws: WebSocketServer | ServerOptions;
	auth: LobbyAuth;
}
