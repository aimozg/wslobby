"use strict";
/*
 * Created by aimozg on 29.11.2021.
 * Confidential.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LobbyServer = exports.LobbyClient = void 0;
const client_1 = require("./src/client");
Object.defineProperty(exports, "LobbyClient", { enumerable: true, get: function () { return client_1.LobbyClient; } });
const server_1 = require("./src/server");
Object.defineProperty(exports, "LobbyServer", { enumerable: true, get: function () { return server_1.LobbyServer; } });
const default_auth_1 = require("./src/default-auth");
let host = process.env.WSLOBBY_HOST || "0.0.0.0";
let port = parseInt(process.env.WSLOBBY_PORT || process.env.PORT || "8081");
let path = process.env.WSLOBBY_PATH || "/lobby";
let autostart = process.env.WSLOBBY_STANDALONE == "true";
if (autostart) {
    console.log("Starting");
    const server = new server_1.LobbyServer({
        ws: {
            host: host,
            port: port,
            path: path
        },
        auth: default_auth_1.defaultAuthEngine
    });
}
//# sourceMappingURL=index.js.map