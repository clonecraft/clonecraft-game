import { DomNode, el, FixedNode } from "skydapp-browser";
export default class BuyPopup extends FixedNode {

    public content: DomNode;

    constructor() {
        super(0, 0);
        this.dom = el(".popup-background",
            this.content = el(".buy-popup",
                el(".content",
                    el("h6", "ENGINE"),
                    el(".image-container",
                        el("img", { src: "/images/ui/amber.png", alt: "amber" }),
                        el(".text-container",
                            el("p", "X3006"),
                        ),
                    ),
                    el(".text-container",
                        el("p", "Description CxNxD Item"),
                    ),
                ),
                el(".button-container",
                    el("a", "CLOSE"),
                    el("a.buy",
                        el("p", "BUY"),
                        el(".amber-container",
                            el("p.price", "6313"),
                            el("img", { src: "/images/ui/amber.png", alt: "amber" }),
                        ),
                    ),
                ),
            ),
        );
    }
}
