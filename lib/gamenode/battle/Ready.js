"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
class Ready extends skydapp_browser_1.GameNode {
    constructor() {
        super(0, 0);
        const spine = new skydapp_browser_1.SpineNode(0, 0, {
            json: "/images/battle/battle.json",
            atlas: "/images/battle/battle.atlas",
            png: "/images/battle/battle.png",
            animation: "animation",
        }).appendTo(this);
        spine.on("load", () => {
            new skydapp_browser_1.Delay(this, () => {
                spine.fadeOut(0.002, () => {
                    spine.delete();
                    this.fireEvent("next");
                });
            }, 1000);
        });
    }
}
exports.default = Ready;
//# sourceMappingURL=Ready.js.map