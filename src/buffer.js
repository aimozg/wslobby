"use strict";
/*
 * Created by aimozg on 30.11.2021.
 * Confidential.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BufferBuilder = void 0;
const buffer_1 = require("buffer");
class BufferBuilder {
    constructor(capacity = 8) {
        if (capacity < 1)
            throw new Error("BufferBuilder capacity must be > 0");
        this.capacity = capacity | 0;
        this.start = 0;
        this.buffer = buffer_1.Buffer.alloc(this.capacity);
        this.end = 0;
    }
    static of(capacity = 8) {
        return new BufferBuilder(capacity);
    }
    require(x) {
        let newEnd = this.end + x;
        if (this.capacity < newEnd) {
            let newCapacity = this.capacity * 2;
            let newBuffer = buffer_1.Buffer.alloc(newCapacity);
            this.buffer.copy(newBuffer);
            this.buffer = newBuffer;
        }
    }
    build() {
        if (this.start === 0 && this.end === this.capacity)
            return this.buffer;
        return this.buffer.subarray(this.start, this.end);
    }
    putBuffer(b) {
        this.require(b.length);
        b.copy(this.buffer, this.end);
        this.end += b.length;
        return this;
    }
    putUInt8(x) {
        this.require(1);
        this.buffer.writeUInt8(x, this.end);
        this.end += 1;
        return this;
    }
    putUInt16(x) {
        this.require(2);
        this.buffer.writeUInt16LE(x, this.end);
        this.end += 2;
        return this;
    }
    putUInt32(x) {
        this.require(4);
        this.buffer.writeUInt32LE(x, this.end);
        this.end += 4;
        return this;
    }
    putString(s) {
        this.putBuffer(buffer_1.Buffer.from(s));
        return this;
    }
}
exports.BufferBuilder = BufferBuilder;
//# sourceMappingURL=buffer.js.map