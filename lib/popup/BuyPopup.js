"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const skydapp_browser_1 = require("skydapp-browser");
const CloneCraft_1 = __importDefault(require("../CloneCraft"));
const Alert_1 = __importDefault(require("./Alert"));
class BuyPopup extends skydapp_browser_1.FixedNode {
    constructor(asset) {
        super(0, 0);
        this.dom = (0, skydapp_browser_1.el)(".popup-background", this.content = (0, skydapp_browser_1.el)(".buy-popup", (0, skydapp_browser_1.el)(".content", (0, skydapp_browser_1.el)("h6", asset.name), (0, skydapp_browser_1.el)(".image-container", (0, skydapp_browser_1.el)("img", { src: asset.image, alt: "amber" })), (0, skydapp_browser_1.el)(".text-container", (0, skydapp_browser_1.el)("p", "Description CxNxD Item"))), (0, skydapp_browser_1.el)(".button-container", (0, skydapp_browser_1.el)("a", "CLOSE", {
            click: () => this.delete(),
        }), (0, skydapp_browser_1.el)("a.buy", (0, skydapp_browser_1.el)("p", "BUY"), (0, skydapp_browser_1.el)(".amber-container", (0, skydapp_browser_1.el)("p.price", String(asset.price)), (0, skydapp_browser_1.el)("img", { src: "/images/ui/amber.png", alt: "amber" })), {
            click: async () => {
                if (CloneCraft_1.default.currentUserAmber.lt(ethers_1.utils.parseEther(String(asset.price)))) {
                    new Alert_1.default("오류", "앰버가 부족합니다.").appendTo(CloneCraft_1.default.screen.root);
                }
                else {
                    await CloneCraft_1.default.buyItem(asset.id);
                    await CloneCraft_1.default.loadAmber();
                    this.delete();
                    new Alert_1.default("구매 완료", `${asset.name}을/를 구매했습니다.`).appendTo(CloneCraft_1.default.screen.root);
                }
            },
        }))));
    }
}
exports.default = BuyPopup;
//# sourceMappingURL=BuyPopup.js.map