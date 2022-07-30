import { DomNode, el, FixedNode } from "skydapp-browser";

export default class BuyPopup extends FixedNode {

    public content: DomNode;

    constructor(asset: {
        name: string,
        image: string,
        price: number,
    }) {
        super(0, 0);
        this.dom = el(".popup-background",
            this.content = el(".buy-popup",
                el(".content",
                    el("h6", asset.name),
                    el(".image-container",
                        el("img", { src: asset.image, alt: "amber" }),
                    ),
                    el(".text-container",
                        el("p", "Description CxNxD Item"),
                    ),
                ),
                el(".button-container",
                    el("a", "CLOSE", {
                        click: () => this.delete(),
                    }),
                    el("a.buy",
                        el("p", "BUY"),
                        el(".amber-container",
                            el("p.price", String(asset.price)),
                            el("img", { src: "/images/ui/amber.png", alt: "amber" }),
                        ),
                    ),
                ),
            ),
        );
    }
}
