"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const CloneCraft_1 = __importDefault(require("../CloneCraft"));
class ClonesPopup extends skydapp_browser_1.FixedNode {
    constructor() {
        super(0, 0);
        this.dom = (0, skydapp_browser_1.el)(".popup-background", this.content = (0, skydapp_browser_1.el)(".clones-popup", (0, skydapp_browser_1.el)(".top", (0, skydapp_browser_1.el)(""), (0, skydapp_browser_1.el)("h6", "CLONES"), (0, skydapp_browser_1.el)("a.close-button", (0, skydapp_browser_1.el)("img", { src: "/images/ui/close-button.png" }), { click: () => this.delete() })), (0, skydapp_browser_1.el)(".content", (0, skydapp_browser_1.el)(".clone-slot", (0, skydapp_browser_1.el)("img", { src: "/images/profile-image-sample.png" }), (0, skydapp_browser_1.el)(".text-container", (0, skydapp_browser_1.el)("p", "CXNXD OMEGA"), (0, skydapp_browser_1.el)("p.id", "#21"))))));
        for (const clone of CloneCraft_1.default.clones) {
            console.log(clone);
        }
    }
}
exports.default = ClonesPopup;
//# sourceMappingURL=ClonesPopup.js.map