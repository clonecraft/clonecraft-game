"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
class RankingTopItem extends skydapp_browser_1.DomNode {
    constructor(rank) {
        super(".ranking-top-item");
        this.append((0, skydapp_browser_1.el)(`.rank${rank}-container`, (0, skydapp_browser_1.el)(".image-container", (0, skydapp_browser_1.el)("img", {
            src: "/images/character/character1.jpeg",
            alt: "character",
        }), (0, skydapp_browser_1.el)("p", "11545")), (0, skydapp_browser_1.el)("h6", `${rank === 1 ? "1ST" : `${rank}RD`}`), (0, skydapp_browser_1.el)("p", "0xDF...F1AD")));
    }
}
exports.default = RankingTopItem;
//# sourceMappingURL=RankingTopItem.js.map