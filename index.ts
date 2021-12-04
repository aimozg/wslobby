/*
 * Created by aimozg on 29.11.2021.
 * Confidential.
 */


import {LobbyClient} from "./src/client";
import {LobbyServer} from "./src/server";
import {defaultAuthEngine} from "./src/default-auth";
import * as fs from "fs";
import * as fse from "fs-extra";
import * as http from "http";
import {IncomingMessage} from "http";
import * as https from "https";
import * as yauzl from "yauzl";
import express = require("express");
import enableWs = require("express-ws");
import path = require("path");

export {LobbyClient,LobbyServer}

let host = process.env.WSLOBBY_HOST || "0.0.0.0";
let port = parseInt(process.env.WSLOBBY_PORT || process.env.PORT || "8081");
let lobbyPath = process.env.WSLOBBY_PATH || "/lobby";
let autostart = process.env.WSLOBBY_STANDALONE == "true";
let bundleURL = process.env.WSLOBBY_BUNDLE_URL;

if (autostart) {
	console.log("Starting");

	const app = express();
	const wsapp = enableWs(app);

	const server = new LobbyServer({
		path: lobbyPath,
		express: wsapp,
		auth: defaultAuthEngine
	});

	app.use(express.static("static"));

	app.listen(port,()=>{
		console.log("Listening on ws://"+host+":"+port+lobbyPath)
	});

	async function rmDir(path) {
		await fs.promises.readdir(path).then(async files=>{
			for (let file of files) {

			}
		})
	}
	async function downloadBundle() {
		console.log("Fetching bundle ",bundleURL)

		const zipPath = "temp/bundle.zip";
		const bundleDir = "static/";

		// Cleanup
		if(await fse.pathExists(zipPath)) {
			await fse.promises.unlink(zipPath)
		}
		if(await fse.pathExists(bundleDir)) {
			await fse.emptyDir(bundleDir);
		} else {
			await fse.mkdirp(bundleDir);
		}

		function unzip() {
			yauzl.open(zipPath, {lazyEntries: true}, (err, zipfile) => {
				if (err) {
					fs.unlink(zipPath,()=>{})
					throw err
				}
				zipfile.on("close",()=>{
					console.log("Bundle downloaded and extracted!")
					fs.unlink(zipPath,()=>{});
				})
				zipfile.readEntry()
				zipfile.on("entry",async (entry)=>{
					if (/\.\./.test(entry.fileName)) {
						console.log("Path contains .. - forbidden!")
						zipfile.close()
					}
					let targetFileName = path.join(bundleDir, entry.fileName);
					if (/\/$/.test(entry.fileName)) {
						await fse.mkdirp(targetFileName)
						zipfile.readEntry()
					} else {
						console.log("...",targetFileName)
						await fse.mkdirp(path.dirname(targetFileName))
						zipfile.openReadStream(entry,(err,readStream)=>{
							if (err) throw err;
							let writeStream = fs.createWriteStream(targetFileName)
							writeStream.on("close",()=>{
								zipfile.readEntry()
							});
							readStream.pipe(writeStream);
						})
					}
				})
			});
		}

		function saveRequest(res:IncomingMessage) {
			console.log("Bundle request "+res.statusCode+" "+res.statusMessage);
			const bundleOut = fs.createWriteStream(zipPath);
			res.pipe(bundleOut);
			bundleOut.on("finish",()=>{
				bundleOut.close(()=>{
					console.log("Bundle downloaded, unzipping")
					unzip();
				})
			})
		}
		function requestError(e:Error) {
			console.error("Error loading bundle:",e.message);
			fs.unlink(zipPath,()=>{});
		}

		if (/^http:/.test(bundleURL)) {
			http.get(bundleURL, saveRequest).on("error", requestError);
		} else if (/^https:/.test(bundleURL)) {
			https.get(bundleURL, saveRequest).on("error", requestError);
		} else {
			console.error("Bad bundle url",bundleURL)
			throw new Error("Bad bundle url")
		}
	}

	if (bundleURL) {
		downloadBundle().then(()=>{});
	}
}
