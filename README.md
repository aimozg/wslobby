# WsLobby - WebSocket lobby server

A "thin" WebSocket server to allow applications to communicate through.

Clients connect and authorize as **hosts** or **guests** and communicate in **rooms**. 

Guests **join** a room and communicate only with host. 

Hosts **claim** a room, authorize guests who want to join (**knocking**), can communicate with any guests (broadcast/unicast messages), and kick them from a room.

Any client can be in one room at a time.

The WsLobby protocol is defined in Protobuf. See `src/wslobby.proto`.

## Running

```
npm run start
```

(bash)

```
npm run start_windows
```

(cmd)

Will run a **trivial sticky auth** lobby server that also **serves static files** from `static/` directory.

Environment variables:

* WSLOBBY_HOST (default 0.0.0.0)
* WSLOBBY_PORT (default env.PORT or 8081)
* WSLOBBY_PATH (default `/lobby`)
* WSLOBBY_STANDALONE (set to `true` if running library as a server)
* WSLOBBY_BUNDLE_URL - zip file to download and extract into `static/`

## Building

TODO

## Authentication

Client provides identity, token, and a role to authenticate in lobby. Room claims are authorized by lobby. Join requests are authorized by hosts.

Default implementation allows anyone to claim and join any room. However, it maintains in memory the identity-token and room-host mappings.

## Security considerations

For research/testing/proof-of-concept purposes. Do not use in production environment.

## Demo

Run a lobby. Open `demo/demo.html` in browser tabs. Authenticate as host and claim a room in one tab, then authenticate as guest and join same room in another.
