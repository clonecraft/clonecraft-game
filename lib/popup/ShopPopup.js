"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
class ShopPopup extends skydapp_browser_1.FixedNode {
    constructor() {
        super(0, 0);
        this.dom = (0, skydapp_browser_1.el)(".popup-background", this.content = (0, skydapp_browser_1.el)(".shop-popup", (0, skydapp_browser_1.el)(".top", (0, skydapp_browser_1.el)(""), (0, skydapp_browser_1.el)("h6", "MARKET"), (0, skydapp_browser_1.el)("a.close-button", (0, skydapp_browser_1.el)("img", { src: "/images/ui/close-button.png" }), { click: () => this.delete() })), (0, skydapp_browser_1.el)(".content", (0, skydapp_browser_1.el)(".tab-container", (0, skydapp_browser_1.el)("a", "ALL"), (0, skydapp_browser_1.el)("a", "FAIRY")), (0, skydapp_browser_1.el)(".grid-container", (0, skydapp_browser_1.el)(".item", (0, skydapp_browser_1.el)(".content", (0, skydapp_browser_1.el)("h6", "ENGINE"), (0, skydapp_browser_1.el)("img", { src: "/images/ui/amber.png", alt: "amber" }), (0, skydapp_browser_1.el)(".amount-container", (0, skydapp_browser_1.el)("p", "X 3006"))), (0, skydapp_browser_1.el)(".price-container", (0, skydapp_browser_1.el)("p", "6313"), (0, skydapp_browser_1.el)("img", { src: "/images/ui/amber.png", alt: "amber" })))))));
    }
}
exports.default = ShopPopup;
//# sourceMappingURL=ShopPopup.js.map