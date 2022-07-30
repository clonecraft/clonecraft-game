"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const CloneCraft_1 = __importDefault(require("../CloneCraft"));
const Constants_1 = __importDefault(require("../Constants"));
const asset_list_json_1 = __importDefault(require("../data/asset_list.json"));
const BuyPopup_1 = __importDefault(require("./BuyPopup"));
class ShopPopup extends skydapp_browser_1.FixedNode {
    constructor() {
        super(0, 0);
        this.categoryStore = new skydapp_browser_1.Store("categoryStore");
        this.dom = (0, skydapp_browser_1.el)(".popup-background", this.content = (0, skydapp_browser_1.el)(".shop-popup", (0, skydapp_browser_1.el)(".top", (0, skydapp_browser_1.el)(""), (0, skydapp_browser_1.el)("h6", "MARKET"), (0, skydapp_browser_1.el)("a.close-button", (0, skydapp_browser_1.el)("img", { src: "/images/ui/close-button.png" }), { click: () => this.delete() })), (0, skydapp_browser_1.el)(".content", (0, skydapp_browser_1.el)(".tab-container", (0, skydapp_browser_1.el)("a", "ALL", { click: () => this.loadItems() }), ...(Constants_1.default.categories.map((category) => (0, skydapp_browser_1.el)("a", category.toUpperCase(), { click: () => this.loadItems(category) })))), this.itemContainer = (0, skydapp_browser_1.el)(".grid-container"))));
        this.loadItems(this.categoryStore.get("category"));
    }
    loadItems(category) {
        if (category === undefined) {
            this.categoryStore.delete("category");
        }
        else {
            this.categoryStore.set("category", category);
        }
        this.itemContainer.empty();
        for (const asset of asset_list_json_1.default) {
            if (asset.buyable === true && (category === undefined || asset.asset_type == category)) {
                this.itemContainer.append((0, skydapp_browser_1.el)(".item", (0, skydapp_browser_1.el)(".content", (0, skydapp_browser_1.el)("h6", "ENGINE"), (0, skydapp_browser_1.el)("img", { src: asset.image, alt: "amber" })), (0, skydapp_browser_1.el)(".price-container", (0, skydapp_browser_1.el)("p", String(asset.price)), (0, skydapp_browser_1.el)("img", { src: "/images/ui/amber.png", alt: "amber" })), {
                    click: () => {
                        new BuyPopup_1.default(asset).appendTo(CloneCraft_1.default.screen.root);
                    },
                }));
            }
        }
    }
}
exports.default = ShopPopup;
//# sourceMappingURL=ShopPopup.js.map