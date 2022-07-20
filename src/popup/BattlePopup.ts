import { DomNode, el, FixedNode } from "skydapp-browser";
import { SkyRouter } from "skydapp-common";
import UnitStatusPopup from "./UnitStatusPopup";

export default class BattlePopup extends FixedNode {

    public content: DomNode;

    constructor() {
        super(0, 0);
        this.dom = el(".popup-background",
            this.content = el(".battle-popup",
                el(".top",
                    el(""),
                    el("h6", "BATTLE"),
                    el("a.close-button",
                        el("img", { src: "/images/ui/close-button.png" }),
                        { click: () => SkyRouter.go("/") },
                    )
                ),
                el(".my-panel",
                    el(".profile-image",
                        el("img", { src: "/images/profile-image-sample.png" }),
                    ),
                    el(".units",
                        el(".character",
                            el("img", { src: "/images/character/character1.jpeg" }),
                            {
                                click: () => {
                                    if (this.screen !== undefined) {
                                        new UnitStatusPopup().appendTo(this.screen.root);
                                    }
                                },
                            },
                        ),
                        el(".character",
                            el("img", { src: "/images/character/character2.jpeg" }),
                            {
                                click: () => {
                                    if (this.screen !== undefined) {
                                        new UnitStatusPopup().appendTo(this.screen.root);
                                    }
                                },
                            },
                        ),
                        el(".character",
                            el("img", { src: "/images/character/character1.jpeg" }),
                            {
                                click: () => {
                                    if (this.screen !== undefined) {
                                        new UnitStatusPopup().appendTo(this.screen.root);
                                    }
                                },
                            },
                        ),
                        el(".character",
                            el("img", { src: "/images/character/character2.jpeg" }),
                            {
                                click: () => {
                                    if (this.screen !== undefined) {
                                        new UnitStatusPopup().appendTo(this.screen.root);
                                    }
                                },
                            },
                        ),
                        el(".character",
                            el("img", { src: "/images/character/character1.jpeg" }),
                            {
                                click: () => {
                                    if (this.screen !== undefined) {
                                        new UnitStatusPopup().appendTo(this.screen.root);
                                    }
                                },
                            },
                        ),
                        el(".character",
                            el("img", { src: "/images/character/character2.jpeg" }),
                            {
                                click: () => {
                                    if (this.screen !== undefined) {
                                        new UnitStatusPopup().appendTo(this.screen.root);
                                    }
                                },
                            },
                        ),
                        el(".character",
                            el("img", { src: "/images/character/character1.jpeg" }),
                            {
                                click: () => {
                                    if (this.screen !== undefined) {
                                        new UnitStatusPopup().appendTo(this.screen.root);
                                    }
                                },
                            },
                        ),
                        el(".character",
                            el("img", { src: "/images/character/character2.jpeg" }),
                            {
                                click: () => {
                                    if (this.screen !== undefined) {
                                        new UnitStatusPopup().appendTo(this.screen.root);
                                    }
                                },
                            },
                        ),
                        el(".character",
                            el("img", { src: "/images/character/character1.jpeg" }),
                            {
                                click: () => {
                                    if (this.screen !== undefined) {
                                        new UnitStatusPopup().appendTo(this.screen.root);
                                    }
                                },
                            },
                        ),
                    ),
                    el("a.attack-button",
                        el("img", { src: "/images/ui/attack.png" }),
                    ),
                    el("a.defence-button",
                        el("img", { src: "/images/ui/defence.png" }),
                    ),
                    el(".skills",
                        el("a.skill-button",
                            el("img", { src: "/images/ui/skill1.png" }),
                        ),
                        el("a.skill-button",
                            el("img", { src: "/images/ui/skill2.png" }),
                        ),
                        el("a.skill-button",
                            el("img", { src: "/images/ui/skill3.png" }),
                        ),
                        el("a.skill-button",
                            el("img", { src: "/images/ui/skill4.png" }),
                        ),
                    ),
                ),
                el(".enemy-panel",
                    el(".profile-image",
                        el("img", { src: "/images/profile-image-sample.png" }),
                    ),
                    el(".units",
                        el(".character",
                            el("img", { src: "/images/character/character1.jpeg" }),
                            {
                                click: () => {
                                    if (this.screen !== undefined) {
                                        new UnitStatusPopup().appendTo(this.screen.root);
                                    }
                                },
                            },
                        ),
                        el(".character",
                            el("img", { src: "/images/character/character2.jpeg" }),
                            {
                                click: () => {
                                    if (this.screen !== undefined) {
                                        new UnitStatusPopup().appendTo(this.screen.root);
                                    }
                                },
                            },
                        ),
                        el(".character",
                            el("img", { src: "/images/character/character1.jpeg" }),
                            {
                                click: () => {
                                    if (this.screen !== undefined) {
                                        new UnitStatusPopup().appendTo(this.screen.root);
                                    }
                                },
                            },
                        ),
                        el(".character",
                            el("img", { src: "/images/character/character2.jpeg" }),
                            {
                                click: () => {
                                    if (this.screen !== undefined) {
                                        new UnitStatusPopup().appendTo(this.screen.root);
                                    }
                                },
                            },
                        ),
                        el(".character",
                            el("img", { src: "/images/character/character1.jpeg" }),
                            {
                                click: () => {
                                    if (this.screen !== undefined) {
                                        new UnitStatusPopup().appendTo(this.screen.root);
                                    }
                                },
                            },
                        ),
                        el(".character",
                            el("img", { src: "/images/character/character2.jpeg" }),
                            {
                                click: () => {
                                    if (this.screen !== undefined) {
                                        new UnitStatusPopup().appendTo(this.screen.root);
                                    }
                                },
                            },
                        ),
                        el(".character",
                            el("img", { src: "/images/character/character1.jpeg" }),
                            {
                                click: () => {
                                    if (this.screen !== undefined) {
                                        new UnitStatusPopup().appendTo(this.screen.root);
                                    }
                                },
                            },
                        ),
                        el(".character",
                            el("img", { src: "/images/character/character2.jpeg" }),
                            {
                                click: () => {
                                    if (this.screen !== undefined) {
                                        new UnitStatusPopup().appendTo(this.screen.root);
                                    }
                                },
                            },
                        ),
                        el(".character",
                            el("img", { src: "/images/character/character1.jpeg" }),
                            {
                                click: () => {
                                    if (this.screen !== undefined) {
                                        new UnitStatusPopup().appendTo(this.screen.root);
                                    }
                                },
                            },
                        ),
                    ),
                    el("a.attack-button",
                        el("img", { src: "/images/ui/attack.png" }),
                    ),
                    el("a.defence-button",
                        el("img", { src: "/images/ui/defence.png" }),
                    ),
                    el(".skills",
                        el("a.skill-button",
                            el("img", { src: "/images/ui/skill1.png" }),
                        ),
                        el("a.skill-button",
                            el("img", { src: "/images/ui/skill2.png" }),
                        ),
                        el("a.skill-button",
                            el("img", { src: "/images/ui/skill3.png" }),
                        ),
                        el("a.skill-button",
                            el("img", { src: "/images/ui/skill4.png" }),
                        ),
                    ),
                ),
            ),
        );
    }
}
