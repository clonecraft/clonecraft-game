import { DomNode, el } from "skydapp-browser";

export default class RankingTopItem extends DomNode {
    constructor(rank: number) {
        super(".ranking-top-item");
        this.append(
            el(`.rank${rank}-container`,
                el(".image-container",
                    el("img", {
                        src: "/images/character/character1.jpeg",
                        alt: "character",
                    }),
                    el("p", "11545")
                ),
                el("h6", `${rank === 1 ? "1ST" : `${rank}RD`}`),
                el("p", "0xDF...F1AD"),
            ),
        );
    }
}
