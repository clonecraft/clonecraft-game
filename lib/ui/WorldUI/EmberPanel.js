"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const skydapp_browser_1 = require("skydapp-browser");
const skydapp_common_1 = require("skydapp-common");
const CloneCraft_1 = __importDefault(require("../../CloneCraft"));
class EmberPanel extends skydapp_browser_1.GameNode {
    constructor() {
        super(0, 0);
        this.width = 278;
        this.height = 70;
        this.dom = (0, skydapp_browser_1.el)(".ember-panel", (0, skydapp_browser_1.el)("a", "받기", { href: "https://amber-faucet.clonecraft.co.kr/" }), (0, skydapp_browser_1.el)("p", skydapp_common_1.SkyUtil.numberWithCommas(ethers_1.utils.formatEther(CloneCraft_1.default.currentUserAmber))));
        this.dom.style({ width: this.width, height: this.height });
    }
}
exports.default = EmberPanel;
//# sourceMappingURL=EmberPanel.js.map