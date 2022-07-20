"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
class EmberPanel extends skydapp_browser_1.GameNode {
    constructor() {
        super(0, 0);
        this.width = 278;
        this.height = 70;
        this.dom = (0, skydapp_browser_1.el)(".ember-panel", (0, skydapp_browser_1.el)("p", "644443"));
        this.dom.style({ width: this.width, height: this.height });
    }
}
exports.default = EmberPanel;
//# sourceMappingURL=EmberPanel.js.map