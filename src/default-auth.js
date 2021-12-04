"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultAuthEngine = void 0;
let name2token = {};
let room2host = {};
exports.defaultAuthEngine = {
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
//# sourceMappingURL=default-auth.js.map