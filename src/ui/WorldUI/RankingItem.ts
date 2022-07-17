import { DomNode, el } from "skydapp-browser";

export default class RnakingItem extends DomNode {
    constructor() {
        super(".ranking-item");
        this.append(
            el(".item-container",
                el(".info-container",
                    el(".ranking", "4"),
                    el("img", { src: "/images/character/character1.jpeg", alt: "mock" }),
                    el(".address", "0XDF...F1AD"),
                ),
                el("p", "15233"),
            ),
        );
    }
}