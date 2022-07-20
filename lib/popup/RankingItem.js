"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
class RnakingItem extends skydapp_browser_1.DomNode {
    constructor() {
        super(".ranking-item");
        this.append((0, skydapp_browser_1.el)(".item-container", (0, skydapp_browser_1.el)(".info-container", (0, skydapp_browser_1.el)(".ranking", "4"), (0, skydapp_browser_1.el)("img", { src: "/images/character/character1.jpeg", alt: "mock" }), (0, skydapp_browser_1.el)(".address", "0XDF...F1AD")), (0, skydapp_browser_1.el)("p", "15233")));
    }
}
exports.default = RnakingItem;
//# sourceMappingURL=RankingItem.js.map