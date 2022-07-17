import { Delay, DomNode, el, GameNode, ImageNode, SpineNode } from "skydapp-browser";
import BattlePopup from "../ui/BattlePopup";

export default class Battle extends GameNode {

    public popup: BattlePopup | undefined;
    public content: DomNode;

    constructor() {
        super(0, 0);
        let spine: SpineNode;
        this.dom = el(".battle",
            this.content = el(".content",
                el("header",
                    el("a",
                        el("img", { src: "/images/battle/back.png", alt: "back" }),
                    ),
                ),
                el("main",
                    el(".player-container",
                        el(".profile",
                            el("img", { src: "" }),
                        ),
                        el(".clone-container",
                            el(".clone-slot",
                                el(".profile",
                                    el("img", { src: "" }),
                                ),
                                el(".hpbar-container",
                                    el(".bar"),
                                ),
                            ),
                        ),
                        el(".skill-container",
                            el("")
                        ),
                    ),
                    el(".battle-container",
                        el("header",
                            el(".name", "0x53..B5S1"),
                            el("img", { src: "/images/battle/VS.png", alt: "alt" }),
                            el(".name", "CLONESNEVER"),
                        ),
                        el("main",
                            el(".top-container",
                                el(".slot-container",
                                    el(".clone-slot",
                                        el(".profile",
                                            el("img", { src: "" }),
                                        ),
                                        el(".hpbar-container",
                                            el(".bar"),
                                        ),
                                    ),
                                    el(".large-clone-slot",
                                        el(".profile",
                                            el("img", { src: "" }),
                                        ),
                                        el(".hpbar-container",
                                            el(".bar"),
                                        ),
                                    ),
                                ),
                                el(".image-container",
                                    el("img", { src: "", alt: "battle" }),
                                ),
                                el(".slot-container",
                                    el(".clone-slot",
                                        el(".big-profile",
                                            el("img", { src: "" }),
                                        ),
                                        el(".hpbar-container",
                                            el(".bar"),
                                        ),
                                    ),
                                    el(".clone-slot",
                                        el(".profile",
                                            el("img", { src: "" }),
                                        ),
                                        el(".hpbar-container",
                                            el(".bar"),
                                        ),
                                    ),
                                ),
                            ),
                            el(".clone-container",
                                el(".sub-container",
                                    el(".slot-container",
                                        el(".clone-slot",
                                            el(".profile",
                                                el("img", { src: "" }),
                                            ),
                                            el(".hpbar-container",
                                                el(".bar"),
                                            ),
                                        ),
                                        el(".clone-slot",
                                            el(".profile",
                                                el("img", { src: "" }),
                                            ),
                                            el(".hpbar-container",
                                                el(".bar"),
                                            ),
                                        ),
                                        el(".clone-slot",
                                            el(".profile",
                                                el("img", { src: "" }),
                                            ),
                                            el(".hpbar-container",
                                                el(".bar"),
                                            ),
                                        ),
                                        el(".clone-slot",
                                            el(".profile",
                                                el("img", { src: "" }),
                                            ),
                                            el(".hpbar-container",
                                                el(".bar"),
                                            ),
                                        ),
                                    ),
                                    el(".property-container",
                                        el(".image-container",
                                            el("img", { src: "/images/ui/aqua.png", alt: "aqua" }),
                                        ),
                                        el(".image-container",
                                            el("img", { src: "/images/ui/aqua.png", alt: "aqua" }),
                                        ),
                                        el(".image-container",
                                            el("img", { src: "/images/ui/aqua.png", alt: "aqua" }),
                                        ),
                                    ),
                                ),
                                el(".log-container",
                                    el("p", "Player One Take Damage!"),
                                ),
                                el(".sub-container",
                                    el(".slot-container",
                                        el(".clone-slot",
                                            el(".profile",
                                                el("img", { src: "" }),
                                            ),
                                            el(".hpbar-container",
                                                el(".bar"),
                                            ),
                                        ),
                                        el(".clone-slot",
                                            el(".profile",
                                                el("img", { src: "" }),
                                            ),
                                            el(".hpbar-container",
                                                el(".bar"),
                                            ),
                                        ),
                                        el(".clone-slot",
                                            el(".profile",
                                                el("img", { src: "" }),
                                            ),
                                            el(".hpbar-container",
                                                el(".bar"),
                                            ),
                                        ),
                                        el(".clone-slot",
                                            el(".profile",
                                                el("img", { src: "" }),
                                            ),
                                            el(".hpbar-container",
                                                el(".bar"),
                                            ),
                                        ),
                                    ),
                                    el(".property-container",
                                        el(".image-container",
                                            el("img", { src: "/images/ui/aqua.png", alt: "aqua" }),
                                        ),
                                        el(".image-container",
                                            el("img", { src: "/images/ui/aqua.png", alt: "aqua" }),
                                        ),
                                        el(".image-container",
                                            el("img", { src: "/images/ui/aqua.png", alt: "aqua" }),
                                        ),
                                    ),
                                ),
                            ),
                        ),
                    ),
                    el(".enemy-container",
                        el(".profile",
                            el("img", { src: "" }),
                        ),
                    ),
                ),
            ),
        );
        this.append(
            new ImageNode(0, 0, "/images/battle/battlefield.png"),
            spine = new SpineNode(0, 0, {
                json: "/images/battle/battle.json",
                atlas: "/images/battle/battle.atlas",
                png: "/images/battle/battle.png",
                animation: "animation",
            }),
        );
        spine.on("load", () => {
            new Delay(this, () => {
                spine.fadeOut(0.002, () => {
                    spine.delete();
                });
                this.append(this.popup = new BattlePopup());
                this.popup.fadeIn(0.002);
            }, 1000);
        });
    }
}
