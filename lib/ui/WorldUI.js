"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const BattleButton_1 = __importDefault(require("./WorldUI/BattleButton"));
const EmberPanel_1 = __importDefault(require("./WorldUI/EmberPanel"));
const ToolPanel_1 = __importDefault(require("./WorldUI/ToolPanel"));
const UserInfoPanel_1 = __importDefault(require("./WorldUI/UserInfoPanel"));
class WorldUI extends skydapp_browser_1.FixedNode {
    constructor() {
        super(0, 0);
        this.append(this.userInfoPanel = new UserInfoPanel_1.default(), this.battleButton = new BattleButton_1.default(), this.emberPanel = new EmberPanel_1.default(), this.toolPanel = new ToolPanel_1.default());
    }
    repositeUI() {
        if (this.screen !== undefined) {
            this.userInfoPanel.move(this.userInfoPanel.width / 2 - this.screen.centerX + 10, this.userInfoPanel.height / 2 - this.screen.centerY + 10);
            this.battleButton.move(this.battleButton.width / 2 - this.screen.centerX + 10, -this.battleButton.height / 2 + this.screen.centerY - 10);
            this.emberPanel.move(-this.emberPanel.width / 2 + this.screen.centerX - 10, this.userInfoPanel.height / 2 - this.screen.centerY + 10);
            this.toolPanel.move(-this.toolPanel.width / 2 + this.screen.centerX - 10, -this.toolPanel.height / 2 + this.screen.centerY - 10);
        }
    }
}
exports.default = WorldUI;
//# sourceMappingURL=WorldUI.js.map