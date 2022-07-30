"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const CloneCraft_1 = __importDefault(require("../../CloneCraft"));
const MintPopup_1 = __importDefault(require("../../popup/MintPopup"));
const RankingPopup_1 = __importDefault(require("../../popup/RankingPopup"));
const ShopPopup_1 = __importDefault(require("../../popup/ShopPopup"));
const TeamPopup_1 = __importDefault(require("../../popup/TeamPopup"));
class ToolPanel extends skydapp_browser_1.GameNode {
    constructor() {
        super(0, 0);
        this.width = 100 * 5;
        this.height = 126;
        this.dom = (0, skydapp_browser_1.el)(".tool-panel", (0, skydapp_browser_1.el)("a.mint", {
            click: () => {
                new MintPopup_1.default().appendTo(CloneCraft_1.default.screen.root);
            },
        }), (0, skydapp_browser_1.el)("a.team", {
            click: () => {
                new TeamPopup_1.default().appendTo(CloneCraft_1.default.screen.root);
            },
        }), (0, skydapp_browser_1.el)("a.shop", {
            click: () => {
                new ShopPopup_1.default().appendTo(CloneCraft_1.default.screen.root);
            },
        }), (0, skydapp_browser_1.el)("a.explore"), (0, skydapp_browser_1.el)("a.stage", {
            click: () => {
                new RankingPopup_1.default().appendTo(CloneCraft_1.default.screen.root);
            },
        }));
        this.dom.style({ width: this.width, height: this.height });
    }
}
exports.default = ToolPanel;
//# sourceMappingURL=ToolPanel.js.map