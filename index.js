"use strict";
/*
 * Created by aimozg on 29.11.2021.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LobbyServer = exports.LobbyClient = void 0;
const client_1 = require("./src/client");
Object.defineProperty(exports, "LobbyClient", { enumerable: true, get: function () { return client_1.LobbyClient; } });
const server_1 = require("./src/server");
Object.defineProperty(exports, "LobbyServer", { enumerable: true, get: function () { return server_1.LobbyServer; } });
const default_auth_1 = require("./src/default-auth");
const fs = require("fs");
const fse = require("fs-extra");
const http = require("http");
const https = require("https");
const yauzl = require("yauzl");
const express = require("express");
const enableWs = require("express-ws");
const path = require("path");
let host = process.env.WSLOBBY_HOST || "0.0.0.0";
let port = parseInt(process.env.WSLOBBY_PORT || process.env.PORT || "8081");
let lobbyPath = process.env.WSLOBBY_PATH || "/lobby";
let autostart = process.env.WSLOBBY_STANDALONE == "true";
let bundleURL = process.env.WSLOBBY_BUNDLE_URL;
if (autostart) {
    console.log("Starting");
    const app = express();
    const wsapp = enableWs(app);
    const server = new server_1.LobbyServer({
        path: lobbyPath,
        express: wsapp,
        auth: default_auth_1.defaultAuthEngine
    });
    app.use(express.static("static"));
    app.listen(port, () => {
        console.log("Listening on ws://" + host + ":" + port + lobbyPath);
    });
    async function rmDir(path) {
        await fs.promises.readdir(path).then(async (files) => {
            for (let file of files) {
            }
        });
    }
    async function downloadBundle() {
        console.log("Fetching bundle ", bundleURL);
        const zipPath = "temp/bundle.zip";
        const bundleDir = "static/";
        // Cleanup
        await fse.mkdirp(path.dirname(zipPath));
        if (await fse.pathExists(zipPath)) {
            await fse.promises.unlink(zipPath);
        }
        if (await fse.pathExists(bundleDir)) {
            await fse.emptyDir(bundleDir);
        }
        else {
            await fse.mkdirp(bundleDir);
        }
        function unzip() {
            yauzl.open(zipPath, { lazyEntries: true }, (err, zipfile) => {
                if (err) {
                    fs.unlink(zipPath, () => { });
                    throw err;
                }
                zipfile.on("close", () => {
                    console.log("Bundle downloaded and extracted!");
                    fs.unlink(zipPath, () => { });
                });
                zipfile.readEntry();
                zipfile.on("entry", async (entry) => {
                    if (/\.\./.test(entry.fileName)) {
                        console.log("Path contains .. - forbidden!");
                        zipfile.close();
                    }
                    let targetFileName = path.join(bundleDir, entry.fileName);
                    if (/\/$/.test(entry.fileName)) {
                        await fse.mkdirp(targetFileName);
                        zipfile.readEntry();
                    }
                    else {
                        console.log("...", targetFileName);
                        await fse.mkdirp(path.dirname(targetFileName));
                        zipfile.openReadStream(entry, (err, readStream) => {
                            if (err)
                                throw err;
                            let writeStream = fs.createWriteStream(targetFileName);
                            writeStream.on("close", () => {
                                zipfile.readEntry();
                            });
                            readStream.pipe(writeStream);
                        });
                    }
                });
            });
        }
        function saveRequest(res) {
            console.log("Bundle request " + res.statusCode + " " + res.statusMessage);
            const bundleOut = fs.createWriteStream(zipPath);
            res.pipe(bundleOut);
            bundleOut.on("finish", () => {
                bundleOut.close(() => {
                    console.log("Bundle downloaded, unzipping");
                    unzip();
                });
            });
        }
        function requestError(e) {
            console.error("Error loading bundle:", e.message);
            fs.unlink(zipPath, () => { });
        }
        if (/^http:/.test(bundleURL)) {
            http.get(bundleURL, saveRequest).on("error", requestError);
        }
        else if (/^https:/.test(bundleURL)) {
            https.get(bundleURL, saveRequest).on("error", requestError);
        }
        else {
            console.error("Bad bundle url", bundleURL);
            throw new Error("Bad bundle url");
        }
    }
    if (bundleURL) {
        downloadBundle().then(() => { });
    }
}
//# sourceMappingURL=index.js.map