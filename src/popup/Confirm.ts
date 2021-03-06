import { DomNode, el, FixedNode } from "skydapp-browser";

export default class Confirm extends FixedNode {

    public content: DomNode;

    constructor(
        title: string,
        message: string,
        confirmTitle?: string,
    ) {
        super(0, 0);
        this.dom = el(".popup-background",
            this.content = el(".confirm",
                el(".content",
                    el("header",
                        el("h6", title),
                    ),
                    el("p", message)
                ),
                el(".button-container",
                    el("a", "CLOSE"),
                    el("a.highlight", confirmTitle),
                ),
            ),
        );
    }
}
