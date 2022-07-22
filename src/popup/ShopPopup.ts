import { DomNode, el, FixedNode } from "skydapp-browser";

export default class ShopPopup extends FixedNode {

    public content: DomNode;

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
                        el("a", "ALL"),
                        el("a", "FAIRY"),
                    ),
                    el(".grid-container",
                        el(".item",
                            el(".content",
                                el("h6", "ENGINE"),
                                el("img", { src: "/images/ui/amber.png", alt: "amber" }),
                                el(".amount-container",
                                    el("p", "X 3006"),
                                ),
                            ),
                            el(".price-container",
                                el("p", "6313"),
                                el("img", { src: "/images/ui/amber.png", alt: "amber" }),
                            ),
                        ),
                    ),
                ),
            ),
        );
    }
}
