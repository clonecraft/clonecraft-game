import { DomNode, el, FixedNode } from "skydapp-browser";
import CloneCraft from "../CloneCraft";
import UnitStatusPopup from "./UnitStatusPopup";

export default class TeamPopup extends FixedNode {

    public content: DomNode;
    private characterList: DomNode;

    constructor() {
        super(0, 0);
        this.dom = el(".popup-background",
            this.content = el(".team-popup",
                el(".top",
                    el(""),
                    el("h6", "MY TEAM"),
                    el("a.close-button",
                        el("img", { src: "/images/ui/close-button.png" }),
                        { click: () => this.delete() },
                    )
                ),
                el(".content",
                    el(".my-panel",
                        el(".slot-container",
                            el(".my-container",
                                el(".preset-container",
                                    el("a", "PRESET 1"),
                                    el("a", "PRESET 2"),
                                    el("a", "PRESET 3"),
                                ),
                                el(".slot-container",
                                    el(".character-container",
                                        el(".property",
                                            el("img", { src: "/images/ui/aura.png", alt: "aura" }),
                                            el("p", "3"),
                                        ),
                                        el(".character-line",
                                            el("img", { src: "/images/character/character1.jpeg", alt: "character" }),
                                            el("img", { src: "/images/character/character2.jpeg", alt: "character" }),
                                            el("img", { src: "/images/character/character1.jpeg", alt: "character" }),
                                        ),
                                    ),
                                    el(".character-container",
                                        el(".property",
                                            el("img", { src: "/images/ui/aqua.png", alt: "aqua" }),
                                            el("p", "2"),
                                        ),
                                        el(".character-line",
                                            el("img", { src: "/images/character/character1.jpeg", alt: "character" }),
                                            el("img", { src: "/images/character/character2.jpeg", alt: "character" }),
                                            el("img", { src: "/images/character/character1.jpeg", alt: "character" }),
                                        ),
                                    ),
                                    el(".character-container",
                                        el(".property",
                                            el("img", { src: "/images/ui/ignis.png", alt: "ignis" }),
                                            el("p", "3"),
                                        ),
                                        el(".character-line",
                                            el("img", { src: "/images/character/character1.jpeg", alt: "character" }),
                                            el("img", { src: "/images/character/character2.jpeg", alt: "character" }),
                                            el("img", { src: "/images/character/unit-slot.png", alt: "unit-slot" }),
                                        ),
                                    ),
                                ),
                            ),
                            el(".info-container",
                                el(".profile-wrap"),
                                el(".content",
                                    el("h6", "PATIMA"),
                                    el(".effect-container",
                                        el("p", "Increase Damage + 10%"),
                                        el("p", "Decrease enemy damage - 15%"),
                                    ),
                                ),
                            ),
                        ),
                    ),
                    el(".collection-container",
                        this.characterList = el(".character-container"),
                        el(".check-container",
                            el(".checkbox-container",
                                el("input", { type: "checkbox" }),
                                el("label", "GRADE"),
                            ),
                            el(".checkbox-container",
                                el("input", { type: "checkbox" }),
                                el("label", "AMOUNT"),
                            ),
                        ),
                        el(".button-container",
                            el("a", "ALL"),
                            el("a", "FAIRY"),
                        ),
                    ),
                )
            ),
        );
        this.load();
    }

    private async load() {
        const clones = await CloneCraft.loadAllClones();
        this.characterList.empty();
        for (const clone of clones) {
            this.characterList.append(
                el("a", el("img", { src: "/images/character/character1.jpeg", alt: "character" }), {
                    click: () => {
                        new UnitStatusPopup().appendTo(CloneCraft.screen.root);
                    },
                }),
            );
        }
    }
}
