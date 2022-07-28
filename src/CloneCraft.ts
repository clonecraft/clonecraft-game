import { BigNumber } from "ethers";
import { Fullscreen, Store, WebSocketClient } from "skydapp-browser";
import Config from "./Config";
import DiscordUserInfo from "./datamodel/DiscordUserInfo";
import TeamInfo from "./datamodel/TeamInfo";
import UniqueItem from "./datamodel/UniqueItem";
import Battle from "./gamenode/Battle";
import World from "./gamenode/World";
import FirstConnectingPopup from "./popup/FirstConnectingPopup";
import ReconnectingPopup from "./popup/ReconnectingPopup";

class CloneCraft {
    private codeStore = new Store("codeStore");

    public screen: Fullscreen = new Fullscreen();
    private client!: WebSocketClient;

    private firstConnectingPopup: FirstConnectingPopup | undefined = new FirstConnectingPopup().appendTo(this.screen.root);
    private world: World | undefined;
    private battle: Battle | undefined;
    private reconnectingPopup: ReconnectingPopup | undefined;

    public currentUserInfo: DiscordUserInfo | undefined;
    public currentUserAmber: BigNumber = BigNumber.from(0);
    public clones: UniqueItem[] = [];
    public team: TeamInfo = { units: [] };

    public start() {

        this.client = new WebSocketClient(`wss://${Config.backendHost}`);

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
                await this.loadAll();
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

    public async loadAll() {
        const data = await this.client.send("load-all");
        this.currentUserAmber = data.amber;
        this.clones = data.clones;
        this.team = data.team;
    }

    public goBattle() {
        this.world?.delete();
        this.battle?.delete();
        this.battle = new Battle().appendTo(this.screen.root);
        this.battle.on("delete", () => this.battle = undefined);
    }

    public goWorld() {
        this.world?.delete();
        this.battle?.delete();
        this.world = new World().appendTo(this.screen.root);
        this.world.on("delete", () => this.world = undefined);
    }

    public async saveTeam() {
        await this.client.send("save-team", this.team);
    }

    public removeCloneFromTeam(cloneId: string) {
        for (const clones of this.team.units) {
            for (const [index, clone] of clones.entries()) {
                if (clone?.tokenId === cloneId) {
                    (clones as any)[index] = null;
                    break;
                }
            }
        }
    }

    public checkCloneIsInTeam(cloneId: string) {
        for (const clones of this.team.units) {
            for (const clone of clones) {
                if (clone?.tokenId === cloneId) {
                    return true;
                }
            }
        }
        return false;
    }

    public async testCNDV3Mint() {
        await this.client.send("test-cnd-v3-mint");
    }
}

export default new CloneCraft();
