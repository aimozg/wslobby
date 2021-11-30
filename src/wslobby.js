/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.wslobby = (function() {

    /**
     * Namespace wslobby.
     * @exports wslobby
     * @namespace
     */
    var wslobby = {};

    /**
     * Role enum.
     * @name wslobby.Role
     * @enum {number}
     * @property {number} HOST=0 HOST value
     * @property {number} GUEST=1 GUEST value
     */
    wslobby.Role = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "HOST"] = 0;
        values[valuesById[1] = "GUEST"] = 1;
        return values;
    })();

    wslobby.Command = (function() {

        /**
         * Properties of a Command.
         * @memberof wslobby
         * @interface ICommand
         * @property {number|null} [id] Command id
         * @property {wslobby.Command.IPing|null} [ping] Command ping
         * @property {wslobby.Command.IIdentify|null} [identify] Command identify
         * @property {wslobby.Command.IClaimRoom|null} [claimRoom] Command claimRoom
         * @property {wslobby.Command.IJoinRoom|null} [joinRoom] Command joinRoom
         * @property {wslobby.Command.ILeave|null} [leave] Command leave
         * @property {wslobby.Command.IKickGuest|null} [kickGuest] Command kickGuest
         * @property {wslobby.Command.IAllowGuest|null} [allowGuest] Command allowGuest
         * @property {wslobby.Command.IBroadcast|null} [broadcast] Command broadcast
         * @property {wslobby.Command.IUnicast|null} [unicast] Command unicast
         */

        /**
         * Constructs a new Command.
         * @memberof wslobby
         * @classdesc Represents a Command.
         * @implements ICommand
         * @constructor
         * @param {wslobby.ICommand=} [properties] Properties to set
         */
        function Command(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Command id.
         * @member {number} id
         * @memberof wslobby.Command
         * @instance
         */
        Command.prototype.id = 0;

        /**
         * Command ping.
         * @member {wslobby.Command.IPing|null|undefined} ping
         * @memberof wslobby.Command
         * @instance
         */
        Command.prototype.ping = null;

        /**
         * Command identify.
         * @member {wslobby.Command.IIdentify|null|undefined} identify
         * @memberof wslobby.Command
         * @instance
         */
        Command.prototype.identify = null;

        /**
         * Command claimRoom.
         * @member {wslobby.Command.IClaimRoom|null|undefined} claimRoom
         * @memberof wslobby.Command
         * @instance
         */
        Command.prototype.claimRoom = null;

        /**
         * Command joinRoom.
         * @member {wslobby.Command.IJoinRoom|null|undefined} joinRoom
         * @memberof wslobby.Command
         * @instance
         */
        Command.prototype.joinRoom = null;

        /**
         * Command leave.
         * @member {wslobby.Command.ILeave|null|undefined} leave
         * @memberof wslobby.Command
         * @instance
         */
        Command.prototype.leave = null;

        /**
         * Command kickGuest.
         * @member {wslobby.Command.IKickGuest|null|undefined} kickGuest
         * @memberof wslobby.Command
         * @instance
         */
        Command.prototype.kickGuest = null;

        /**
         * Command allowGuest.
         * @member {wslobby.Command.IAllowGuest|null|undefined} allowGuest
         * @memberof wslobby.Command
         * @instance
         */
        Command.prototype.allowGuest = null;

        /**
         * Command broadcast.
         * @member {wslobby.Command.IBroadcast|null|undefined} broadcast
         * @memberof wslobby.Command
         * @instance
         */
        Command.prototype.broadcast = null;

        /**
         * Command unicast.
         * @member {wslobby.Command.IUnicast|null|undefined} unicast
         * @memberof wslobby.Command
         * @instance
         */
        Command.prototype.unicast = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * Command payload.
         * @member {"ping"|"identify"|"claimRoom"|"joinRoom"|"leave"|"kickGuest"|"allowGuest"|"broadcast"|"unicast"|undefined} payload
         * @memberof wslobby.Command
         * @instance
         */
        Object.defineProperty(Command.prototype, "payload", {
            get: $util.oneOfGetter($oneOfFields = ["ping", "identify", "claimRoom", "joinRoom", "leave", "kickGuest", "allowGuest", "broadcast", "unicast"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Command instance using the specified properties.
         * @function create
         * @memberof wslobby.Command
         * @static
         * @param {wslobby.ICommand=} [properties] Properties to set
         * @returns {wslobby.Command} Command instance
         */
        Command.create = function create(properties) {
            return new Command(properties);
        };

        /**
         * Encodes the specified Command message. Does not implicitly {@link wslobby.Command.verify|verify} messages.
         * @function encode
         * @memberof wslobby.Command
         * @static
         * @param {wslobby.ICommand} message Command message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Command.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.ping != null && Object.hasOwnProperty.call(message, "ping"))
                $root.wslobby.Command.Ping.encode(message.ping, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.identify != null && Object.hasOwnProperty.call(message, "identify"))
                $root.wslobby.Command.Identify.encode(message.identify, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.claimRoom != null && Object.hasOwnProperty.call(message, "claimRoom"))
                $root.wslobby.Command.ClaimRoom.encode(message.claimRoom, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.joinRoom != null && Object.hasOwnProperty.call(message, "joinRoom"))
                $root.wslobby.Command.JoinRoom.encode(message.joinRoom, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.leave != null && Object.hasOwnProperty.call(message, "leave"))
                $root.wslobby.Command.Leave.encode(message.leave, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.kickGuest != null && Object.hasOwnProperty.call(message, "kickGuest"))
                $root.wslobby.Command.KickGuest.encode(message.kickGuest, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.allowGuest != null && Object.hasOwnProperty.call(message, "allowGuest"))
                $root.wslobby.Command.AllowGuest.encode(message.allowGuest, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.broadcast != null && Object.hasOwnProperty.call(message, "broadcast"))
                $root.wslobby.Command.Broadcast.encode(message.broadcast, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.unicast != null && Object.hasOwnProperty.call(message, "unicast"))
                $root.wslobby.Command.Unicast.encode(message.unicast, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Command message, length delimited. Does not implicitly {@link wslobby.Command.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wslobby.Command
         * @static
         * @param {wslobby.ICommand} message Command message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Command.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Command message from the specified reader or buffer.
         * @function decode
         * @memberof wslobby.Command
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wslobby.Command} Command
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Command.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wslobby.Command();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.ping = $root.wslobby.Command.Ping.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.identify = $root.wslobby.Command.Identify.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.claimRoom = $root.wslobby.Command.ClaimRoom.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.joinRoom = $root.wslobby.Command.JoinRoom.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.leave = $root.wslobby.Command.Leave.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.kickGuest = $root.wslobby.Command.KickGuest.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.allowGuest = $root.wslobby.Command.AllowGuest.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.broadcast = $root.wslobby.Command.Broadcast.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.unicast = $root.wslobby.Command.Unicast.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Command message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wslobby.Command
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wslobby.Command} Command
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Command.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Command message.
         * @function verify
         * @memberof wslobby.Command
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Command.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.ping != null && message.hasOwnProperty("ping")) {
                properties.payload = 1;
                {
                    var error = $root.wslobby.Command.Ping.verify(message.ping);
                    if (error)
                        return "ping." + error;
                }
            }
            if (message.identify != null && message.hasOwnProperty("identify")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    var error = $root.wslobby.Command.Identify.verify(message.identify);
                    if (error)
                        return "identify." + error;
                }
            }
            if (message.claimRoom != null && message.hasOwnProperty("claimRoom")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    var error = $root.wslobby.Command.ClaimRoom.verify(message.claimRoom);
                    if (error)
                        return "claimRoom." + error;
                }
            }
            if (message.joinRoom != null && message.hasOwnProperty("joinRoom")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    var error = $root.wslobby.Command.JoinRoom.verify(message.joinRoom);
                    if (error)
                        return "joinRoom." + error;
                }
            }
            if (message.leave != null && message.hasOwnProperty("leave")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    var error = $root.wslobby.Command.Leave.verify(message.leave);
                    if (error)
                        return "leave." + error;
                }
            }
            if (message.kickGuest != null && message.hasOwnProperty("kickGuest")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    var error = $root.wslobby.Command.KickGuest.verify(message.kickGuest);
                    if (error)
                        return "kickGuest." + error;
                }
            }
            if (message.allowGuest != null && message.hasOwnProperty("allowGuest")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    var error = $root.wslobby.Command.AllowGuest.verify(message.allowGuest);
                    if (error)
                        return "allowGuest." + error;
                }
            }
            if (message.broadcast != null && message.hasOwnProperty("broadcast")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    var error = $root.wslobby.Command.Broadcast.verify(message.broadcast);
                    if (error)
                        return "broadcast." + error;
                }
            }
            if (message.unicast != null && message.hasOwnProperty("unicast")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    var error = $root.wslobby.Command.Unicast.verify(message.unicast);
                    if (error)
                        return "unicast." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Command message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wslobby.Command
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wslobby.Command} Command
         */
        Command.fromObject = function fromObject(object) {
            if (object instanceof $root.wslobby.Command)
                return object;
            var message = new $root.wslobby.Command();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.ping != null) {
                if (typeof object.ping !== "object")
                    throw TypeError(".wslobby.Command.ping: object expected");
                message.ping = $root.wslobby.Command.Ping.fromObject(object.ping);
            }
            if (object.identify != null) {
                if (typeof object.identify !== "object")
                    throw TypeError(".wslobby.Command.identify: object expected");
                message.identify = $root.wslobby.Command.Identify.fromObject(object.identify);
            }
            if (object.claimRoom != null) {
                if (typeof object.claimRoom !== "object")
                    throw TypeError(".wslobby.Command.claimRoom: object expected");
                message.claimRoom = $root.wslobby.Command.ClaimRoom.fromObject(object.claimRoom);
            }
            if (object.joinRoom != null) {
                if (typeof object.joinRoom !== "object")
                    throw TypeError(".wslobby.Command.joinRoom: object expected");
                message.joinRoom = $root.wslobby.Command.JoinRoom.fromObject(object.joinRoom);
            }
            if (object.leave != null) {
                if (typeof object.leave !== "object")
                    throw TypeError(".wslobby.Command.leave: object expected");
                message.leave = $root.wslobby.Command.Leave.fromObject(object.leave);
            }
            if (object.kickGuest != null) {
                if (typeof object.kickGuest !== "object")
                    throw TypeError(".wslobby.Command.kickGuest: object expected");
                message.kickGuest = $root.wslobby.Command.KickGuest.fromObject(object.kickGuest);
            }
            if (object.allowGuest != null) {
                if (typeof object.allowGuest !== "object")
                    throw TypeError(".wslobby.Command.allowGuest: object expected");
                message.allowGuest = $root.wslobby.Command.AllowGuest.fromObject(object.allowGuest);
            }
            if (object.broadcast != null) {
                if (typeof object.broadcast !== "object")
                    throw TypeError(".wslobby.Command.broadcast: object expected");
                message.broadcast = $root.wslobby.Command.Broadcast.fromObject(object.broadcast);
            }
            if (object.unicast != null) {
                if (typeof object.unicast !== "object")
                    throw TypeError(".wslobby.Command.unicast: object expected");
                message.unicast = $root.wslobby.Command.Unicast.fromObject(object.unicast);
            }
            return message;
        };

        /**
         * Creates a plain object from a Command message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wslobby.Command
         * @static
         * @param {wslobby.Command} message Command
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Command.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.id = 0;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.ping != null && message.hasOwnProperty("ping")) {
                object.ping = $root.wslobby.Command.Ping.toObject(message.ping, options);
                if (options.oneofs)
                    object.payload = "ping";
            }
            if (message.identify != null && message.hasOwnProperty("identify")) {
                object.identify = $root.wslobby.Command.Identify.toObject(message.identify, options);
                if (options.oneofs)
                    object.payload = "identify";
            }
            if (message.claimRoom != null && message.hasOwnProperty("claimRoom")) {
                object.claimRoom = $root.wslobby.Command.ClaimRoom.toObject(message.claimRoom, options);
                if (options.oneofs)
                    object.payload = "claimRoom";
            }
            if (message.joinRoom != null && message.hasOwnProperty("joinRoom")) {
                object.joinRoom = $root.wslobby.Command.JoinRoom.toObject(message.joinRoom, options);
                if (options.oneofs)
                    object.payload = "joinRoom";
            }
            if (message.leave != null && message.hasOwnProperty("leave")) {
                object.leave = $root.wslobby.Command.Leave.toObject(message.leave, options);
                if (options.oneofs)
                    object.payload = "leave";
            }
            if (message.kickGuest != null && message.hasOwnProperty("kickGuest")) {
                object.kickGuest = $root.wslobby.Command.KickGuest.toObject(message.kickGuest, options);
                if (options.oneofs)
                    object.payload = "kickGuest";
            }
            if (message.allowGuest != null && message.hasOwnProperty("allowGuest")) {
                object.allowGuest = $root.wslobby.Command.AllowGuest.toObject(message.allowGuest, options);
                if (options.oneofs)
                    object.payload = "allowGuest";
            }
            if (message.broadcast != null && message.hasOwnProperty("broadcast")) {
                object.broadcast = $root.wslobby.Command.Broadcast.toObject(message.broadcast, options);
                if (options.oneofs)
                    object.payload = "broadcast";
            }
            if (message.unicast != null && message.hasOwnProperty("unicast")) {
                object.unicast = $root.wslobby.Command.Unicast.toObject(message.unicast, options);
                if (options.oneofs)
                    object.payload = "unicast";
            }
            return object;
        };

        /**
         * Converts this Command to JSON.
         * @function toJSON
         * @memberof wslobby.Command
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Command.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        Command.Ping = (function() {

            /**
             * Properties of a Ping.
             * @memberof wslobby.Command
             * @interface IPing
             */

            /**
             * Constructs a new Ping.
             * @memberof wslobby.Command
             * @classdesc Represents a Ping.
             * @implements IPing
             * @constructor
             * @param {wslobby.Command.IPing=} [properties] Properties to set
             */
            function Ping(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new Ping instance using the specified properties.
             * @function create
             * @memberof wslobby.Command.Ping
             * @static
             * @param {wslobby.Command.IPing=} [properties] Properties to set
             * @returns {wslobby.Command.Ping} Ping instance
             */
            Ping.create = function create(properties) {
                return new Ping(properties);
            };

            /**
             * Encodes the specified Ping message. Does not implicitly {@link wslobby.Command.Ping.verify|verify} messages.
             * @function encode
             * @memberof wslobby.Command.Ping
             * @static
             * @param {wslobby.Command.IPing} message Ping message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Ping.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified Ping message, length delimited. Does not implicitly {@link wslobby.Command.Ping.verify|verify} messages.
             * @function encodeDelimited
             * @memberof wslobby.Command.Ping
             * @static
             * @param {wslobby.Command.IPing} message Ping message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Ping.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Ping message from the specified reader or buffer.
             * @function decode
             * @memberof wslobby.Command.Ping
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {wslobby.Command.Ping} Ping
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Ping.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wslobby.Command.Ping();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Ping message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof wslobby.Command.Ping
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {wslobby.Command.Ping} Ping
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Ping.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Ping message.
             * @function verify
             * @memberof wslobby.Command.Ping
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Ping.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a Ping message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof wslobby.Command.Ping
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {wslobby.Command.Ping} Ping
             */
            Ping.fromObject = function fromObject(object) {
                if (object instanceof $root.wslobby.Command.Ping)
                    return object;
                return new $root.wslobby.Command.Ping();
            };

            /**
             * Creates a plain object from a Ping message. Also converts values to other types if specified.
             * @function toObject
             * @memberof wslobby.Command.Ping
             * @static
             * @param {wslobby.Command.Ping} message Ping
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Ping.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this Ping to JSON.
             * @function toJSON
             * @memberof wslobby.Command.Ping
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Ping.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Ping;
        })();

        Command.Identify = (function() {

            /**
             * Properties of an Identify.
             * @memberof wslobby.Command
             * @interface IIdentify
             * @property {string|null} [identity] Identify identity
             * @property {string|null} [token] Identify token
             * @property {wslobby.Role|null} [role] Identify role
             */

            /**
             * Constructs a new Identify.
             * @memberof wslobby.Command
             * @classdesc Represents an Identify.
             * @implements IIdentify
             * @constructor
             * @param {wslobby.Command.IIdentify=} [properties] Properties to set
             */
            function Identify(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Identify identity.
             * @member {string} identity
             * @memberof wslobby.Command.Identify
             * @instance
             */
            Identify.prototype.identity = "";

            /**
             * Identify token.
             * @member {string} token
             * @memberof wslobby.Command.Identify
             * @instance
             */
            Identify.prototype.token = "";

            /**
             * Identify role.
             * @member {wslobby.Role} role
             * @memberof wslobby.Command.Identify
             * @instance
             */
            Identify.prototype.role = 0;

            /**
             * Creates a new Identify instance using the specified properties.
             * @function create
             * @memberof wslobby.Command.Identify
             * @static
             * @param {wslobby.Command.IIdentify=} [properties] Properties to set
             * @returns {wslobby.Command.Identify} Identify instance
             */
            Identify.create = function create(properties) {
                return new Identify(properties);
            };

            /**
             * Encodes the specified Identify message. Does not implicitly {@link wslobby.Command.Identify.verify|verify} messages.
             * @function encode
             * @memberof wslobby.Command.Identify
             * @static
             * @param {wslobby.Command.IIdentify} message Identify message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Identify.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.identity != null && Object.hasOwnProperty.call(message, "identity"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.identity);
                if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.token);
                if (message.role != null && Object.hasOwnProperty.call(message, "role"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.role);
                return writer;
            };

            /**
             * Encodes the specified Identify message, length delimited. Does not implicitly {@link wslobby.Command.Identify.verify|verify} messages.
             * @function encodeDelimited
             * @memberof wslobby.Command.Identify
             * @static
             * @param {wslobby.Command.IIdentify} message Identify message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Identify.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Identify message from the specified reader or buffer.
             * @function decode
             * @memberof wslobby.Command.Identify
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {wslobby.Command.Identify} Identify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Identify.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wslobby.Command.Identify();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.identity = reader.string();
                        break;
                    case 2:
                        message.token = reader.string();
                        break;
                    case 3:
                        message.role = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Identify message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof wslobby.Command.Identify
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {wslobby.Command.Identify} Identify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Identify.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Identify message.
             * @function verify
             * @memberof wslobby.Command.Identify
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Identify.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.identity != null && message.hasOwnProperty("identity"))
                    if (!$util.isString(message.identity))
                        return "identity: string expected";
                if (message.token != null && message.hasOwnProperty("token"))
                    if (!$util.isString(message.token))
                        return "token: string expected";
                if (message.role != null && message.hasOwnProperty("role"))
                    switch (message.role) {
                    default:
                        return "role: enum value expected";
                    case 0:
                    case 1:
                        break;
                    }
                return null;
            };

            /**
             * Creates an Identify message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof wslobby.Command.Identify
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {wslobby.Command.Identify} Identify
             */
            Identify.fromObject = function fromObject(object) {
                if (object instanceof $root.wslobby.Command.Identify)
                    return object;
                var message = new $root.wslobby.Command.Identify();
                if (object.identity != null)
                    message.identity = String(object.identity);
                if (object.token != null)
                    message.token = String(object.token);
                switch (object.role) {
                case "HOST":
                case 0:
                    message.role = 0;
                    break;
                case "GUEST":
                case 1:
                    message.role = 1;
                    break;
                }
                return message;
            };

            /**
             * Creates a plain object from an Identify message. Also converts values to other types if specified.
             * @function toObject
             * @memberof wslobby.Command.Identify
             * @static
             * @param {wslobby.Command.Identify} message Identify
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Identify.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.identity = "";
                    object.token = "";
                    object.role = options.enums === String ? "HOST" : 0;
                }
                if (message.identity != null && message.hasOwnProperty("identity"))
                    object.identity = message.identity;
                if (message.token != null && message.hasOwnProperty("token"))
                    object.token = message.token;
                if (message.role != null && message.hasOwnProperty("role"))
                    object.role = options.enums === String ? $root.wslobby.Role[message.role] : message.role;
                return object;
            };

            /**
             * Converts this Identify to JSON.
             * @function toJSON
             * @memberof wslobby.Command.Identify
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Identify.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Identify;
        })();

        Command.ClaimRoom = (function() {

            /**
             * Properties of a ClaimRoom.
             * @memberof wslobby.Command
             * @interface IClaimRoom
             * @property {string|null} [roomId] ClaimRoom roomId
             */

            /**
             * Constructs a new ClaimRoom.
             * @memberof wslobby.Command
             * @classdesc Represents a ClaimRoom.
             * @implements IClaimRoom
             * @constructor
             * @param {wslobby.Command.IClaimRoom=} [properties] Properties to set
             */
            function ClaimRoom(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ClaimRoom roomId.
             * @member {string} roomId
             * @memberof wslobby.Command.ClaimRoom
             * @instance
             */
            ClaimRoom.prototype.roomId = "";

            /**
             * Creates a new ClaimRoom instance using the specified properties.
             * @function create
             * @memberof wslobby.Command.ClaimRoom
             * @static
             * @param {wslobby.Command.IClaimRoom=} [properties] Properties to set
             * @returns {wslobby.Command.ClaimRoom} ClaimRoom instance
             */
            ClaimRoom.create = function create(properties) {
                return new ClaimRoom(properties);
            };

            /**
             * Encodes the specified ClaimRoom message. Does not implicitly {@link wslobby.Command.ClaimRoom.verify|verify} messages.
             * @function encode
             * @memberof wslobby.Command.ClaimRoom
             * @static
             * @param {wslobby.Command.IClaimRoom} message ClaimRoom message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ClaimRoom.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.roomId);
                return writer;
            };

            /**
             * Encodes the specified ClaimRoom message, length delimited. Does not implicitly {@link wslobby.Command.ClaimRoom.verify|verify} messages.
             * @function encodeDelimited
             * @memberof wslobby.Command.ClaimRoom
             * @static
             * @param {wslobby.Command.IClaimRoom} message ClaimRoom message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ClaimRoom.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ClaimRoom message from the specified reader or buffer.
             * @function decode
             * @memberof wslobby.Command.ClaimRoom
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {wslobby.Command.ClaimRoom} ClaimRoom
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ClaimRoom.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wslobby.Command.ClaimRoom();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.roomId = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ClaimRoom message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof wslobby.Command.ClaimRoom
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {wslobby.Command.ClaimRoom} ClaimRoom
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ClaimRoom.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ClaimRoom message.
             * @function verify
             * @memberof wslobby.Command.ClaimRoom
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ClaimRoom.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.roomId != null && message.hasOwnProperty("roomId"))
                    if (!$util.isString(message.roomId))
                        return "roomId: string expected";
                return null;
            };

            /**
             * Creates a ClaimRoom message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof wslobby.Command.ClaimRoom
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {wslobby.Command.ClaimRoom} ClaimRoom
             */
            ClaimRoom.fromObject = function fromObject(object) {
                if (object instanceof $root.wslobby.Command.ClaimRoom)
                    return object;
                var message = new $root.wslobby.Command.ClaimRoom();
                if (object.roomId != null)
                    message.roomId = String(object.roomId);
                return message;
            };

            /**
             * Creates a plain object from a ClaimRoom message. Also converts values to other types if specified.
             * @function toObject
             * @memberof wslobby.Command.ClaimRoom
             * @static
             * @param {wslobby.Command.ClaimRoom} message ClaimRoom
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ClaimRoom.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.roomId = "";
                if (message.roomId != null && message.hasOwnProperty("roomId"))
                    object.roomId = message.roomId;
                return object;
            };

            /**
             * Converts this ClaimRoom to JSON.
             * @function toJSON
             * @memberof wslobby.Command.ClaimRoom
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ClaimRoom.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ClaimRoom;
        })();

        Command.JoinRoom = (function() {

            /**
             * Properties of a JoinRoom.
             * @memberof wslobby.Command
             * @interface IJoinRoom
             * @property {string|null} [roomId] JoinRoom roomId
             * @property {string|null} [greeting] JoinRoom greeting
             */

            /**
             * Constructs a new JoinRoom.
             * @memberof wslobby.Command
             * @classdesc Represents a JoinRoom.
             * @implements IJoinRoom
             * @constructor
             * @param {wslobby.Command.IJoinRoom=} [properties] Properties to set
             */
            function JoinRoom(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * JoinRoom roomId.
             * @member {string} roomId
             * @memberof wslobby.Command.JoinRoom
             * @instance
             */
            JoinRoom.prototype.roomId = "";

            /**
             * JoinRoom greeting.
             * @member {string} greeting
             * @memberof wslobby.Command.JoinRoom
             * @instance
             */
            JoinRoom.prototype.greeting = "";

            /**
             * Creates a new JoinRoom instance using the specified properties.
             * @function create
             * @memberof wslobby.Command.JoinRoom
             * @static
             * @param {wslobby.Command.IJoinRoom=} [properties] Properties to set
             * @returns {wslobby.Command.JoinRoom} JoinRoom instance
             */
            JoinRoom.create = function create(properties) {
                return new JoinRoom(properties);
            };

            /**
             * Encodes the specified JoinRoom message. Does not implicitly {@link wslobby.Command.JoinRoom.verify|verify} messages.
             * @function encode
             * @memberof wslobby.Command.JoinRoom
             * @static
             * @param {wslobby.Command.IJoinRoom} message JoinRoom message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            JoinRoom.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.roomId);
                if (message.greeting != null && Object.hasOwnProperty.call(message, "greeting"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.greeting);
                return writer;
            };

            /**
             * Encodes the specified JoinRoom message, length delimited. Does not implicitly {@link wslobby.Command.JoinRoom.verify|verify} messages.
             * @function encodeDelimited
             * @memberof wslobby.Command.JoinRoom
             * @static
             * @param {wslobby.Command.IJoinRoom} message JoinRoom message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            JoinRoom.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a JoinRoom message from the specified reader or buffer.
             * @function decode
             * @memberof wslobby.Command.JoinRoom
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {wslobby.Command.JoinRoom} JoinRoom
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            JoinRoom.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wslobby.Command.JoinRoom();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.roomId = reader.string();
                        break;
                    case 2:
                        message.greeting = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a JoinRoom message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof wslobby.Command.JoinRoom
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {wslobby.Command.JoinRoom} JoinRoom
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            JoinRoom.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a JoinRoom message.
             * @function verify
             * @memberof wslobby.Command.JoinRoom
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            JoinRoom.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.roomId != null && message.hasOwnProperty("roomId"))
                    if (!$util.isString(message.roomId))
                        return "roomId: string expected";
                if (message.greeting != null && message.hasOwnProperty("greeting"))
                    if (!$util.isString(message.greeting))
                        return "greeting: string expected";
                return null;
            };

            /**
             * Creates a JoinRoom message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof wslobby.Command.JoinRoom
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {wslobby.Command.JoinRoom} JoinRoom
             */
            JoinRoom.fromObject = function fromObject(object) {
                if (object instanceof $root.wslobby.Command.JoinRoom)
                    return object;
                var message = new $root.wslobby.Command.JoinRoom();
                if (object.roomId != null)
                    message.roomId = String(object.roomId);
                if (object.greeting != null)
                    message.greeting = String(object.greeting);
                return message;
            };

            /**
             * Creates a plain object from a JoinRoom message. Also converts values to other types if specified.
             * @function toObject
             * @memberof wslobby.Command.JoinRoom
             * @static
             * @param {wslobby.Command.JoinRoom} message JoinRoom
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            JoinRoom.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.roomId = "";
                    object.greeting = "";
                }
                if (message.roomId != null && message.hasOwnProperty("roomId"))
                    object.roomId = message.roomId;
                if (message.greeting != null && message.hasOwnProperty("greeting"))
                    object.greeting = message.greeting;
                return object;
            };

            /**
             * Converts this JoinRoom to JSON.
             * @function toJSON
             * @memberof wslobby.Command.JoinRoom
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            JoinRoom.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return JoinRoom;
        })();

        Command.Leave = (function() {

            /**
             * Properties of a Leave.
             * @memberof wslobby.Command
             * @interface ILeave
             * @property {string|null} [goodbye] Leave goodbye
             */

            /**
             * Constructs a new Leave.
             * @memberof wslobby.Command
             * @classdesc Represents a Leave.
             * @implements ILeave
             * @constructor
             * @param {wslobby.Command.ILeave=} [properties] Properties to set
             */
            function Leave(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Leave goodbye.
             * @member {string} goodbye
             * @memberof wslobby.Command.Leave
             * @instance
             */
            Leave.prototype.goodbye = "";

            /**
             * Creates a new Leave instance using the specified properties.
             * @function create
             * @memberof wslobby.Command.Leave
             * @static
             * @param {wslobby.Command.ILeave=} [properties] Properties to set
             * @returns {wslobby.Command.Leave} Leave instance
             */
            Leave.create = function create(properties) {
                return new Leave(properties);
            };

            /**
             * Encodes the specified Leave message. Does not implicitly {@link wslobby.Command.Leave.verify|verify} messages.
             * @function encode
             * @memberof wslobby.Command.Leave
             * @static
             * @param {wslobby.Command.ILeave} message Leave message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Leave.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.goodbye != null && Object.hasOwnProperty.call(message, "goodbye"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.goodbye);
                return writer;
            };

            /**
             * Encodes the specified Leave message, length delimited. Does not implicitly {@link wslobby.Command.Leave.verify|verify} messages.
             * @function encodeDelimited
             * @memberof wslobby.Command.Leave
             * @static
             * @param {wslobby.Command.ILeave} message Leave message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Leave.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Leave message from the specified reader or buffer.
             * @function decode
             * @memberof wslobby.Command.Leave
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {wslobby.Command.Leave} Leave
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Leave.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wslobby.Command.Leave();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.goodbye = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Leave message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof wslobby.Command.Leave
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {wslobby.Command.Leave} Leave
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Leave.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Leave message.
             * @function verify
             * @memberof wslobby.Command.Leave
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Leave.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.goodbye != null && message.hasOwnProperty("goodbye"))
                    if (!$util.isString(message.goodbye))
                        return "goodbye: string expected";
                return null;
            };

            /**
             * Creates a Leave message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof wslobby.Command.Leave
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {wslobby.Command.Leave} Leave
             */
            Leave.fromObject = function fromObject(object) {
                if (object instanceof $root.wslobby.Command.Leave)
                    return object;
                var message = new $root.wslobby.Command.Leave();
                if (object.goodbye != null)
                    message.goodbye = String(object.goodbye);
                return message;
            };

            /**
             * Creates a plain object from a Leave message. Also converts values to other types if specified.
             * @function toObject
             * @memberof wslobby.Command.Leave
             * @static
             * @param {wslobby.Command.Leave} message Leave
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Leave.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.goodbye = "";
                if (message.goodbye != null && message.hasOwnProperty("goodbye"))
                    object.goodbye = message.goodbye;
                return object;
            };

            /**
             * Converts this Leave to JSON.
             * @function toJSON
             * @memberof wslobby.Command.Leave
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Leave.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Leave;
        })();

        Command.KickGuest = (function() {

            /**
             * Properties of a KickGuest.
             * @memberof wslobby.Command
             * @interface IKickGuest
             * @property {string|null} [guestId] KickGuest guestId
             * @property {string|null} [message] KickGuest message
             */

            /**
             * Constructs a new KickGuest.
             * @memberof wslobby.Command
             * @classdesc Represents a KickGuest.
             * @implements IKickGuest
             * @constructor
             * @param {wslobby.Command.IKickGuest=} [properties] Properties to set
             */
            function KickGuest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * KickGuest guestId.
             * @member {string} guestId
             * @memberof wslobby.Command.KickGuest
             * @instance
             */
            KickGuest.prototype.guestId = "";

            /**
             * KickGuest message.
             * @member {string} message
             * @memberof wslobby.Command.KickGuest
             * @instance
             */
            KickGuest.prototype.message = "";

            /**
             * Creates a new KickGuest instance using the specified properties.
             * @function create
             * @memberof wslobby.Command.KickGuest
             * @static
             * @param {wslobby.Command.IKickGuest=} [properties] Properties to set
             * @returns {wslobby.Command.KickGuest} KickGuest instance
             */
            KickGuest.create = function create(properties) {
                return new KickGuest(properties);
            };

            /**
             * Encodes the specified KickGuest message. Does not implicitly {@link wslobby.Command.KickGuest.verify|verify} messages.
             * @function encode
             * @memberof wslobby.Command.KickGuest
             * @static
             * @param {wslobby.Command.IKickGuest} message KickGuest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            KickGuest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.guestId != null && Object.hasOwnProperty.call(message, "guestId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.guestId);
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
                return writer;
            };

            /**
             * Encodes the specified KickGuest message, length delimited. Does not implicitly {@link wslobby.Command.KickGuest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof wslobby.Command.KickGuest
             * @static
             * @param {wslobby.Command.IKickGuest} message KickGuest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            KickGuest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a KickGuest message from the specified reader or buffer.
             * @function decode
             * @memberof wslobby.Command.KickGuest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {wslobby.Command.KickGuest} KickGuest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            KickGuest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wslobby.Command.KickGuest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.guestId = reader.string();
                        break;
                    case 2:
                        message.message = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a KickGuest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof wslobby.Command.KickGuest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {wslobby.Command.KickGuest} KickGuest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            KickGuest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a KickGuest message.
             * @function verify
             * @memberof wslobby.Command.KickGuest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            KickGuest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.guestId != null && message.hasOwnProperty("guestId"))
                    if (!$util.isString(message.guestId))
                        return "guestId: string expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };

            /**
             * Creates a KickGuest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof wslobby.Command.KickGuest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {wslobby.Command.KickGuest} KickGuest
             */
            KickGuest.fromObject = function fromObject(object) {
                if (object instanceof $root.wslobby.Command.KickGuest)
                    return object;
                var message = new $root.wslobby.Command.KickGuest();
                if (object.guestId != null)
                    message.guestId = String(object.guestId);
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };

            /**
             * Creates a plain object from a KickGuest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof wslobby.Command.KickGuest
             * @static
             * @param {wslobby.Command.KickGuest} message KickGuest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            KickGuest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.guestId = "";
                    object.message = "";
                }
                if (message.guestId != null && message.hasOwnProperty("guestId"))
                    object.guestId = message.guestId;
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };

            /**
             * Converts this KickGuest to JSON.
             * @function toJSON
             * @memberof wslobby.Command.KickGuest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            KickGuest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return KickGuest;
        })();

        Command.AllowGuest = (function() {

            /**
             * Properties of an AllowGuest.
             * @memberof wslobby.Command
             * @interface IAllowGuest
             * @property {string|null} [guestId] AllowGuest guestId
             */

            /**
             * Constructs a new AllowGuest.
             * @memberof wslobby.Command
             * @classdesc Represents an AllowGuest.
             * @implements IAllowGuest
             * @constructor
             * @param {wslobby.Command.IAllowGuest=} [properties] Properties to set
             */
            function AllowGuest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AllowGuest guestId.
             * @member {string} guestId
             * @memberof wslobby.Command.AllowGuest
             * @instance
             */
            AllowGuest.prototype.guestId = "";

            /**
             * Creates a new AllowGuest instance using the specified properties.
             * @function create
             * @memberof wslobby.Command.AllowGuest
             * @static
             * @param {wslobby.Command.IAllowGuest=} [properties] Properties to set
             * @returns {wslobby.Command.AllowGuest} AllowGuest instance
             */
            AllowGuest.create = function create(properties) {
                return new AllowGuest(properties);
            };

            /**
             * Encodes the specified AllowGuest message. Does not implicitly {@link wslobby.Command.AllowGuest.verify|verify} messages.
             * @function encode
             * @memberof wslobby.Command.AllowGuest
             * @static
             * @param {wslobby.Command.IAllowGuest} message AllowGuest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AllowGuest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.guestId != null && Object.hasOwnProperty.call(message, "guestId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.guestId);
                return writer;
            };

            /**
             * Encodes the specified AllowGuest message, length delimited. Does not implicitly {@link wslobby.Command.AllowGuest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof wslobby.Command.AllowGuest
             * @static
             * @param {wslobby.Command.IAllowGuest} message AllowGuest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AllowGuest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an AllowGuest message from the specified reader or buffer.
             * @function decode
             * @memberof wslobby.Command.AllowGuest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {wslobby.Command.AllowGuest} AllowGuest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AllowGuest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wslobby.Command.AllowGuest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.guestId = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an AllowGuest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof wslobby.Command.AllowGuest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {wslobby.Command.AllowGuest} AllowGuest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AllowGuest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AllowGuest message.
             * @function verify
             * @memberof wslobby.Command.AllowGuest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AllowGuest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.guestId != null && message.hasOwnProperty("guestId"))
                    if (!$util.isString(message.guestId))
                        return "guestId: string expected";
                return null;
            };

            /**
             * Creates an AllowGuest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof wslobby.Command.AllowGuest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {wslobby.Command.AllowGuest} AllowGuest
             */
            AllowGuest.fromObject = function fromObject(object) {
                if (object instanceof $root.wslobby.Command.AllowGuest)
                    return object;
                var message = new $root.wslobby.Command.AllowGuest();
                if (object.guestId != null)
                    message.guestId = String(object.guestId);
                return message;
            };

            /**
             * Creates a plain object from an AllowGuest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof wslobby.Command.AllowGuest
             * @static
             * @param {wslobby.Command.AllowGuest} message AllowGuest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AllowGuest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.guestId = "";
                if (message.guestId != null && message.hasOwnProperty("guestId"))
                    object.guestId = message.guestId;
                return object;
            };

            /**
             * Converts this AllowGuest to JSON.
             * @function toJSON
             * @memberof wslobby.Command.AllowGuest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AllowGuest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return AllowGuest;
        })();

        Command.Broadcast = (function() {

            /**
             * Properties of a Broadcast.
             * @memberof wslobby.Command
             * @interface IBroadcast
             * @property {Uint8Array|null} [data] Broadcast data
             */

            /**
             * Constructs a new Broadcast.
             * @memberof wslobby.Command
             * @classdesc Represents a Broadcast.
             * @implements IBroadcast
             * @constructor
             * @param {wslobby.Command.IBroadcast=} [properties] Properties to set
             */
            function Broadcast(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Broadcast data.
             * @member {Uint8Array} data
             * @memberof wslobby.Command.Broadcast
             * @instance
             */
            Broadcast.prototype.data = $util.newBuffer([]);

            /**
             * Creates a new Broadcast instance using the specified properties.
             * @function create
             * @memberof wslobby.Command.Broadcast
             * @static
             * @param {wslobby.Command.IBroadcast=} [properties] Properties to set
             * @returns {wslobby.Command.Broadcast} Broadcast instance
             */
            Broadcast.create = function create(properties) {
                return new Broadcast(properties);
            };

            /**
             * Encodes the specified Broadcast message. Does not implicitly {@link wslobby.Command.Broadcast.verify|verify} messages.
             * @function encode
             * @memberof wslobby.Command.Broadcast
             * @static
             * @param {wslobby.Command.IBroadcast} message Broadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Broadcast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.data);
                return writer;
            };

            /**
             * Encodes the specified Broadcast message, length delimited. Does not implicitly {@link wslobby.Command.Broadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof wslobby.Command.Broadcast
             * @static
             * @param {wslobby.Command.IBroadcast} message Broadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Broadcast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Broadcast message from the specified reader or buffer.
             * @function decode
             * @memberof wslobby.Command.Broadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {wslobby.Command.Broadcast} Broadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Broadcast.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wslobby.Command.Broadcast();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.data = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Broadcast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof wslobby.Command.Broadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {wslobby.Command.Broadcast} Broadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Broadcast.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Broadcast message.
             * @function verify
             * @memberof wslobby.Command.Broadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Broadcast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.data != null && message.hasOwnProperty("data"))
                    if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                        return "data: buffer expected";
                return null;
            };

            /**
             * Creates a Broadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof wslobby.Command.Broadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {wslobby.Command.Broadcast} Broadcast
             */
            Broadcast.fromObject = function fromObject(object) {
                if (object instanceof $root.wslobby.Command.Broadcast)
                    return object;
                var message = new $root.wslobby.Command.Broadcast();
                if (object.data != null)
                    if (typeof object.data === "string")
                        $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                    else if (object.data.length)
                        message.data = object.data;
                return message;
            };

            /**
             * Creates a plain object from a Broadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof wslobby.Command.Broadcast
             * @static
             * @param {wslobby.Command.Broadcast} message Broadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Broadcast.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    if (options.bytes === String)
                        object.data = "";
                    else {
                        object.data = [];
                        if (options.bytes !== Array)
                            object.data = $util.newBuffer(object.data);
                    }
                if (message.data != null && message.hasOwnProperty("data"))
                    object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
                return object;
            };

            /**
             * Converts this Broadcast to JSON.
             * @function toJSON
             * @memberof wslobby.Command.Broadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Broadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Broadcast;
        })();

        Command.Unicast = (function() {

            /**
             * Properties of an Unicast.
             * @memberof wslobby.Command
             * @interface IUnicast
             * @property {string|null} [guestId] Unicast guestId
             * @property {Uint8Array|null} [data] Unicast data
             */

            /**
             * Constructs a new Unicast.
             * @memberof wslobby.Command
             * @classdesc Represents an Unicast.
             * @implements IUnicast
             * @constructor
             * @param {wslobby.Command.IUnicast=} [properties] Properties to set
             */
            function Unicast(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Unicast guestId.
             * @member {string} guestId
             * @memberof wslobby.Command.Unicast
             * @instance
             */
            Unicast.prototype.guestId = "";

            /**
             * Unicast data.
             * @member {Uint8Array} data
             * @memberof wslobby.Command.Unicast
             * @instance
             */
            Unicast.prototype.data = $util.newBuffer([]);

            /**
             * Creates a new Unicast instance using the specified properties.
             * @function create
             * @memberof wslobby.Command.Unicast
             * @static
             * @param {wslobby.Command.IUnicast=} [properties] Properties to set
             * @returns {wslobby.Command.Unicast} Unicast instance
             */
            Unicast.create = function create(properties) {
                return new Unicast(properties);
            };

            /**
             * Encodes the specified Unicast message. Does not implicitly {@link wslobby.Command.Unicast.verify|verify} messages.
             * @function encode
             * @memberof wslobby.Command.Unicast
             * @static
             * @param {wslobby.Command.IUnicast} message Unicast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Unicast.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.guestId != null && Object.hasOwnProperty.call(message, "guestId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.guestId);
                if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
                return writer;
            };

            /**
             * Encodes the specified Unicast message, length delimited. Does not implicitly {@link wslobby.Command.Unicast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof wslobby.Command.Unicast
             * @static
             * @param {wslobby.Command.IUnicast} message Unicast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Unicast.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Unicast message from the specified reader or buffer.
             * @function decode
             * @memberof wslobby.Command.Unicast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {wslobby.Command.Unicast} Unicast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Unicast.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wslobby.Command.Unicast();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.guestId = reader.string();
                        break;
                    case 2:
                        message.data = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Unicast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof wslobby.Command.Unicast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {wslobby.Command.Unicast} Unicast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Unicast.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Unicast message.
             * @function verify
             * @memberof wslobby.Command.Unicast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Unicast.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.guestId != null && message.hasOwnProperty("guestId"))
                    if (!$util.isString(message.guestId))
                        return "guestId: string expected";
                if (message.data != null && message.hasOwnProperty("data"))
                    if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                        return "data: buffer expected";
                return null;
            };

            /**
             * Creates an Unicast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof wslobby.Command.Unicast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {wslobby.Command.Unicast} Unicast
             */
            Unicast.fromObject = function fromObject(object) {
                if (object instanceof $root.wslobby.Command.Unicast)
                    return object;
                var message = new $root.wslobby.Command.Unicast();
                if (object.guestId != null)
                    message.guestId = String(object.guestId);
                if (object.data != null)
                    if (typeof object.data === "string")
                        $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                    else if (object.data.length)
                        message.data = object.data;
                return message;
            };

            /**
             * Creates a plain object from an Unicast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof wslobby.Command.Unicast
             * @static
             * @param {wslobby.Command.Unicast} message Unicast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Unicast.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.guestId = "";
                    if (options.bytes === String)
                        object.data = "";
                    else {
                        object.data = [];
                        if (options.bytes !== Array)
                            object.data = $util.newBuffer(object.data);
                    }
                }
                if (message.guestId != null && message.hasOwnProperty("guestId"))
                    object.guestId = message.guestId;
                if (message.data != null && message.hasOwnProperty("data"))
                    object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
                return object;
            };

            /**
             * Converts this Unicast to JSON.
             * @function toJSON
             * @memberof wslobby.Command.Unicast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Unicast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Unicast;
        })();

        return Command;
    })();

    wslobby.Reply = (function() {

        /**
         * Properties of a Reply.
         * @memberof wslobby
         * @interface IReply
         * @property {number|null} [id] Reply id
         * @property {wslobby.Reply.IPong|null} [pong] Reply pong
         * @property {wslobby.Reply.IAck|null} [ack] Reply ack
         * @property {wslobby.Reply.IError|null} [error] Reply error
         * @property {wslobby.Reply.IGuestKnock|null} [guestKnock] Reply guestKnock
         * @property {wslobby.Reply.IGuestLeft|null} [guestLeft] Reply guestLeft
         * @property {wslobby.Reply.IEnteredRoom|null} [enteredRoom] Reply enteredRoom
         * @property {wslobby.Reply.IData|null} [data] Reply data
         */

        /**
         * Constructs a new Reply.
         * @memberof wslobby
         * @classdesc Represents a Reply.
         * @implements IReply
         * @constructor
         * @param {wslobby.IReply=} [properties] Properties to set
         */
        function Reply(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Reply id.
         * @member {number} id
         * @memberof wslobby.Reply
         * @instance
         */
        Reply.prototype.id = 0;

        /**
         * Reply pong.
         * @member {wslobby.Reply.IPong|null|undefined} pong
         * @memberof wslobby.Reply
         * @instance
         */
        Reply.prototype.pong = null;

        /**
         * Reply ack.
         * @member {wslobby.Reply.IAck|null|undefined} ack
         * @memberof wslobby.Reply
         * @instance
         */
        Reply.prototype.ack = null;

        /**
         * Reply error.
         * @member {wslobby.Reply.IError|null|undefined} error
         * @memberof wslobby.Reply
         * @instance
         */
        Reply.prototype.error = null;

        /**
         * Reply guestKnock.
         * @member {wslobby.Reply.IGuestKnock|null|undefined} guestKnock
         * @memberof wslobby.Reply
         * @instance
         */
        Reply.prototype.guestKnock = null;

        /**
         * Reply guestLeft.
         * @member {wslobby.Reply.IGuestLeft|null|undefined} guestLeft
         * @memberof wslobby.Reply
         * @instance
         */
        Reply.prototype.guestLeft = null;

        /**
         * Reply enteredRoom.
         * @member {wslobby.Reply.IEnteredRoom|null|undefined} enteredRoom
         * @memberof wslobby.Reply
         * @instance
         */
        Reply.prototype.enteredRoom = null;

        /**
         * Reply data.
         * @member {wslobby.Reply.IData|null|undefined} data
         * @memberof wslobby.Reply
         * @instance
         */
        Reply.prototype.data = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * Reply payload.
         * @member {"pong"|"ack"|"error"|"guestKnock"|"guestLeft"|"enteredRoom"|"data"|undefined} payload
         * @memberof wslobby.Reply
         * @instance
         */
        Object.defineProperty(Reply.prototype, "payload", {
            get: $util.oneOfGetter($oneOfFields = ["pong", "ack", "error", "guestKnock", "guestLeft", "enteredRoom", "data"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Reply instance using the specified properties.
         * @function create
         * @memberof wslobby.Reply
         * @static
         * @param {wslobby.IReply=} [properties] Properties to set
         * @returns {wslobby.Reply} Reply instance
         */
        Reply.create = function create(properties) {
            return new Reply(properties);
        };

        /**
         * Encodes the specified Reply message. Does not implicitly {@link wslobby.Reply.verify|verify} messages.
         * @function encode
         * @memberof wslobby.Reply
         * @static
         * @param {wslobby.IReply} message Reply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Reply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.pong != null && Object.hasOwnProperty.call(message, "pong"))
                $root.wslobby.Reply.Pong.encode(message.pong, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.ack != null && Object.hasOwnProperty.call(message, "ack"))
                $root.wslobby.Reply.Ack.encode(message.ack, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                $root.wslobby.Reply.Error.encode(message.error, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.guestKnock != null && Object.hasOwnProperty.call(message, "guestKnock"))
                $root.wslobby.Reply.GuestKnock.encode(message.guestKnock, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.guestLeft != null && Object.hasOwnProperty.call(message, "guestLeft"))
                $root.wslobby.Reply.GuestLeft.encode(message.guestLeft, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.enteredRoom != null && Object.hasOwnProperty.call(message, "enteredRoom"))
                $root.wslobby.Reply.EnteredRoom.encode(message.enteredRoom, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                $root.wslobby.Reply.Data.encode(message.data, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Reply message, length delimited. Does not implicitly {@link wslobby.Reply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wslobby.Reply
         * @static
         * @param {wslobby.IReply} message Reply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Reply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Reply message from the specified reader or buffer.
         * @function decode
         * @memberof wslobby.Reply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wslobby.Reply} Reply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Reply.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wslobby.Reply();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.pong = $root.wslobby.Reply.Pong.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.ack = $root.wslobby.Reply.Ack.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.error = $root.wslobby.Reply.Error.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.guestKnock = $root.wslobby.Reply.GuestKnock.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.guestLeft = $root.wslobby.Reply.GuestLeft.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.enteredRoom = $root.wslobby.Reply.EnteredRoom.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.data = $root.wslobby.Reply.Data.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Reply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wslobby.Reply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wslobby.Reply} Reply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Reply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Reply message.
         * @function verify
         * @memberof wslobby.Reply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Reply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.pong != null && message.hasOwnProperty("pong")) {
                properties.payload = 1;
                {
                    var error = $root.wslobby.Reply.Pong.verify(message.pong);
                    if (error)
                        return "pong." + error;
                }
            }
            if (message.ack != null && message.hasOwnProperty("ack")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    var error = $root.wslobby.Reply.Ack.verify(message.ack);
                    if (error)
                        return "ack." + error;
                }
            }
            if (message.error != null && message.hasOwnProperty("error")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    var error = $root.wslobby.Reply.Error.verify(message.error);
                    if (error)
                        return "error." + error;
                }
            }
            if (message.guestKnock != null && message.hasOwnProperty("guestKnock")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    var error = $root.wslobby.Reply.GuestKnock.verify(message.guestKnock);
                    if (error)
                        return "guestKnock." + error;
                }
            }
            if (message.guestLeft != null && message.hasOwnProperty("guestLeft")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    var error = $root.wslobby.Reply.GuestLeft.verify(message.guestLeft);
                    if (error)
                        return "guestLeft." + error;
                }
            }
            if (message.enteredRoom != null && message.hasOwnProperty("enteredRoom")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    var error = $root.wslobby.Reply.EnteredRoom.verify(message.enteredRoom);
                    if (error)
                        return "enteredRoom." + error;
                }
            }
            if (message.data != null && message.hasOwnProperty("data")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    var error = $root.wslobby.Reply.Data.verify(message.data);
                    if (error)
                        return "data." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Reply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wslobby.Reply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wslobby.Reply} Reply
         */
        Reply.fromObject = function fromObject(object) {
            if (object instanceof $root.wslobby.Reply)
                return object;
            var message = new $root.wslobby.Reply();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.pong != null) {
                if (typeof object.pong !== "object")
                    throw TypeError(".wslobby.Reply.pong: object expected");
                message.pong = $root.wslobby.Reply.Pong.fromObject(object.pong);
            }
            if (object.ack != null) {
                if (typeof object.ack !== "object")
                    throw TypeError(".wslobby.Reply.ack: object expected");
                message.ack = $root.wslobby.Reply.Ack.fromObject(object.ack);
            }
            if (object.error != null) {
                if (typeof object.error !== "object")
                    throw TypeError(".wslobby.Reply.error: object expected");
                message.error = $root.wslobby.Reply.Error.fromObject(object.error);
            }
            if (object.guestKnock != null) {
                if (typeof object.guestKnock !== "object")
                    throw TypeError(".wslobby.Reply.guestKnock: object expected");
                message.guestKnock = $root.wslobby.Reply.GuestKnock.fromObject(object.guestKnock);
            }
            if (object.guestLeft != null) {
                if (typeof object.guestLeft !== "object")
                    throw TypeError(".wslobby.Reply.guestLeft: object expected");
                message.guestLeft = $root.wslobby.Reply.GuestLeft.fromObject(object.guestLeft);
            }
            if (object.enteredRoom != null) {
                if (typeof object.enteredRoom !== "object")
                    throw TypeError(".wslobby.Reply.enteredRoom: object expected");
                message.enteredRoom = $root.wslobby.Reply.EnteredRoom.fromObject(object.enteredRoom);
            }
            if (object.data != null) {
                if (typeof object.data !== "object")
                    throw TypeError(".wslobby.Reply.data: object expected");
                message.data = $root.wslobby.Reply.Data.fromObject(object.data);
            }
            return message;
        };

        /**
         * Creates a plain object from a Reply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wslobby.Reply
         * @static
         * @param {wslobby.Reply} message Reply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Reply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.id = 0;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.pong != null && message.hasOwnProperty("pong")) {
                object.pong = $root.wslobby.Reply.Pong.toObject(message.pong, options);
                if (options.oneofs)
                    object.payload = "pong";
            }
            if (message.ack != null && message.hasOwnProperty("ack")) {
                object.ack = $root.wslobby.Reply.Ack.toObject(message.ack, options);
                if (options.oneofs)
                    object.payload = "ack";
            }
            if (message.error != null && message.hasOwnProperty("error")) {
                object.error = $root.wslobby.Reply.Error.toObject(message.error, options);
                if (options.oneofs)
                    object.payload = "error";
            }
            if (message.guestKnock != null && message.hasOwnProperty("guestKnock")) {
                object.guestKnock = $root.wslobby.Reply.GuestKnock.toObject(message.guestKnock, options);
                if (options.oneofs)
                    object.payload = "guestKnock";
            }
            if (message.guestLeft != null && message.hasOwnProperty("guestLeft")) {
                object.guestLeft = $root.wslobby.Reply.GuestLeft.toObject(message.guestLeft, options);
                if (options.oneofs)
                    object.payload = "guestLeft";
            }
            if (message.enteredRoom != null && message.hasOwnProperty("enteredRoom")) {
                object.enteredRoom = $root.wslobby.Reply.EnteredRoom.toObject(message.enteredRoom, options);
                if (options.oneofs)
                    object.payload = "enteredRoom";
            }
            if (message.data != null && message.hasOwnProperty("data")) {
                object.data = $root.wslobby.Reply.Data.toObject(message.data, options);
                if (options.oneofs)
                    object.payload = "data";
            }
            return object;
        };

        /**
         * Converts this Reply to JSON.
         * @function toJSON
         * @memberof wslobby.Reply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Reply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        Reply.Pong = (function() {

            /**
             * Properties of a Pong.
             * @memberof wslobby.Reply
             * @interface IPong
             */

            /**
             * Constructs a new Pong.
             * @memberof wslobby.Reply
             * @classdesc Represents a Pong.
             * @implements IPong
             * @constructor
             * @param {wslobby.Reply.IPong=} [properties] Properties to set
             */
            function Pong(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new Pong instance using the specified properties.
             * @function create
             * @memberof wslobby.Reply.Pong
             * @static
             * @param {wslobby.Reply.IPong=} [properties] Properties to set
             * @returns {wslobby.Reply.Pong} Pong instance
             */
            Pong.create = function create(properties) {
                return new Pong(properties);
            };

            /**
             * Encodes the specified Pong message. Does not implicitly {@link wslobby.Reply.Pong.verify|verify} messages.
             * @function encode
             * @memberof wslobby.Reply.Pong
             * @static
             * @param {wslobby.Reply.IPong} message Pong message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Pong.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified Pong message, length delimited. Does not implicitly {@link wslobby.Reply.Pong.verify|verify} messages.
             * @function encodeDelimited
             * @memberof wslobby.Reply.Pong
             * @static
             * @param {wslobby.Reply.IPong} message Pong message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Pong.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Pong message from the specified reader or buffer.
             * @function decode
             * @memberof wslobby.Reply.Pong
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {wslobby.Reply.Pong} Pong
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Pong.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wslobby.Reply.Pong();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Pong message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof wslobby.Reply.Pong
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {wslobby.Reply.Pong} Pong
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Pong.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Pong message.
             * @function verify
             * @memberof wslobby.Reply.Pong
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Pong.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a Pong message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof wslobby.Reply.Pong
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {wslobby.Reply.Pong} Pong
             */
            Pong.fromObject = function fromObject(object) {
                if (object instanceof $root.wslobby.Reply.Pong)
                    return object;
                return new $root.wslobby.Reply.Pong();
            };

            /**
             * Creates a plain object from a Pong message. Also converts values to other types if specified.
             * @function toObject
             * @memberof wslobby.Reply.Pong
             * @static
             * @param {wslobby.Reply.Pong} message Pong
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Pong.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this Pong to JSON.
             * @function toJSON
             * @memberof wslobby.Reply.Pong
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Pong.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Pong;
        })();

        Reply.Ack = (function() {

            /**
             * Properties of an Ack.
             * @memberof wslobby.Reply
             * @interface IAck
             */

            /**
             * Constructs a new Ack.
             * @memberof wslobby.Reply
             * @classdesc Represents an Ack.
             * @implements IAck
             * @constructor
             * @param {wslobby.Reply.IAck=} [properties] Properties to set
             */
            function Ack(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new Ack instance using the specified properties.
             * @function create
             * @memberof wslobby.Reply.Ack
             * @static
             * @param {wslobby.Reply.IAck=} [properties] Properties to set
             * @returns {wslobby.Reply.Ack} Ack instance
             */
            Ack.create = function create(properties) {
                return new Ack(properties);
            };

            /**
             * Encodes the specified Ack message. Does not implicitly {@link wslobby.Reply.Ack.verify|verify} messages.
             * @function encode
             * @memberof wslobby.Reply.Ack
             * @static
             * @param {wslobby.Reply.IAck} message Ack message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Ack.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified Ack message, length delimited. Does not implicitly {@link wslobby.Reply.Ack.verify|verify} messages.
             * @function encodeDelimited
             * @memberof wslobby.Reply.Ack
             * @static
             * @param {wslobby.Reply.IAck} message Ack message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Ack.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Ack message from the specified reader or buffer.
             * @function decode
             * @memberof wslobby.Reply.Ack
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {wslobby.Reply.Ack} Ack
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Ack.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wslobby.Reply.Ack();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Ack message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof wslobby.Reply.Ack
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {wslobby.Reply.Ack} Ack
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Ack.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Ack message.
             * @function verify
             * @memberof wslobby.Reply.Ack
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Ack.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates an Ack message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof wslobby.Reply.Ack
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {wslobby.Reply.Ack} Ack
             */
            Ack.fromObject = function fromObject(object) {
                if (object instanceof $root.wslobby.Reply.Ack)
                    return object;
                return new $root.wslobby.Reply.Ack();
            };

            /**
             * Creates a plain object from an Ack message. Also converts values to other types if specified.
             * @function toObject
             * @memberof wslobby.Reply.Ack
             * @static
             * @param {wslobby.Reply.Ack} message Ack
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Ack.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this Ack to JSON.
             * @function toJSON
             * @memberof wslobby.Reply.Ack
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Ack.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Ack;
        })();

        Reply.Error = (function() {

            /**
             * Properties of an Error.
             * @memberof wslobby.Reply
             * @interface IError
             * @property {string|null} [message] Error message
             */

            /**
             * Constructs a new Error.
             * @memberof wslobby.Reply
             * @classdesc Represents an Error.
             * @implements IError
             * @constructor
             * @param {wslobby.Reply.IError=} [properties] Properties to set
             */
            function Error(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Error message.
             * @member {string} message
             * @memberof wslobby.Reply.Error
             * @instance
             */
            Error.prototype.message = "";

            /**
             * Creates a new Error instance using the specified properties.
             * @function create
             * @memberof wslobby.Reply.Error
             * @static
             * @param {wslobby.Reply.IError=} [properties] Properties to set
             * @returns {wslobby.Reply.Error} Error instance
             */
            Error.create = function create(properties) {
                return new Error(properties);
            };

            /**
             * Encodes the specified Error message. Does not implicitly {@link wslobby.Reply.Error.verify|verify} messages.
             * @function encode
             * @memberof wslobby.Reply.Error
             * @static
             * @param {wslobby.Reply.IError} message Error message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Error.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
                return writer;
            };

            /**
             * Encodes the specified Error message, length delimited. Does not implicitly {@link wslobby.Reply.Error.verify|verify} messages.
             * @function encodeDelimited
             * @memberof wslobby.Reply.Error
             * @static
             * @param {wslobby.Reply.IError} message Error message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Error.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Error message from the specified reader or buffer.
             * @function decode
             * @memberof wslobby.Reply.Error
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {wslobby.Reply.Error} Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Error.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wslobby.Reply.Error();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.message = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Error message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof wslobby.Reply.Error
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {wslobby.Reply.Error} Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Error.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Error message.
             * @function verify
             * @memberof wslobby.Reply.Error
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Error.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };

            /**
             * Creates an Error message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof wslobby.Reply.Error
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {wslobby.Reply.Error} Error
             */
            Error.fromObject = function fromObject(object) {
                if (object instanceof $root.wslobby.Reply.Error)
                    return object;
                var message = new $root.wslobby.Reply.Error();
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };

            /**
             * Creates a plain object from an Error message. Also converts values to other types if specified.
             * @function toObject
             * @memberof wslobby.Reply.Error
             * @static
             * @param {wslobby.Reply.Error} message Error
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Error.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.message = "";
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };

            /**
             * Converts this Error to JSON.
             * @function toJSON
             * @memberof wslobby.Reply.Error
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Error.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Error;
        })();

        Reply.GuestKnock = (function() {

            /**
             * Properties of a GuestKnock.
             * @memberof wslobby.Reply
             * @interface IGuestKnock
             * @property {string|null} [guestId] GuestKnock guestId
             * @property {string|null} [greeting] GuestKnock greeting
             */

            /**
             * Constructs a new GuestKnock.
             * @memberof wslobby.Reply
             * @classdesc Represents a GuestKnock.
             * @implements IGuestKnock
             * @constructor
             * @param {wslobby.Reply.IGuestKnock=} [properties] Properties to set
             */
            function GuestKnock(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GuestKnock guestId.
             * @member {string} guestId
             * @memberof wslobby.Reply.GuestKnock
             * @instance
             */
            GuestKnock.prototype.guestId = "";

            /**
             * GuestKnock greeting.
             * @member {string} greeting
             * @memberof wslobby.Reply.GuestKnock
             * @instance
             */
            GuestKnock.prototype.greeting = "";

            /**
             * Creates a new GuestKnock instance using the specified properties.
             * @function create
             * @memberof wslobby.Reply.GuestKnock
             * @static
             * @param {wslobby.Reply.IGuestKnock=} [properties] Properties to set
             * @returns {wslobby.Reply.GuestKnock} GuestKnock instance
             */
            GuestKnock.create = function create(properties) {
                return new GuestKnock(properties);
            };

            /**
             * Encodes the specified GuestKnock message. Does not implicitly {@link wslobby.Reply.GuestKnock.verify|verify} messages.
             * @function encode
             * @memberof wslobby.Reply.GuestKnock
             * @static
             * @param {wslobby.Reply.IGuestKnock} message GuestKnock message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GuestKnock.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.guestId != null && Object.hasOwnProperty.call(message, "guestId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.guestId);
                if (message.greeting != null && Object.hasOwnProperty.call(message, "greeting"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.greeting);
                return writer;
            };

            /**
             * Encodes the specified GuestKnock message, length delimited. Does not implicitly {@link wslobby.Reply.GuestKnock.verify|verify} messages.
             * @function encodeDelimited
             * @memberof wslobby.Reply.GuestKnock
             * @static
             * @param {wslobby.Reply.IGuestKnock} message GuestKnock message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GuestKnock.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GuestKnock message from the specified reader or buffer.
             * @function decode
             * @memberof wslobby.Reply.GuestKnock
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {wslobby.Reply.GuestKnock} GuestKnock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GuestKnock.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wslobby.Reply.GuestKnock();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.guestId = reader.string();
                        break;
                    case 2:
                        message.greeting = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GuestKnock message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof wslobby.Reply.GuestKnock
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {wslobby.Reply.GuestKnock} GuestKnock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GuestKnock.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GuestKnock message.
             * @function verify
             * @memberof wslobby.Reply.GuestKnock
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GuestKnock.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.guestId != null && message.hasOwnProperty("guestId"))
                    if (!$util.isString(message.guestId))
                        return "guestId: string expected";
                if (message.greeting != null && message.hasOwnProperty("greeting"))
                    if (!$util.isString(message.greeting))
                        return "greeting: string expected";
                return null;
            };

            /**
             * Creates a GuestKnock message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof wslobby.Reply.GuestKnock
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {wslobby.Reply.GuestKnock} GuestKnock
             */
            GuestKnock.fromObject = function fromObject(object) {
                if (object instanceof $root.wslobby.Reply.GuestKnock)
                    return object;
                var message = new $root.wslobby.Reply.GuestKnock();
                if (object.guestId != null)
                    message.guestId = String(object.guestId);
                if (object.greeting != null)
                    message.greeting = String(object.greeting);
                return message;
            };

            /**
             * Creates a plain object from a GuestKnock message. Also converts values to other types if specified.
             * @function toObject
             * @memberof wslobby.Reply.GuestKnock
             * @static
             * @param {wslobby.Reply.GuestKnock} message GuestKnock
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GuestKnock.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.guestId = "";
                    object.greeting = "";
                }
                if (message.guestId != null && message.hasOwnProperty("guestId"))
                    object.guestId = message.guestId;
                if (message.greeting != null && message.hasOwnProperty("greeting"))
                    object.greeting = message.greeting;
                return object;
            };

            /**
             * Converts this GuestKnock to JSON.
             * @function toJSON
             * @memberof wslobby.Reply.GuestKnock
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GuestKnock.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return GuestKnock;
        })();

        Reply.GuestLeft = (function() {

            /**
             * Properties of a GuestLeft.
             * @memberof wslobby.Reply
             * @interface IGuestLeft
             * @property {string|null} [guestId] GuestLeft guestId
             * @property {string|null} [goodbye] GuestLeft goodbye
             */

            /**
             * Constructs a new GuestLeft.
             * @memberof wslobby.Reply
             * @classdesc Represents a GuestLeft.
             * @implements IGuestLeft
             * @constructor
             * @param {wslobby.Reply.IGuestLeft=} [properties] Properties to set
             */
            function GuestLeft(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GuestLeft guestId.
             * @member {string} guestId
             * @memberof wslobby.Reply.GuestLeft
             * @instance
             */
            GuestLeft.prototype.guestId = "";

            /**
             * GuestLeft goodbye.
             * @member {string|null|undefined} goodbye
             * @memberof wslobby.Reply.GuestLeft
             * @instance
             */
            GuestLeft.prototype.goodbye = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            /**
             * GuestLeft _goodbye.
             * @member {"goodbye"|undefined} _goodbye
             * @memberof wslobby.Reply.GuestLeft
             * @instance
             */
            Object.defineProperty(GuestLeft.prototype, "_goodbye", {
                get: $util.oneOfGetter($oneOfFields = ["goodbye"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new GuestLeft instance using the specified properties.
             * @function create
             * @memberof wslobby.Reply.GuestLeft
             * @static
             * @param {wslobby.Reply.IGuestLeft=} [properties] Properties to set
             * @returns {wslobby.Reply.GuestLeft} GuestLeft instance
             */
            GuestLeft.create = function create(properties) {
                return new GuestLeft(properties);
            };

            /**
             * Encodes the specified GuestLeft message. Does not implicitly {@link wslobby.Reply.GuestLeft.verify|verify} messages.
             * @function encode
             * @memberof wslobby.Reply.GuestLeft
             * @static
             * @param {wslobby.Reply.IGuestLeft} message GuestLeft message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GuestLeft.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.guestId != null && Object.hasOwnProperty.call(message, "guestId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.guestId);
                if (message.goodbye != null && Object.hasOwnProperty.call(message, "goodbye"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.goodbye);
                return writer;
            };

            /**
             * Encodes the specified GuestLeft message, length delimited. Does not implicitly {@link wslobby.Reply.GuestLeft.verify|verify} messages.
             * @function encodeDelimited
             * @memberof wslobby.Reply.GuestLeft
             * @static
             * @param {wslobby.Reply.IGuestLeft} message GuestLeft message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GuestLeft.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GuestLeft message from the specified reader or buffer.
             * @function decode
             * @memberof wslobby.Reply.GuestLeft
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {wslobby.Reply.GuestLeft} GuestLeft
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GuestLeft.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wslobby.Reply.GuestLeft();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.guestId = reader.string();
                        break;
                    case 2:
                        message.goodbye = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GuestLeft message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof wslobby.Reply.GuestLeft
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {wslobby.Reply.GuestLeft} GuestLeft
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GuestLeft.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GuestLeft message.
             * @function verify
             * @memberof wslobby.Reply.GuestLeft
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GuestLeft.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.guestId != null && message.hasOwnProperty("guestId"))
                    if (!$util.isString(message.guestId))
                        return "guestId: string expected";
                if (message.goodbye != null && message.hasOwnProperty("goodbye")) {
                    properties._goodbye = 1;
                    if (!$util.isString(message.goodbye))
                        return "goodbye: string expected";
                }
                return null;
            };

            /**
             * Creates a GuestLeft message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof wslobby.Reply.GuestLeft
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {wslobby.Reply.GuestLeft} GuestLeft
             */
            GuestLeft.fromObject = function fromObject(object) {
                if (object instanceof $root.wslobby.Reply.GuestLeft)
                    return object;
                var message = new $root.wslobby.Reply.GuestLeft();
                if (object.guestId != null)
                    message.guestId = String(object.guestId);
                if (object.goodbye != null)
                    message.goodbye = String(object.goodbye);
                return message;
            };

            /**
             * Creates a plain object from a GuestLeft message. Also converts values to other types if specified.
             * @function toObject
             * @memberof wslobby.Reply.GuestLeft
             * @static
             * @param {wslobby.Reply.GuestLeft} message GuestLeft
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GuestLeft.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.guestId = "";
                if (message.guestId != null && message.hasOwnProperty("guestId"))
                    object.guestId = message.guestId;
                if (message.goodbye != null && message.hasOwnProperty("goodbye")) {
                    object.goodbye = message.goodbye;
                    if (options.oneofs)
                        object._goodbye = "goodbye";
                }
                return object;
            };

            /**
             * Converts this GuestLeft to JSON.
             * @function toJSON
             * @memberof wslobby.Reply.GuestLeft
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GuestLeft.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return GuestLeft;
        })();

        Reply.EnteredRoom = (function() {

            /**
             * Properties of an EnteredRoom.
             * @memberof wslobby.Reply
             * @interface IEnteredRoom
             * @property {string|null} [roomId] EnteredRoom roomId
             * @property {string|null} [hostId] EnteredRoom hostId
             */

            /**
             * Constructs a new EnteredRoom.
             * @memberof wslobby.Reply
             * @classdesc Represents an EnteredRoom.
             * @implements IEnteredRoom
             * @constructor
             * @param {wslobby.Reply.IEnteredRoom=} [properties] Properties to set
             */
            function EnteredRoom(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnteredRoom roomId.
             * @member {string} roomId
             * @memberof wslobby.Reply.EnteredRoom
             * @instance
             */
            EnteredRoom.prototype.roomId = "";

            /**
             * EnteredRoom hostId.
             * @member {string} hostId
             * @memberof wslobby.Reply.EnteredRoom
             * @instance
             */
            EnteredRoom.prototype.hostId = "";

            /**
             * Creates a new EnteredRoom instance using the specified properties.
             * @function create
             * @memberof wslobby.Reply.EnteredRoom
             * @static
             * @param {wslobby.Reply.IEnteredRoom=} [properties] Properties to set
             * @returns {wslobby.Reply.EnteredRoom} EnteredRoom instance
             */
            EnteredRoom.create = function create(properties) {
                return new EnteredRoom(properties);
            };

            /**
             * Encodes the specified EnteredRoom message. Does not implicitly {@link wslobby.Reply.EnteredRoom.verify|verify} messages.
             * @function encode
             * @memberof wslobby.Reply.EnteredRoom
             * @static
             * @param {wslobby.Reply.IEnteredRoom} message EnteredRoom message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnteredRoom.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.roomId);
                if (message.hostId != null && Object.hasOwnProperty.call(message, "hostId"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.hostId);
                return writer;
            };

            /**
             * Encodes the specified EnteredRoom message, length delimited. Does not implicitly {@link wslobby.Reply.EnteredRoom.verify|verify} messages.
             * @function encodeDelimited
             * @memberof wslobby.Reply.EnteredRoom
             * @static
             * @param {wslobby.Reply.IEnteredRoom} message EnteredRoom message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnteredRoom.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EnteredRoom message from the specified reader or buffer.
             * @function decode
             * @memberof wslobby.Reply.EnteredRoom
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {wslobby.Reply.EnteredRoom} EnteredRoom
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnteredRoom.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wslobby.Reply.EnteredRoom();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.roomId = reader.string();
                        break;
                    case 2:
                        message.hostId = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EnteredRoom message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof wslobby.Reply.EnteredRoom
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {wslobby.Reply.EnteredRoom} EnteredRoom
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnteredRoom.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EnteredRoom message.
             * @function verify
             * @memberof wslobby.Reply.EnteredRoom
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EnteredRoom.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.roomId != null && message.hasOwnProperty("roomId"))
                    if (!$util.isString(message.roomId))
                        return "roomId: string expected";
                if (message.hostId != null && message.hasOwnProperty("hostId"))
                    if (!$util.isString(message.hostId))
                        return "hostId: string expected";
                return null;
            };

            /**
             * Creates an EnteredRoom message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof wslobby.Reply.EnteredRoom
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {wslobby.Reply.EnteredRoom} EnteredRoom
             */
            EnteredRoom.fromObject = function fromObject(object) {
                if (object instanceof $root.wslobby.Reply.EnteredRoom)
                    return object;
                var message = new $root.wslobby.Reply.EnteredRoom();
                if (object.roomId != null)
                    message.roomId = String(object.roomId);
                if (object.hostId != null)
                    message.hostId = String(object.hostId);
                return message;
            };

            /**
             * Creates a plain object from an EnteredRoom message. Also converts values to other types if specified.
             * @function toObject
             * @memberof wslobby.Reply.EnteredRoom
             * @static
             * @param {wslobby.Reply.EnteredRoom} message EnteredRoom
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnteredRoom.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.roomId = "";
                    object.hostId = "";
                }
                if (message.roomId != null && message.hasOwnProperty("roomId"))
                    object.roomId = message.roomId;
                if (message.hostId != null && message.hasOwnProperty("hostId"))
                    object.hostId = message.hostId;
                return object;
            };

            /**
             * Converts this EnteredRoom to JSON.
             * @function toJSON
             * @memberof wslobby.Reply.EnteredRoom
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EnteredRoom.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return EnteredRoom;
        })();

        Reply.Data = (function() {

            /**
             * Properties of a Data.
             * @memberof wslobby.Reply
             * @interface IData
             * @property {string|null} [senderId] Data senderId
             * @property {Uint8Array|null} [data] Data data
             */

            /**
             * Constructs a new Data.
             * @memberof wslobby.Reply
             * @classdesc Represents a Data.
             * @implements IData
             * @constructor
             * @param {wslobby.Reply.IData=} [properties] Properties to set
             */
            function Data(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Data senderId.
             * @member {string} senderId
             * @memberof wslobby.Reply.Data
             * @instance
             */
            Data.prototype.senderId = "";

            /**
             * Data data.
             * @member {Uint8Array} data
             * @memberof wslobby.Reply.Data
             * @instance
             */
            Data.prototype.data = $util.newBuffer([]);

            /**
             * Creates a new Data instance using the specified properties.
             * @function create
             * @memberof wslobby.Reply.Data
             * @static
             * @param {wslobby.Reply.IData=} [properties] Properties to set
             * @returns {wslobby.Reply.Data} Data instance
             */
            Data.create = function create(properties) {
                return new Data(properties);
            };

            /**
             * Encodes the specified Data message. Does not implicitly {@link wslobby.Reply.Data.verify|verify} messages.
             * @function encode
             * @memberof wslobby.Reply.Data
             * @static
             * @param {wslobby.Reply.IData} message Data message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Data.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.senderId != null && Object.hasOwnProperty.call(message, "senderId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.senderId);
                if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
                return writer;
            };

            /**
             * Encodes the specified Data message, length delimited. Does not implicitly {@link wslobby.Reply.Data.verify|verify} messages.
             * @function encodeDelimited
             * @memberof wslobby.Reply.Data
             * @static
             * @param {wslobby.Reply.IData} message Data message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Data.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Data message from the specified reader or buffer.
             * @function decode
             * @memberof wslobby.Reply.Data
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {wslobby.Reply.Data} Data
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Data.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wslobby.Reply.Data();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.senderId = reader.string();
                        break;
                    case 2:
                        message.data = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Data message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof wslobby.Reply.Data
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {wslobby.Reply.Data} Data
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Data.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Data message.
             * @function verify
             * @memberof wslobby.Reply.Data
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Data.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.senderId != null && message.hasOwnProperty("senderId"))
                    if (!$util.isString(message.senderId))
                        return "senderId: string expected";
                if (message.data != null && message.hasOwnProperty("data"))
                    if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                        return "data: buffer expected";
                return null;
            };

            /**
             * Creates a Data message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof wslobby.Reply.Data
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {wslobby.Reply.Data} Data
             */
            Data.fromObject = function fromObject(object) {
                if (object instanceof $root.wslobby.Reply.Data)
                    return object;
                var message = new $root.wslobby.Reply.Data();
                if (object.senderId != null)
                    message.senderId = String(object.senderId);
                if (object.data != null)
                    if (typeof object.data === "string")
                        $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                    else if (object.data.length)
                        message.data = object.data;
                return message;
            };

            /**
             * Creates a plain object from a Data message. Also converts values to other types if specified.
             * @function toObject
             * @memberof wslobby.Reply.Data
             * @static
             * @param {wslobby.Reply.Data} message Data
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Data.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.senderId = "";
                    if (options.bytes === String)
                        object.data = "";
                    else {
                        object.data = [];
                        if (options.bytes !== Array)
                            object.data = $util.newBuffer(object.data);
                    }
                }
                if (message.senderId != null && message.hasOwnProperty("senderId"))
                    object.senderId = message.senderId;
                if (message.data != null && message.hasOwnProperty("data"))
                    object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
                return object;
            };

            /**
             * Converts this Data to JSON.
             * @function toJSON
             * @memberof wslobby.Reply.Data
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Data.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Data;
        })();

        return Reply;
    })();

    return wslobby;
})();

module.exports = $root;
