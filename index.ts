/*
 * Created by aimozg on 29.11.2021.
 * Confidential.
 */


import {LobbyClient} from "./src/client";
import {LobbyServer} from "./src/server";
import {defaultAuthEngine} from "./src/default-auth";

export {LobbyClient,LobbyServer}

let host = process.env.WSLOBBY_HOST || "0.0.0.0";
let port = parseInt(process.env.WSLOBBY_PORT || process.env.PORT || "8081");
let path = process.env.WSLOBBY_PATH || "/lobby";
let autostart = process.env.WSLOBBY_STANDALONE == "true"

if (autostart) {
	console.log("Starting");

	const server = new LobbyServer({
		ws: {
			host: host,
			port: port,
			path: path
		},
		auth: defaultAuthEngine
	})

}
