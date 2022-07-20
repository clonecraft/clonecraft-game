"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const CloneCraft_1 = __importDefault(require("../CloneCraft"));
const LoginPopup_1 = __importDefault(require("../popup/LoginPopup"));
const WorldUI_1 = __importDefault(require("../ui/WorldUI"));
class World extends skydapp_browser_1.GameNode {
    constructor() {
        super(0, 0);
        let testMap;
        this.append(testMap = new skydapp_browser_1.ImageNode(0, 0, "/images/map.png"));
        testMap.scale = 3;
        this.init();
    }
    async init() {
        if (await CloneCraft_1.default.checkDiscordLogin()) {
            this.append(this.ui = new WorldUI_1.default());
            this.ui.repositeUI();
            this.ui.on("delete", () => this.ui = undefined);
        }
        else {
            this.append(this.loginPopup = new LoginPopup_1.default());
            this.loginPopup.on("delete", () => this.loginPopup = undefined);
        }
    }
}
exports.default = World;
//# sourceMappingURL=World.js.map