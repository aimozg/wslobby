/*
 * Created by aimozg on 30.11.2021.
 * Confidential.
 */

import {LobbyClient} from "./client";
import {LobbyServer} from "./server";

export class LobbyRoom {
	knocking = [] as LobbyClient[];
	guests = [] as LobbyClient[];

	constructor(
		public server: LobbyServer,
		public host: LobbyClient,
		public id: string
	) {
	}

	guest(guestId:string):LobbyClient|undefined {
		return this.guests.find(g=>g.identity===guestId);
	}

	addKnocking(client:LobbyClient, greeting:string) {
		this.knocking.push(client);
		this.host.send({
			id: client.knockMid,
			guestKnock: {
				guestId: client.identity,
				greeting: greeting
			}
		});
	}

	addGuest(client:LobbyClient) {
		let i = this.knocking.indexOf(client);
		if (i >= 0){
			this.knocking.splice(i,1);
		}
		this.guests.push(client);
	}

	someoneLeft(client:LobbyClient) {
		if (client.role === "guest") {
			this.removeGuest(client, "Socket closed");
		} else if (client === this.host) {
			this.server.closeRoom(this,"Host left");
		}
	}

	removeGuest(client:LobbyClient, msg:string) {
		let i = this.knocking.indexOf(client);
		if (i >= 0) {
			this.knocking.splice(i,1);
			if (client.isOpen()) {
				client.sendErrorMessage(msg, client.knockMid);
			}
			return;
		}
		i = this.guests.indexOf(client);
		if (i >= 0) {
			this.guests.splice(i,1);
			if (client.isOpen()) {
				client.sendErrorMessage(msg, 0);
			}
			this.host.send({
				id: this.host.mid++,
				guestLeft: {
					guestId: client.identity,
					goodbye: msg
				}
			})
			return;
		}
	}

	close(reason:string) {
		for (let guest of this.guests) {
			guest.sendErrorMessage(reason,0);
		}
		for (let guest of this.knocking) {
			guest.sendErrorMessage(reason, guest.knockMid);
		}
		this.host.sendErrorMessage(reason, 0);
	}

	broadcast(senderId:string, data:Uint8Array) {
		for (let guest of this.guests) {
			guest.sendData(senderId, data);
		}
	}
}
