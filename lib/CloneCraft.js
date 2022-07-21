"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const Config_1 = __importDefault(require("./Config"));
const Battle_1 = __importDefault(require("./gamenode/Battle"));
const World_1 = __importDefault(require("./gamenode/World"));
const FirstConnectingPopup_1 = __importDefault(require("./popup/FirstConnectingPopup"));
const ReconnectingPopup_1 = __importDefault(require("./popup/ReconnectingPopup"));
class CloneCraft {
    constructor() {
        this.codeStore = new skydapp_browser_1.Store("codeStore");
        this.screen = new skydapp_browser_1.Fullscreen();
        this.firstConnectingPopup = new FirstConnectingPopup_1.default().appendTo(this.screen.root);
        this.clones = [];
        this.team = { units: [] };
    }
    start() {
        this.client = new skydapp_browser_1.WebSocketClient(`wss://${Config_1.default.backendHost}`);
        this.client.on("connect", () => {
            console.log("connected to server.");
            this.firstConnectingPopup?.delete();
            this.firstConnectingPopup = undefined;
            this.reconnectingPopup?.delete();
            this.goWorld();
        });
        this.client.on("disconnect", () => {
            console.log("disconnected from server.");
            this.world?.delete();
            this.battle?.delete();
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
                const data = await this.client.send("load-all");
                this.clones = data.clones;
                this.team = data.team;
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
    goBattle() {
        this.world?.delete();
        this.battle?.delete();
        this.battle = new Battle_1.default().appendTo(this.screen.root);
        this.battle.on("delete", () => this.battle = undefined);
    }
    goWorld() {
        this.world?.delete();
        this.battle?.delete();
        this.world = new World_1.default().appendTo(this.screen.root);
        this.world.on("delete", () => this.world = undefined);
    }
    async saveTeam() {
        await this.client.send("save-team", this.team);
    }
    removeCloneFromTeam(cloneId) {
        for (const clones of this.team.units) {
            for (const [index, clone] of clones.entries()) {
                if (clone?.tokenId === cloneId) {
                    clones[index] = null;
                    break;
                }
            }
        }
    }
    checkCloneIsInTeam(cloneId) {
        for (const clones of this.team.units) {
            for (const clone of clones) {
                if (clone?.tokenId === cloneId) {
                    return true;
                }
            }
        }
        return false;
    }
    async testCNDV3Mint() {
        await this.client.send("test-cnd-v3-mint");
    }
}
exports.default = new CloneCraft();
//# sourceMappingURL=CloneCraft.js.map