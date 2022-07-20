"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const RankingItem_1 = __importDefault(require("../ui/RankingItem"));
const RankingTopItem_1 = __importDefault(require("../ui/RankingTopItem"));
class RankingPopup extends skydapp_browser_1.FixedNode {
    constructor() {
        super(0, 0);
        this.dom = (0, skydapp_browser_1.el)(".popup-background", this.content = (0, skydapp_browser_1.el)(".ranking-popup", (0, skydapp_browser_1.el)(".top", (0, skydapp_browser_1.el)(""), (0, skydapp_browser_1.el)("h6", "RANKING"), (0, skydapp_browser_1.el)("a.close-button", (0, skydapp_browser_1.el)("img", { src: "/images/ui/close-button.png" }), { click: () => this.delete() })), (0, skydapp_browser_1.el)(".top3-container", (0, skydapp_browser_1.el)(".ranking-container", new RankingTopItem_1.default(2), new RankingTopItem_1.default(1), new RankingTopItem_1.default(3)), (0, skydapp_browser_1.el)("img", { src: "/images/ui/top3.png", alt: "top3" })), (0, skydapp_browser_1.el)(".list-container", new RankingItem_1.default(), new RankingItem_1.default())));
    }
}
exports.default = RankingPopup;
//# sourceMappingURL=RankingPopup.js.map