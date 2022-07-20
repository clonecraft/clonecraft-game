import { Fullscreen, Store, WebSocketClient } from "skydapp-browser";
import Config from "./Config";
import DiscordUserInfo from "./datamodel/DiscordUserInfo";
import World from "./gamenode/World";
import FirstConnectingPopup from "./popup/FirstConnectingPopup";
import ReconnectingPopup from "./popup/ReconnectingPopup";

class CloneCraft {
    private codeStore = new Store("codeStore");

    public screen: Fullscreen = new Fullscreen();
    private client!: WebSocketClient;

    private firstConnectingPopup: FirstConnectingPopup | undefined = new FirstConnectingPopup().appendTo(this.screen.root);
    private world: World | undefined;
    private reconnectingPopup: ReconnectingPopup | undefined;

    public currentUserInfo: DiscordUserInfo | undefined;

    public start() {

        this.client = new WebSocketClient(`wss://${Config.backendHost}`);

        this.client.on("connect", () => {
            console.log("connected to server.");
            this.firstConnectingPopup?.delete();
            this.firstConnectingPopup = undefined;
            this.reconnectingPopup?.delete();
            this.world?.delete();
            this.world = new World().appendTo(this.screen.root);
            this.world.on("delete", () => this.world = undefined);
        });

        this.client.on("disconnect", () => {
            console.log("disconnected from server.");
            this.world?.delete();
            if (this.firstConnectingPopup === undefined) {
                this.reconnectingPopup?.delete();
                this.reconnectingPopup = new ReconnectingPopup().appendTo(this.screen.root);
                this.reconnectingPopup.on("delete", () => this.reconnectingPopup = undefined);
            }
            setTimeout(() => {
                // 접속이 끊어지면 자동으로 재접속
                this.client.reconnect();
            }, 1000);
        });
    }

    public async checkDiscordLogin() {

        let code: string | undefined = this.codeStore.get("code");
        if (code === undefined) {
            code = new URLSearchParams(window.location.search).get("code")!;
            if (code !== null) {
                try {
                    await this.client.send("load-discord-token", code, `${window.location.protocol}//${window.location.host}`);
                    this.codeStore.set("code", code, true);
                } catch (error) {
                    console.error(error);
                    code = undefined;
                }
            } else {
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
            } catch (error) {
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

    public async testCNDV3Mint() {
        if (this.currentUserInfo !== undefined) {
            return this.client.send("test-cnd-v3-mint", this.currentUserInfo.id);
        }
    }
}

export default new CloneCraft();
