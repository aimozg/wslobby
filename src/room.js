"use strict";
/*
 * Created by aimozg on 30.11.2021.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LobbyRoom = void 0;
class LobbyRoom {
    constructor(server, host, id) {
        this.server = server;
        this.host = host;
        this.id = id;
        this.knocking = [];
        this.guests = [];
    }
    guest(guestId) {
        return this.guests.find(g => g.identity === guestId);
    }
    addKnocking(client, greeting) {
        this.knocking.push(client);
        this.host.send({
            id: client.knockMid,
            guestKnock: {
                guestId: client.identity,
                greeting: greeting
            }
        });
    }
    addGuest(client) {
        let i = this.knocking.indexOf(client);
        if (i >= 0) {
            this.knocking.splice(i, 1);
        }
        this.guests.push(client);
    }
    someoneLeft(client) {
        if (client.role === "guest") {
            this.removeGuest(client, "Socket closed");
        }
        else if (client === this.host) {
            this.server.closeRoom(this, "Host left");
        }
    }
    removeGuest(client, msg) {
        let i = this.knocking.indexOf(client);
        if (i >= 0) {
            this.knocking.splice(i, 1);
            if (client.isOpen()) {
                client.sendErrorMessage(msg, client.knockMid);
            }
            return;
        }
        i = this.guests.indexOf(client);
        if (i >= 0) {
            this.guests.splice(i, 1);
            if (client.isOpen()) {
                client.sendErrorMessage(msg, 0);
            }
            this.host.send({
                id: this.host.mid++,
                guestLeft: {
                    guestId: client.identity,
                    goodbye: msg
                }
            });
            return;
        }
    }
    close(reason) {
        for (let guest of this.guests) {
            guest.sendErrorMessage(reason, 0);
        }
        for (let guest of this.knocking) {
            guest.sendErrorMessage(reason, guest.knockMid);
        }
        this.host.sendErrorMessage(reason, 0);
    }
    broadcast(senderId, data) {
        for (let guest of this.guests) {
            guest.sendData(senderId, data);
        }
    }
}
exports.LobbyRoom = LobbyRoom;
//# sourceMappingURL=room.js.map