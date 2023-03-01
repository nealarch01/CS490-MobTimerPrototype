const { app, BrowserWindow } = require('electron');
const path = require('path');

var isDev = true;

const createWindow = () => {
	const window = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			preload: path.join(__dirname, "preload.js"),
			nodeIntegration: true
		}
	});
	window.loadFile("./src/views/html/index.html");
}

app.whenReady().then(() => {
	createWindow();
	app.on("activate", () => { // 
		if (BrowserWindow.getAllWindows().length() === 0) {
			createWindow();
		}
	});
	if (isDev) {
		// Open the DevTools.
		BrowserWindow.getAllWindows()[0].webContents.openDevTools();
	}
});

