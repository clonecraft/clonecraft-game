"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const skydapp_browser_2 = require("skydapp-browser");
const superagent_1 = __importDefault(require("superagent"));
const CloneCraft_1 = __importDefault(require("./CloneCraft"));
(async () => {
    if (sessionStorage.__spa_path) {
        skydapp_browser_2.SkyRouter.go(sessionStorage.__spa_path);
        sessionStorage.removeItem("__spa_path");
    }
    skydapp_browser_1.msg.parseCSV((await superagent_1.default.get("/msg.csv")).text);
    CloneCraft_1.default.start();
})();
//# sourceMappingURL=main.js.map