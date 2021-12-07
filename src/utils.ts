/*
 * Created by aimozg on 29.11.2021.
 */

import * as $protobuf from "protobufjs";
import {wslobby} from "./wslobby";

export const CLOSESTATUS = {
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
}

export interface PMessageClass<INTERFACE, CLASS> {
	verify(p:INTERFACE):string|null;
	create(p:INTERFACE):CLASS;
	encode(msg:CLASS, writer?: $protobuf.Writer): $protobuf.Writer
}

export function compose<INTERFACE,CLASS>(
	clazz: PMessageClass<INTERFACE,CLASS>,
	payload: INTERFACE
):Uint8Array {
	let error = clazz.verify(payload);
	if (error) throw Error(error);
	return clazz.encode(clazz.create(payload)).finish()
}
