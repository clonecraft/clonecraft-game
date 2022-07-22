import { DomNode, el, FixedNode } from "skydapp-browser";

export default class Alert extends FixedNode {

    public content: DomNode;
    private input: DomNode<HTMLInputElement>;

    constructor(
        title: string,
        message: string,
        confirmTitle: string,
        confirm: (value: string) => void,
        placeholder?: string,
    ) {
        super(0, 0);
        this.dom = el(".popup-background",
            this.content = el(".prompt",
                el(".content",
                    el("header",
                        el("h6", title),
                    ),
                    el("p", message)
                ),
                el(".interaction-container",
                    el(".input-container",
                        this.input = el("input", { placeholder: placeholder }),
                    ),
                    el("a", "Confirm", {
                        click: () => this.delete(),
                    }),
                ),
            ),
        );
    }
}