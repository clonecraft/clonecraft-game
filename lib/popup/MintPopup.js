"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const skydapp_common_1 = require("skydapp-common");
const CloneCraft_1 = __importDefault(require("../CloneCraft"));
class MintPopup extends skydapp_browser_1.FixedNode {
    constructor() {
        super(0, 0);
        this.dom = (0, skydapp_browser_1.el)(".popup-background", this.content = (0, skydapp_browser_1.el)(".mint-popup", (0, skydapp_browser_1.el)(".info-container", (0, skydapp_browser_1.el)("h5", "INFO"), (0, skydapp_browser_1.el)("p", "CxNxD Omega는 CloneCraft 게임에 사용되는 NFT입니다. 민팅 가격은 1개에 2 klay 입니다."), (0, skydapp_browser_1.el)("p", "하루에 총 1000개 민팅이 가능하며 지갑당 하루에 9개 민팅 가능합니다. CxNxD Omega는 민팅시 스킬을 랜덤으로 부여받습니다."), (0, skydapp_browser_1.el)("p", "또한 CxNxD Asset NFT를 활용하여 CxNxD Omega의 의상을 바꿀 수 있습니다.")), (0, skydapp_browser_1.el)(".mint-container", (0, skydapp_browser_1.el)(".content", (0, skydapp_browser_1.el)("h5", "CXNXD OMEGA CLONE MINT"), (0, skydapp_browser_1.el)("p", "MY KLAY: 100"), (0, skydapp_browser_1.el)("p", "TODAY MY MINT AVAILABLE NUMBER: 100"), (0, skydapp_browser_1.el)("p", "TODAY TOTAL MINT AVAILBLE NUMBER: 100"), this.input = (0, skydapp_browser_1.el)("input", { placeholder: "Mint Amount" })), (0, skydapp_browser_1.el)("a", "MINT", {
            click: async () => {
                const count = parseInt(this.input.domElement.value, 10);
                await skydapp_common_1.SkyUtil.repeatResultAsync(count, async () => {
                    console.log(await CloneCraft_1.default.testCNDV3Mint());
                });
                this.delete();
                alert("민팅 완료");
            },
        }), (0, skydapp_browser_1.el)("a", "닫기", {
            click: () => this.delete(),
        }))));
    }
}
exports.default = MintPopup;
//# sourceMappingURL=MintPopup.js.map