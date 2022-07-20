"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const Config_1 = __importDefault(require("./Config"));
const World_1 = __importDefault(require("./gamenode/World"));
const FirstConnectingPopup_1 = __importDefault(require("./popup/FirstConnectingPopup"));
const ReconnectingPopup_1 = __importDefault(require("./popup/ReconnectingPopup"));
class CloneCraft {
    constructor() {
        this.codeStore = new skydapp_browser_1.Store("codeStore");
        this.screen = new skydapp_browser_1.Fullscreen();
        this.firstConnectingPopup = new FirstConnectingPopup_1.default().appendTo(this.screen.root);
    }
    start() {
        this.client = new skydapp_browser_1.WebSocketClient(`wss://${Config_1.default.backendHost}`);
        this.client.on("connect", () => {
            console.log("connected to server.");
            this.firstConnectingPopup?.delete();
            this.firstConnectingPopup = undefined;
            this.reconnectingPopup?.delete();
            this.world?.delete();
            this.world = new World_1.default().appendTo(this.screen.root);
            this.world.on("delete", () => this.world = undefined);
        });
        this.client.on("disconnect", () => {
            console.log("disconnected from server.");
            this.world?.delete();
            if (this.firstConnectingPopup === undefined) {
                this.reconnectingPopup?.delete();
                this.reconnectingPopup = new ReconnectingPopup_1.default().appendTo(this.screen.root);
                this.reconnectingPopup.on("delete", () => this.reconnectingPopup = undefined);
            }
            setTimeout(() => {
                this.client.reconnect();
            }, 1000);
        });
    }
    async checkDiscordLogin() {
        let code = this.codeStore.get("code");
        if (code === undefined) {
            code = new URLSearchParams(window.location.search).get("code");
            if (code !== null) {
                try {
                    await this.client.send("load-discord-token", code, `${window.location.protocol}//${window.location.host}`);
                    this.codeStore.set("code", code, true);
                }
                catch (error) {
                    console.error(error);
                    code = undefined;
                }
            }
            else {
                code = undefined;
            }
        }
        if (code !== undefined) {
            try {
                this.currentUserInfo = await this.client.send("discord-login", code);
                if (this.currentUserInfo === undefined) {
                    throw new Error("Current User Not Exists.");
                }
                return true;
            }
            catch (error) {
                console.error(error);
                this.codeStore.delete("code");
                return false;
            }
        }
        else {
            this.codeStore.delete("code");
            return false;
        }
    }
    async testCNDV3Mint() {
        if (this.currentUserInfo !== undefined) {
            return this.client.send("test-cnd-v3-mint", this.currentUserInfo.id);
        }
    }
}
exports.default = new CloneCraft();
//# sourceMappingURL=CloneCraft.js.map