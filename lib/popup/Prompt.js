"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
class Prompt extends skydapp_browser_1.FixedNode {
    constructor(title, message, confirmTitle, confirm, placeholder) {
        super(0, 0);
        this.dom = (0, skydapp_browser_1.el)(".popup-background", this.content = (0, skydapp_browser_1.el)(".prompt", (0, skydapp_browser_1.el)(".content", (0, skydapp_browser_1.el)("header", (0, skydapp_browser_1.el)("h6", title)), (0, skydapp_browser_1.el)("p", message)), (0, skydapp_browser_1.el)(".interaction-container", (0, skydapp_browser_1.el)(".input-container", this.input = (0, skydapp_browser_1.el)("input", { placeholder: placeholder })), (0, skydapp_browser_1.el)("a", "Confirm", {
            click: () => this.delete(),
        }))));
    }
}
exports.default = Prompt;
//# sourceMappingURL=Prompt.js.map