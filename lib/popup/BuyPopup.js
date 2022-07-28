"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
class BuyPopup extends skydapp_browser_1.FixedNode {
    constructor() {
        super(0, 0);
        this.dom = (0, skydapp_browser_1.el)(".popup-background", this.content = (0, skydapp_browser_1.el)(".buy-popup", (0, skydapp_browser_1.el)(".content", (0, skydapp_browser_1.el)("h6", "ENGINE"), (0, skydapp_browser_1.el)(".image-container", (0, skydapp_browser_1.el)("img", { src: "/images/ui/amber.png", alt: "amber" }), (0, skydapp_browser_1.el)(".text-container", (0, skydapp_browser_1.el)("p", "X3006"))), (0, skydapp_browser_1.el)(".text-container", (0, skydapp_browser_1.el)("p", "Description CxNxD Item"))), (0, skydapp_browser_1.el)(".button-container", (0, skydapp_browser_1.el)("a", "CLOSE"), (0, skydapp_browser_1.el)("a.buy", (0, skydapp_browser_1.el)("p", "BUY"), (0, skydapp_browser_1.el)(".amber-container", (0, skydapp_browser_1.el)("p.price", "6313"), (0, skydapp_browser_1.el)("img", { src: "/images/ui/amber.png", alt: "amber" }))))));
    }
}
exports.default = BuyPopup;
//# sourceMappingURL=BuyPopup.js.map