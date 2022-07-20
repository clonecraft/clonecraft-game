import { DomNode, el, FixedNode } from "skydapp-browser";
import RnakingItem from "../ui/RankingItem";
import RankingTopItem from "../ui/RankingTopItem";

export default class RankingPopup extends FixedNode {

    public content: DomNode;

    constructor() {
        super(0, 0);
        this.dom = el(".popup-background",
            this.content = el(".ranking-popup",
                el(".top",
                    el(""),
                    el("h6", "RANKING"),
                    el("a.close-button",
                        el("img", { src: "/images/ui/close-button.png" }),
                        { click: () => this.delete() },
                    )
                ),
                el(".top3-container",
                    el(".ranking-container",
                        new RankingTopItem(2),
                        new RankingTopItem(1),
                        new RankingTopItem(3),
                    ),
                    el("img", { src: "/images/ui/top3.png", alt: "top3" })
                ),
                el(".list-container",
                    new RnakingItem(),
                    new RnakingItem(),
                ),
            ),
        );
    }
}
