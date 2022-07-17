import { DomNode, el, FixedNode } from "skydapp-browser";

export default class UnitStatusPopup extends FixedNode {

    public content: DomNode;

    constructor() {
        super(0, 0);
        this.dom = el(".popup-background",
            this.content = el(".unit-status-popup",
                el(".top",
                    el(""),
                    el("h6", "Clone Information"),
                    el("a.close-button",
                        el("img", { src: "/images/ui/close-button.png" }),
                        { click: () => this.delete() },
                    )
                ),
                el(".content",
                    el(".character-container",
                        el("img.character", { src: "/images/character/character1.jpeg" }),
                        el(".slot-container",
                            el("img.slot", { src: "/images/character/unit-slot.png", alt: "unit-slot" }),
                            el("img.slot", { src: "/images/character/unit-slot.png", alt: "unit-slot" }),
                            el("img.slot", { src: "/images/character/unit-slot.png", alt: "unit-slot" }),
                            el("img.slot", { src: "/images/character/unit-slot.png", alt: "unit-slot" }),
                            el("img.slot", { src: "/images/character/unit-slot.png", alt: "unit-slot" }),
                            el("img.slot", { src: "/images/character/unit-slot.png", alt: "unit-slot" }),
                            el("img.slot", { src: "/images/character/unit-slot.png", alt: "unit-slot" }),
                            el("img.slot", { src: "/images/character/unit-slot.png", alt: "unit-slot" }),
                            el("img.slot", { src: "/images/character/unit-slot.png", alt: "unit-slot" }),
                            el("img.slot", { src: "/images/character/unit-slot.png", alt: "unit-slot" }),
                            el("img.slot", { src: "/images/character/unit-slot.png", alt: "unit-slot" }),
                            el("img.slot", { src: "/images/character/unit-slot.png", alt: "unit-slot" }),
                        ),
                        el("a", "COMPOSITE"),
                    ),
                    el(".status-container",
                        el("section",
                            el("h6", "status"),
                            el(".content",
                                el(".bar-container",
                                    el("p", "ATTACK"),
                                    el(".bar-wrap",
                                        el("label", "999"),
                                        el(".bar"),
                                    ),
                                ),
                                el(".bar-container",
                                    el("p", "DURATION"),
                                    el(".bar-wrap",
                                        el("label", "999"),
                                        el(".bar"),
                                    ),
                                ),
                                el(".bar-container",
                                    el("p", "ATTACK SPD"),
                                    el(".bar-wrap",
                                        el("label", "999"),
                                        el(".bar"),
                                    ),
                                ),
                                el(".bar-container",
                                    el("p", "LUCK"),
                                    el(".bar-wrap",
                                        el("label", "999"),
                                        el(".bar"),
                                    ),
                                ),
                                el(".bar-container",
                                    el("p", "EVADE"),
                                    el(".bar-wrap",
                                        el("label", "999"),
                                        el(".bar"),
                                    ),
                                ),
                                el(".bar-container",
                                    el("p", "HITRATE"),
                                    el(".bar-wrap",
                                        el("label", "999"),
                                        el(".bar"),
                                    ),
                                ),
                            ),
                        ),
                        el("hr"),
                        el("section",
                            el("h6", "attribute"),
                            el(".content",
                                el(".bar-container",
                                    el(".img-wrap",
                                        el("img", { src: "/images/ui/devine.png", alt: "devine" }),
                                    ),
                                    el(".bar-wrap",
                                        el("label", "999"),
                                        el(".bar"),
                                    ),
                                ),
                                el(".bar-container",
                                    el(".img-wrap",
                                        el("img", { src: "/images/ui/diaboli.png", alt: "diaboli" }),
                                    ),
                                    el(".bar-wrap",
                                        el("label", "999"),
                                        el(".bar"),
                                    ),
                                ),
                                el(".bar-container",
                                    el(".img-wrap",
                                        el("img", { src: "/images/ui/ignis.png", alt: "ignis" }),
                                    ),
                                    el(".bar-wrap",
                                        el("label", "999"),
                                        el(".bar"),
                                    ),
                                ),
                                el(".bar-container",
                                    el(".img-wrap",
                                        el("img", { src: "/images/ui/aqua.png", alt: "aqua" }),
                                    ),
                                    el(".bar-wrap",
                                        el("label", "999"),
                                        el(".bar"),
                                    ),
                                ),
                                el(".bar-container",
                                    el(".img-wrap",
                                        el("img", { src: "/images/ui/aura.png", alt: "aura" }),
                                    ),
                                    el(".bar-wrap",
                                        el("label", "999"),
                                        el(".bar"),
                                    ),
                                ),
                                el(".bar-container",
                                    el(".img-wrap",
                                        el("img", { src: "/images/ui/terra.png", alt: "terra" }),
                                    ),
                                    el(".bar-wrap",
                                        el("label", "999"),
                                        el(".bar"),
                                    ),
                                ),
                            ),
                        ),
                        el("hr"),
                        el("section",
                            el("h6", "skill"),
                            el(".skill-content",
                                el("img", { src: "/images/ui/nighting-skill.png", alt: "nighting-skill" }),
                                el("img", { src: "/images/ui/passacaglia-skill.png", alt: "passacaglia-skill" }),
                                el("img", { src: "/images/ui/sylvia-skill.png", alt: "sylvia-skill" }),
                            ),
                        ),
                    ),
                ),
            ),
        );
    }
}