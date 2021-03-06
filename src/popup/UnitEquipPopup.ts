import { DomNode, el, FixedNode } from "skydapp-browser";

export default class UnitEquipPopup extends FixedNode {

    public content: DomNode;

    constructor() {
        super(0, 0);
        this.dom = el(".popup-background",
            this.content = el(".unit-equip-popup",
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
                        el(".tab-container",
                            el("a", "STATUS"),
                            el("a", "EQUIP"),
                        ),
                    ),
                    el(".equip-container",
                        el(".tab-container",
                            el("a", "BACKGROUND"),
                            el("a", "SITUATION"),
                            el("a", "WEAPON"),
                            el("a", "BODY"),
                            el("a", "TATTO"),
                            el("a", "MOUTH"),
                            el("a", "EYES"),
                            el("a", "CLOTHES"),
                            el("a", "HAT"),
                            el("a", "ACCESSORY"),
                            el("a", "MASK"),
                            el("a", "EFFECT"),
                        ),
                        el("section",
                            el(".item",
                                el("img", { src: "/images/profile-image-sample.png", alt: "items" }),
                                el("a", "INFO"),
                            ),
                            el(".item",
                                el("img", { src: "/images/profile-image-sample.png", alt: "items" }),
                                el("a", "INFO"),
                            ),
                        ),
                    ),
                ),
            ),
        );
    }
}
