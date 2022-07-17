import { el, GameNode } from "skydapp-browser";

export default class EmberPanel extends GameNode {

    public width = 278;
    public height = 70;

    constructor() {
        super(0, 0);
        this.dom = el(".ember-panel",
            el("p", "644443"),
        );
        this.dom.style({ width: this.width, height: this.height });
    }
}
