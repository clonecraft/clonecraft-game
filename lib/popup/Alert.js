"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
class Alert extends skydapp_browser_1.FixedNode {
    constructor(title, message, confirmTitle) {
        super(0, 0);
        this.dom = (0, skydapp_browser_1.el)(".popup-background", this.content = (0, skydapp_browser_1.el)(".alert", (0, skydapp_browser_1.el)(".content", (0, skydapp_browser_1.el)("header", (0, skydapp_browser_1.el)("h6", title)), (0, skydapp_browser_1.el)("p", message)), (0, skydapp_browser_1.el)(".button-container", (0, skydapp_browser_1.el)("a.highlight", confirmTitle === undefined ? "CLOSE" : confirmTitle, {
            click: () => this.delete(),
        }))));
    }
}
exports.default = Alert;
//# sourceMappingURL=Alert.js.map