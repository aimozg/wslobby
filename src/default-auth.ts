/*
 * Created by aimozg on 04.12.2021.
 * Confidential.
 */
import {LobbyAuth} from "./server";
import {ClientRole, LobbyClient} from "./client";

let name2token = {

} as {[index:string]:string};
let room2host = {

} as {[index:string]:string};

export let defaultAuthEngine: LobbyAuth = {
	authClient(client: LobbyClient, identity:string, token: string, role: ClientRole) {
		if (!(identity in name2token)) {
			name2token[identity] = token;
			return null;
		}
		if (name2token[identity] === token) {
			return null
		}
		return "Unauthorized"
	},
	authClaim(client: LobbyClient, room: string) {
		if (!(room in room2host)) {
			room2host[room] = client.identity;
			return null;
		}
		if (room2host[room] === client.identity) {
			return null;
		}
		return "Room claimed by another host";
	}
};

