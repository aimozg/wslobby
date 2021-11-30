"use strict";
/*
 * Created by aimozg on 29.11.2021.
 * Confidential.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./src/server");
console.log("Starting");
let name2token = {};
let room2host = {};
let authEngine = {
    authClient(client, identity, token, role) {
        if (!(identity in name2token)) {
            name2token[identity] = token;
            return null;
        }
        if (name2token[identity] === token) {
            return null;
        }
        return "Unauthorized";
    },
    authClaim(client, room) {
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
const server = new server_1.LobbyServer({
    ws: {
        host: "0.0.0.0",
        port: 8081,
        path: "/lobby"
    },
    auth: authEngine
});
//# sourceMappingURL=index.js.map