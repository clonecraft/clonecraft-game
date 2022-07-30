import { DomNode, el, FixedNode, Store } from "skydapp-browser";
import CloneCraft from "../CloneCraft";
import Constants from "../Constants";
import asset_list from "../data/asset_list.json";
import BuyPopup from "./BuyPopup";

export default class ShopPopup extends FixedNode {

    private itemContainer: DomNode;
    public content: DomNode;

    private categoryStore: Store = new Store("categoryStore");

    constructor() {
        super(0, 0);

        this.dom = el(".popup-background",
            this.content = el(".shop-popup",
                el(".top",
                    el(""),
                    el("h6", "MARKET"),
                    el("a.close-button",
                        el("img", { src: "/images/ui/close-button.png" }),
                        { click: () => this.delete() },
                    )
                ),
                el(".content",
                    el(".tab-container",
                        el("a", "ALL", { click: () => this.loadItems() }),
                        ...(Constants.categories.map((category) => el("a", category.toUpperCase(), { click: () => this.loadItems(category) }))),
                    ),
                    this.itemContainer = el(".grid-container"),
                ),
            ),
        );
        this.loadItems(this.categoryStore.get<string>("category"));
    }

    private loadItems(category?: string) {
        if (category === undefined) {
            this.categoryStore.delete("category");
        } else {
            this.categoryStore.set("category", category);
        }
        this.itemContainer.empty();

        for (const asset of asset_list) {
            if (asset.buyable === true && (category === undefined || asset.asset_type == category)) {
                this.itemContainer.append(el(".item",
                    el(".content",
                        el("h6", "ENGINE"),
                        el("img", { src: asset.image, alt: "amber" }),
                    ),
                    el(".price-container",
                        el("p", String(asset.price)),
                        el("img", { src: "/images/ui/amber.png", alt: "amber" }),
                    ),
                    {
                        click: () => {
                            new BuyPopup(asset).appendTo(CloneCraft.screen.root);
                        },
                    },
                ));
            }
        }
    }
}
