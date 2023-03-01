// File contains preloading for node.js functions
const { contextBridge } = require("electron");
const { Timer } = require("./src/models/timer.model");

contextBridge.exposeInMainWorld("models", {
    createTimer: () => {
        return new Timer();
    }
});
