"use strict";
/*
 * Created by aimozg on 29.11.2021.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.compose = exports.CLOSESTATUS = void 0;
exports.CLOSESTATUS = {
    NORMAL: 1000,
    GOING_AWAY: 1001,
    PROTOCOL_ERROR: 1002,
    UNSUPPORTED_DATA: 1003,
    INVALID_FRAME_PAYLOAD_DATA: 1007,
    POLICY_VIOLATION: 1008,
    MESSAGE_TOO_BIG: 1009,
    MISSING_EXTENSION: 1010,
    INTERNAL_ERROR: 1011,
    SERVICE_RESTART: 1012,
    TRY_AGAIN_LATER: 1013,
    BAD_GATEWAY: 1014,
};
function compose(clazz, payload) {
    let error = clazz.verify(payload);
    if (error)
        throw Error(error);
    return clazz.encode(clazz.create(payload)).finish();
}
exports.compose = compose;
//# sourceMappingURL=utils.js.map