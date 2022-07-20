"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const Config_1 = __importDefault(require("../Config"));
class LoginPopup extends skydapp_browser_1.FixedNode {
    constructor() {
        super(0, 0);
        this.dom = (0, skydapp_browser_1.el)(".popup-background", this.content = (0, skydapp_browser_1.el)(".login-popup", (0, skydapp_browser_1.el)(".top", (0, skydapp_browser_1.el)("h5", "WELCOME"), (0, skydapp_browser_1.el)("h6", "DISCORD LOGIN IS REQUIRED TO ENTER NECTARWAR")), (0, skydapp_browser_1.el)(".content", (0, skydapp_browser_1.el)("a", (0, skydapp_browser_1.el)("img", { src: "/images/icn/discord-white.svg", alt: "discord" }), (0, skydapp_browser_1.el)("p", "LOGIN WITH DISCORD"), {
            href: `https://discord.com/api/oauth2/authorize?client_id=${Config_1.default.applicationId}&redirect_uri=${encodeURIComponent(`${window.location.protocol}//${window.location.host}`)}&response_type=code&scope=identify`,
        })), (0, skydapp_browser_1.el)(".bottom", (0, skydapp_browser_1.el)("a", "CONTINUE"))));
    }
}
exports.default = LoginPopup;
//# sourceMappingURL=LoginPopup.js.map