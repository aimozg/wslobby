"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LobbyServer = void 0;
/*
 * Created by aimozg on 29.11.2021.
 * Confidential.
 */
const client_1 = require("./client");
const ws_1 = require("ws");
const buffer_1 = require("buffer");
const utils_1 = require("./utils");
const room_1 = require("./room");
const wslobby_1 = require("./wslobby");
class LobbyServer {
    constructor(options) {
        this.limbo = [];
        this.clients = {};
        this.rooms = {};
        this.authEngine = options.auth;
        if (options.express) {
            options.express.app.ws(options.path, (ws, req) => {
                this.onConnection(ws, req);
            });
            return;
        }
        if (options.ws instanceof ws_1.WebSocketServer) {
            this.ws = options.ws;
        }
        else {
            this.ws = new ws_1.WebSocketServer(options.ws);
        }
        this.authEngine = options.auth;
        const ws = this.ws;
        ws.on("listening", () => {
            let address = ws.address();
            console.log("Listening on ws://" + address.address + ":" + address.port + (ws.options.path || "/"));
        });
        ws.on("connection", (socket, request) => {
            this.onConnection(socket, request);
        });
    }
    client(id) {
        return this.clients[id];
    }
    room(id) {
        return this.rooms[id];
    }
    onConnection(socket, request) {
        let address = request.socket.remoteAddress + ":" + request.socket.remotePort;
        console.log("Incoming connection from " + address);
        const client = new client_1.LobbyClient(this, socket, address);
        this.limbo.push(client);
        this.initClient(client);
    }
    initClient(client) {
        client.socket.on("message", (rawData) => {
            let data;
            if (rawData instanceof ArrayBuffer) {
                data = buffer_1.Buffer.from(rawData);
            }
            else if (Array.isArray(rawData)) {
                data = buffer_1.Buffer.concat(rawData);
            }
            else {
                data = rawData;
            }
            let msg;
            try {
                msg = wslobby_1.wslobby.Command.decode(data);
                client.handleMessage(msg);
            }
            catch (e) {
                console.warn("Malformed message from " + client, e);
                client.sendErrorMessage("Malformed message", msg ? msg.id : 0);
            }
        });
        client.socket.on("close", (code, reason) => {
            client.state = client_1.LobbyClientState.LEFT;
            if (client.room) {
                client.room.someoneLeft(client);
            }
            console.log("" + client + " closed (code=" + code + ", reason=" + reason + ")");
            let li = this.limbo.indexOf(client);
            if (li >= 0)
                this.limbo.splice(li, 1);
            if (client.identity && this.client(client.identity) === client) {
                delete this.clients[client.identity];
            }
        });
    }
    closeRoom(room, reason) {
        console.log("Closing room " + room.id);
        room.close(reason);
        delete this.rooms[room.id];
    }
    addClient(client) {
        let duplicate = this.client(client.identity);
        if (duplicate) {
            console.log("Kicking duplicate " + duplicate);
            duplicate.sendErrorMessage("Duplicate connection", utils_1.CLOSESTATUS.PROTOCOL_ERROR);
        }
        this.clients[client.identity] = client;
    }
    createRoom(host, roomId) {
        let room = new room_1.LobbyRoom(this, host, roomId);
        host.room = room;
        host.state = client_1.LobbyClientState.INROOM;
        this.rooms[roomId] = room;
        return room;
    }
}
exports.LobbyServer = LobbyServer;
//# sourceMappingURL=server.js.map