import { DomNode, el, FixedNode } from "skydapp-browser";
import { SkyUtil } from "skydapp-common";
import CloneCraft from "../CloneCraft";
import UnitStatusPopup from "./UnitStatusPopup";

export default class TeamPopup extends FixedNode {

    public content: DomNode;

    private teamContainer: DomNode;
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
                                this.teamContainer = el(".team-container"),
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

        SkyUtil.repeat(3, (team) => {
            const teamInfo = el(".team-info",
                el(".property",
                    el("img", { src: "/images/ui/aura.png", alt: "aura" }),
                    el("p", "3"),
                ),
            ).appendTo(this.teamContainer);
            const slotContainer = el(".slot-container").appendTo(teamInfo);
            SkyUtil.repeat(3, (index) => {
                el(".slot", {
                    dragenter: (event) => {
                        console.log("dragenter");
                        event.preventDefault();
                    },
                    dragover: (event) => {
                        console.log("dragover");
                        event.preventDefault();
                    },
                    dragleave: () => {
                        console.log("dragleave");
                    },
                    drop: () => {
                        console.log("drop");
                    },
                }).appendTo(slotContainer);
            });
        });
    }

    private async load() {
        const clones = await CloneCraft.loadAllClones();
        this.characterList.empty();
        for (const clone of clones) {
            const cloneDom = el("a", el("img", { src: "/images/character/character1.jpeg", alt: "character" }), {
                click: () => {
                    new UnitStatusPopup().appendTo(CloneCraft.screen.root);
                },
            }).appendTo(this.characterList);
            cloneDom.domElement.draggable = true;
            cloneDom.onDom("drag", () => {
                console.log("drag");
            });
            cloneDom.onDom("dragend", () => {
                console.log("dragend");
            });
        }
    }
}
