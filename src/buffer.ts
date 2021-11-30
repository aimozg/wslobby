/*
 * Created by aimozg on 30.11.2021.
 * Confidential.
 */

import {Buffer} from "buffer";

export class BufferBuilder {
	private buffer:Buffer;
	private capacity:number;
	private start:number;
	private end:number;
	constructor(capacity:number = 8) {
		if (capacity < 1) throw new Error("BufferBuilder capacity must be > 0");
		this.capacity = capacity|0;
		this.start = 0;
		this.buffer = Buffer.alloc(this.capacity);
		this.end = 0;
	}
	static of(capacity:number = 8):BufferBuilder {
		return new BufferBuilder(capacity)
	}
	require(x:number) {
		let newEnd = this.end + x;
		if (this.capacity < newEnd) {
			let newCapacity = this.capacity*2;
			let newBuffer = Buffer.alloc(newCapacity);
			this.buffer.copy(newBuffer);
			this.buffer = newBuffer;
		}
	}
	build():Buffer {
		if (this.start === 0 && this.end === this.capacity) return this.buffer;
		return this.buffer.subarray(this.start, this.end)
	}
	putBuffer(b:Buffer):this {
		this.require(b.length);
		b.copy(this.buffer, this.end);
		this.end += b.length;
		return this;
	}
	putUInt8(x:number):this {
		this.require(1);
		this.buffer.writeUInt8(x, this.end);
		this.end += 1;
		return this;
	}
	putUInt16(x:number):this {
		this.require(2);
		this.buffer.writeUInt16LE(x, this.end);
		this.end += 2;
		return this;
	}
	putUInt32(x:number):this {
		this.require(4);
		this.buffer.writeUInt32LE(x, this.end);
		this.end += 4;
		return this;
	}
	putString(s:string):this {
		this.putBuffer(Buffer.from(s));
		return this;
	}
}
