import { DomNode, el, FixedNode } from "skydapp-browser";
import CloneCraft from "../CloneCraft";

export default class ClonesPopup extends FixedNode {

    public content: DomNode;

    constructor() {
        super(0, 0);
        this.dom = el(".popup-background",
            this.content = el(".clones-popup",
                el(".top",
                    el(""),
                    el("h6", "CLONES"),
                    el("a.close-button",
                        el("img", { src: "/images/ui/close-button.png" }),
                        { click: () => this.delete() },
                    )
                ),
                el(".content",
                    el(".clone-slot",
                        el("img", { src: "/images/profile-image-sample.png" }),
                        el(".text-container",
                            el("p", "CXNXD OMEGA"),
                            el("p.id", "#21"),
                        ),
                    ),
                ),
            ),
        );

        for (const clone of CloneCraft.clones) {
            console.log(clone);
        }
    }
}
