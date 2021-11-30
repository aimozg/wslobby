"use strict";
/*
 * Created by aimozg on 29.11.2021.
 * Confidential.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LobbyClient = exports.decodeRole = exports.LobbyClientState = void 0;
const ws_1 = require("ws");
const utils_1 = require("./utils");
const wslobby_1 = require("./wslobby");
var LobbyClientState;
(function (LobbyClientState) {
    LobbyClientState[LobbyClientState["UNIDENTIFIED"] = 0] = "UNIDENTIFIED";
    LobbyClientState[LobbyClientState["AUTHORIZED"] = 1] = "AUTHORIZED";
    LobbyClientState[LobbyClientState["KNOCKING"] = 2] = "KNOCKING";
    LobbyClientState[LobbyClientState["INROOM"] = 3] = "INROOM";
    LobbyClientState[LobbyClientState["LEFT"] = 4] = "LEFT";
})(LobbyClientState = exports.LobbyClientState || (exports.LobbyClientState = {}));
function decodeRole(role) {
    switch (role) {
        case wslobby_1.wslobby.Role.HOST: return "host";
        case wslobby_1.wslobby.Role.GUEST: return "guest";
        default:
            console.warn("Invalid role " + role);
            return "";
    }
}
exports.decodeRole = decodeRole;
class LobbyClient {
    constructor(server, socket, address) {
        this.server = server;
        this.socket = socket;
        this.address = address;
        this.state = LobbyClientState.UNIDENTIFIED;
        this.role = "";
        this.mid = 0;
        this.knockMid = 0;
    }
    toString() {
        let s = "Client";
        if (this.identity) {
            s += "/" + this.identity;
        }
        s += "[" + this.address;
        s += ", " + LobbyClientState[this.state];
        if (this.role) {
            s += " " + this.role;
            if (this.room)
                s += " of " + this.room.id;
        }
        s += "]";
        return s;
    }
    isOpen() {
        return this.socket.readyState === ws_1.WebSocket.OPEN;
    }
    close(status, message) {
        this.socket.close(status, message);
    }
    send(reply) {
        this.socket.send((0, utils_1.compose)(wslobby_1.wslobby.Reply, reply));
    }
    sendData(senderId, data) {
        this.send({
            id: this.mid++,
            data: {
                senderId: senderId,
                data: data
            }
        });
    }
    sendAckMessage(mid) {
        this.send({
            id: mid,
            ack: {}
        });
    }
    sendErrorMessage(msg, mid, andClose = true) {
        this.send({
            id: mid,
            error: {
                message: msg
            }
        });
        if (andClose) {
            this.close(utils_1.CLOSESTATUS.PROTOCOL_ERROR, msg);
        }
    }
    handleMessage(msg) {
        console.debug("< " + msg.payload + "#" + msg.id + " from " + this);
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
                        }
                        else {
                            this.sendErrorMessage("Must identify first", msg.id);
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
                                this.sendErrorMessage("Expected join or claim", msg.id);
                        }
                        break;
                    case LobbyClientState.KNOCKING:
                        // TODO allow leave and re-enter?
                        this.sendErrorMessage("Invalid message", msg.id);
                        break;
                    case LobbyClientState.INROOM:
                        switch (msg.payload) {
                            case "kickGuest":
                                this.handleKickGuest(msg);
                                break;
                            case "allowGuest":
                                this.handleAllowGuest(msg);
                                break;
                            case "broadcast":
                                this.handleBroadcast(msg);
                                break;
                            case "unicast":
                                this.handleUnicast(msg);
                                break;
                            default:
                                this.sendErrorMessage("Invalid message", msg.id);
                        }
                        break;
                    case LobbyClientState.LEFT:
                        return;
                    default:
                        console.warn("Invalid " + this + " state " + this.state);
                        this.sendErrorMessage("Internal server error", msg.id);
                }
        }
    }
    handlePing(msg) {
        this.send({
            id: msg.id,
            pong: {}
        });
    }
    handleLeave(msg) {
        this.goodbye = msg.leave.goodbye;
        this.close(utils_1.CLOSESTATUS.NORMAL);
    }
    handleIdentify(msg) {
        let role = decodeRole(msg.identify.role);
        let authError = this.server.authEngine.authClient(this, msg.identify.identity, msg.identify.token, role);
        if (!authError) {
            this.identity = msg.identify.identity;
            this.state = LobbyClientState.AUTHORIZED;
            this.role = role;
            this.server.addClient(this);
            console.log("" + this + " authorized");
            this.sendAckMessage(msg.id);
        }
        else {
            console.log("" + this + " unauthorized");
            this.sendErrorMessage("Unauthorized", msg.id);
        }
    }
    handleClaim(msg) {
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
        this.server.createRoom(this, roomId);
        this.send({
            id: this.mid++,
            enteredRoom: {
                roomId: roomId,
                hostId: this.identity
            }
        });
    }
    handleJoin(msg) {
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
    handleKickGuest(msg) {
        let guest = this.server.client(msg.kickGuest.guestId);
        if (guest && guest.state === LobbyClientState.KNOCKING && guest.room.id === this.room.id) {
            guest.sendErrorMessage(msg.kickGuest.message, guest.knockMid);
        }
        else {
            this.sendErrorMessage("Cannot kick guest", msg.id, false);
        }
    }
    handleAllowGuest(msg) {
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
        }
        else {
            this.sendErrorMessage("Cannot allow guest", msg.id, false);
        }
    }
    handleBroadcast(msg) {
        if (this.role === "host") {
            this.room.broadcast(this.identity, msg.broadcast.data);
            this.sendAckMessage(msg.id);
        }
        else {
            this.room.host.sendData(this.identity, msg.broadcast.data);
            this.sendAckMessage(msg.id);
        }
    }
    handleUnicast(msg) {
        if (this.role === "host") {
            let guest = this.room.guest(msg.unicast.guestId);
            if (!guest) {
                this.sendErrorMessage("Recepient not found", msg.id, false);
            }
            else {
                guest.sendData(this.identity, msg.unicast.data);
                this.sendAckMessage(msg.id);
            }
        }
        else {
            let host = this.room.host;
            if (host.identity === msg.unicast.guestId) {
                host.sendData(this.identity, msg.unicast.data);
                this.sendAckMessage(msg.id);
            }
            else {
                this.sendErrorMessage("Can only communicate with host", msg.id, false);
            }
        }
    }
}
exports.LobbyClient = LobbyClient;
//# sourceMappingURL=client.js.map