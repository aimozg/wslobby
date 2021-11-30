/*
 * Created by aimozg on 29.11.2021.
 * Confidential.
 */


import {ClientRole, LobbyClient} from "./src/client";
import {LobbyAuth, LobbyServer} from "./src/server";

console.log("Starting");

let name2token = {

} as {[index:string]:string};
let room2host = {

} as {[index:string]:string};
let authEngine: LobbyAuth = {
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

let port = parseInt(process.env.PORT || "8081");
const server = new LobbyServer({
	ws: {
		host: "0.0.0.0",
		port: port,
		path: "/lobby"
	},
	auth: authEngine
})








