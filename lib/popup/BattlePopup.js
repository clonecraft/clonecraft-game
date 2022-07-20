"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const skydapp_common_1 = require("skydapp-common");
const UnitStatusPopup_1 = __importDefault(require("./UnitStatusPopup"));
class BattlePopup extends skydapp_browser_1.FixedNode {
    constructor() {
        super(0, 0);
        this.dom = (0, skydapp_browser_1.el)(".popup-background", this.content = (0, skydapp_browser_1.el)(".battle-popup", (0, skydapp_browser_1.el)(".top", (0, skydapp_browser_1.el)(""), (0, skydapp_browser_1.el)("h6", "BATTLE"), (0, skydapp_browser_1.el)("a.close-button", (0, skydapp_browser_1.el)("img", { src: "/images/ui/close-button.png" }), { click: () => skydapp_common_1.SkyRouter.go("/") })), (0, skydapp_browser_1.el)(".my-panel", (0, skydapp_browser_1.el)(".profile-image", (0, skydapp_browser_1.el)("img", { src: "/images/profile-image-sample.png" })), (0, skydapp_browser_1.el)(".units", (0, skydapp_browser_1.el)(".character", (0, skydapp_browser_1.el)("img", { src: "/images/character/character1.jpeg" }), {
            click: () => {
                if (this.screen !== undefined) {
                    new UnitStatusPopup_1.default().appendTo(this.screen.root);
                }
            },
        }), (0, skydapp_browser_1.el)(".character", (0, skydapp_browser_1.el)("img", { src: "/images/character/character2.jpeg" }), {
            click: () => {
                if (this.screen !== undefined) {
                    new UnitStatusPopup_1.default().appendTo(this.screen.root);
                }
            },
        }), (0, skydapp_browser_1.el)(".character", (0, skydapp_browser_1.el)("img", { src: "/images/character/character1.jpeg" }), {
            click: () => {
                if (this.screen !== undefined) {
                    new UnitStatusPopup_1.default().appendTo(this.screen.root);
                }
            },
        }), (0, skydapp_browser_1.el)(".character", (0, skydapp_browser_1.el)("img", { src: "/images/character/character2.jpeg" }), {
            click: () => {
                if (this.screen !== undefined) {
                    new UnitStatusPopup_1.default().appendTo(this.screen.root);
                }
            },
        }), (0, skydapp_browser_1.el)(".character", (0, skydapp_browser_1.el)("img", { src: "/images/character/character1.jpeg" }), {
            click: () => {
                if (this.screen !== undefined) {
                    new UnitStatusPopup_1.default().appendTo(this.screen.root);
                }
            },
        }), (0, skydapp_browser_1.el)(".character", (0, skydapp_browser_1.el)("img", { src: "/images/character/character2.jpeg" }), {
            click: () => {
                if (this.screen !== undefined) {
                    new UnitStatusPopup_1.default().appendTo(this.screen.root);
                }
            },
        }), (0, skydapp_browser_1.el)(".character", (0, skydapp_browser_1.el)("img", { src: "/images/character/character1.jpeg" }), {
            click: () => {
                if (this.screen !== undefined) {
                    new UnitStatusPopup_1.default().appendTo(this.screen.root);
                }
            },
        }), (0, skydapp_browser_1.el)(".character", (0, skydapp_browser_1.el)("img", { src: "/images/character/character2.jpeg" }), {
            click: () => {
                if (this.screen !== undefined) {
                    new UnitStatusPopup_1.default().appendTo(this.screen.root);
                }
            },
        }), (0, skydapp_browser_1.el)(".character", (0, skydapp_browser_1.el)("img", { src: "/images/character/character1.jpeg" }), {
            click: () => {
                if (this.screen !== undefined) {
                    new UnitStatusPopup_1.default().appendTo(this.screen.root);
                }
            },
        })), (0, skydapp_browser_1.el)("a.attack-button", (0, skydapp_browser_1.el)("img", { src: "/images/ui/attack.png" })), (0, skydapp_browser_1.el)("a.defence-button", (0, skydapp_browser_1.el)("img", { src: "/images/ui/defence.png" })), (0, skydapp_browser_1.el)(".skills", (0, skydapp_browser_1.el)("a.skill-button", (0, skydapp_browser_1.el)("img", { src: "/images/ui/skill1.png" })), (0, skydapp_browser_1.el)("a.skill-button", (0, skydapp_browser_1.el)("img", { src: "/images/ui/skill2.png" })), (0, skydapp_browser_1.el)("a.skill-button", (0, skydapp_browser_1.el)("img", { src: "/images/ui/skill3.png" })), (0, skydapp_browser_1.el)("a.skill-button", (0, skydapp_browser_1.el)("img", { src: "/images/ui/skill4.png" })))), (0, skydapp_browser_1.el)(".enemy-panel", (0, skydapp_browser_1.el)(".profile-image", (0, skydapp_browser_1.el)("img", { src: "/images/profile-image-sample.png" })), (0, skydapp_browser_1.el)(".units", (0, skydapp_browser_1.el)(".character", (0, skydapp_browser_1.el)("img", { src: "/images/character/character1.jpeg" }), {
            click: () => {
                if (this.screen !== undefined) {
                    new UnitStatusPopup_1.default().appendTo(this.screen.root);
                }
            },
        }), (0, skydapp_browser_1.el)(".character", (0, skydapp_browser_1.el)("img", { src: "/images/character/character2.jpeg" }), {
            click: () => {
                if (this.screen !== undefined) {
                    new UnitStatusPopup_1.default().appendTo(this.screen.root);
                }
            },
        }), (0, skydapp_browser_1.el)(".character", (0, skydapp_browser_1.el)("img", { src: "/images/character/character1.jpeg" }), {
            click: () => {
                if (this.screen !== undefined) {
                    new UnitStatusPopup_1.default().appendTo(this.screen.root);
                }
            },
        }), (0, skydapp_browser_1.el)(".character", (0, skydapp_browser_1.el)("img", { src: "/images/character/character2.jpeg" }), {
            click: () => {
                if (this.screen !== undefined) {
                    new UnitStatusPopup_1.default().appendTo(this.screen.root);
                }
            },
        }), (0, skydapp_browser_1.el)(".character", (0, skydapp_browser_1.el)("img", { src: "/images/character/character1.jpeg" }), {
            click: () => {
                if (this.screen !== undefined) {
                    new UnitStatusPopup_1.default().appendTo(this.screen.root);
                }
            },
        }), (0, skydapp_browser_1.el)(".character", (0, skydapp_browser_1.el)("img", { src: "/images/character/character2.jpeg" }), {
            click: () => {
                if (this.screen !== undefined) {
                    new UnitStatusPopup_1.default().appendTo(this.screen.root);
                }
            },
        }), (0, skydapp_browser_1.el)(".character", (0, skydapp_browser_1.el)("img", { src: "/images/character/character1.jpeg" }), {
            click: () => {
                if (this.screen !== undefined) {
                    new UnitStatusPopup_1.default().appendTo(this.screen.root);
                }
            },
        }), (0, skydapp_browser_1.el)(".character", (0, skydapp_browser_1.el)("img", { src: "/images/character/character2.jpeg" }), {
            click: () => {
                if (this.screen !== undefined) {
                    new UnitStatusPopup_1.default().appendTo(this.screen.root);
                }
            },
        }), (0, skydapp_browser_1.el)(".character", (0, skydapp_browser_1.el)("img", { src: "/images/character/character1.jpeg" }), {
            click: () => {
                if (this.screen !== undefined) {
                    new UnitStatusPopup_1.default().appendTo(this.screen.root);
                }
            },
        })), (0, skydapp_browser_1.el)("a.attack-button", (0, skydapp_browser_1.el)("img", { src: "/images/ui/attack.png" })), (0, skydapp_browser_1.el)("a.defence-button", (0, skydapp_browser_1.el)("img", { src: "/images/ui/defence.png" })), (0, skydapp_browser_1.el)(".skills", (0, skydapp_browser_1.el)("a.skill-button", (0, skydapp_browser_1.el)("img", { src: "/images/ui/skill1.png" })), (0, skydapp_browser_1.el)("a.skill-button", (0, skydapp_browser_1.el)("img", { src: "/images/ui/skill2.png" })), (0, skydapp_browser_1.el)("a.skill-button", (0, skydapp_browser_1.el)("img", { src: "/images/ui/skill3.png" })), (0, skydapp_browser_1.el)("a.skill-button", (0, skydapp_browser_1.el)("img", { src: "/images/ui/skill4.png" }))))));
    }
}
exports.default = BattlePopup;
//# sourceMappingURL=BattlePopup.js.map