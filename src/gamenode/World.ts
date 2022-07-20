import { GameNode, ImageNode } from "skydapp-browser";
import CloneCraft from "../CloneCraft";
import LoginPopup from "../popup/LoginPopup";
import WorldUI from "../ui/WorldUI";

export default class World extends GameNode {

    private loginPopup: LoginPopup | undefined;
    public ui: WorldUI | undefined;

    constructor() {
        super(0, 0);

        let testMap;
        this.append(
            testMap = new ImageNode(0, 0, "/images/map.png"),
        );
        testMap.scale = 3;

        this.init();
    }

    private async init() {
        if (await CloneCraft.checkDiscordLogin()) {
            this.append(this.ui = new WorldUI());
            this.ui.repositeUI();
            this.ui.on("delete", () => this.ui = undefined);
        } else {
            this.append(this.loginPopup = new LoginPopup());
            this.loginPopup.on("delete", () => this.loginPopup = undefined);
        }
    }
}
