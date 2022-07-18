import { GameNode, ImageNode, WebSocketClient } from "skydapp-browser";
import Config from "../Config";
import ClonesPopup from "../ui/ClonesPopup";
import LoginPopup from "../ui/LoginPopup";
import WorldUI from "../ui/WorldUI";

export default class World extends GameNode {

    // private client = new WebSocketClient(`wss://${Config.backendHost}`);

    private loginPopup: LoginPopup | undefined;
    private clonesPopup: ClonesPopup | undefined;
    public ui: WorldUI | undefined;

    constructor() {
        super(0, 0);

        let testMap;
        this.append(
            testMap = new ImageNode(0, 0, "/images/map.png"),
            this.clonesPopup = new ClonesPopup()
        );
        testMap.scale = 3;

        // this.client.on("connect", () => {
        //     this.fireEvent("connect");
        // });

        // this.client.on("disconnect", () => {
        //     console.log("disconnected.");
        //     // 접속이 끊어지면 자동 재접속
        //     this.client.reconnect();
        // });
    }

    public showWorldUI() {
        this.loginPopup?.delete();
        this.ui?.delete();
        this.append(this.ui = new WorldUI());
        this.ui.repositeUI();
    }

    public showLoginPopup() {
        this.loginPopup?.delete();
        this.ui?.delete();
        this.append(this.loginPopup = new LoginPopup());
    }
}
