import { DomNode, el, FixedNode } from "skydapp-browser";
import { SkyUtil } from "skydapp-common";
import CloneCraft from "../CloneCraft";
import Config from "../Config";
import UnitStatusPopup from "./UnitStatusPopup";

export default class TeamPopup extends FixedNode {

    public content: DomNode;

    private teamContainer: DomNode;
    private characterList: DomNode;
    private draggingCloneId: string | undefined;

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
                        this.characterList = el(".character-container", {
                            dragenter: (event) => {
                                event.preventDefault();
                            },
                            dragover: (event) => {
                                event.preventDefault();
                            },
                            dragleave: () => {
                            },
                            drop: async () => {
                                if (this.draggingCloneId !== undefined) {
                                    CloneCraft.removeCloneFromTeam(this.draggingCloneId);
                                    await CloneCraft.saveTeam();
                                    this.loadClones();
                                }
                            },
                        }),
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
        this.loadClones();
    }

    private loadClones() {

        this.teamContainer.empty();

        SkyUtil.repeat(3, (teamIndex) => {

            let teamClones = CloneCraft.team.units[teamIndex];
            if (teamClones === undefined) {
                teamClones = [];
            }

            const teamInfo = el(".team-info",
                el(".property",
                    el("img", { src: "/images/ui/aura.png", alt: "aura" }),
                    el("p", "3"),
                ),
            ).appendTo(this.teamContainer);

            const slotContainer = el(".slot-container").appendTo(teamInfo);

            SkyUtil.repeat(3, (unitIndex) => {
                const clone = teamClones[unitIndex];
                const slot = el(".slot", {
                    dragenter: (event) => {
                        event.preventDefault();
                    },
                    dragover: (event) => {
                        event.preventDefault();
                    },
                    dragleave: () => {
                    },
                    drop: async () => {
                        if (this.draggingCloneId !== undefined) {
                            CloneCraft.removeCloneFromTeam(this.draggingCloneId);

                            for (let i = CloneCraft.team.units.length; i < 3; i += 1) {
                                CloneCraft.team.units.push([]);
                            }

                            const team = CloneCraft.team.units[teamIndex];
                            team[unitIndex] = {
                                collection: Config.CND_V3_ID,
                                tokenId: this.draggingCloneId,
                            };

                            await CloneCraft.saveTeam();
                            this.loadClones();
                        }
                    },
                }).appendTo(slotContainer);

                if (clone !== undefined && clone !== null) {
                    const cloneDom = el("a", el("img", { src: "/images/character/character1.jpeg", alt: "character" }), {
                        click: () => {
                            new UnitStatusPopup().appendTo(CloneCraft.screen.root);
                        },
                    }).appendTo(slot);
                    cloneDom.domElement.draggable = true;
                    cloneDom.onDom("dragstart", () => {
                        this.draggingCloneId = clone.tokenId;
                    });
                    cloneDom.onDom("dragend", () => {
                        this.draggingCloneId = undefined;
                    });
                }
            });
        });

        this.characterList.empty();

        for (const clone of CloneCraft.clones) {
            if (CloneCraft.checkCloneIsInTeam(clone.id) !== true) {
                const cloneDom = el("a", el("img", { src: "/images/character/character1.jpeg", alt: "character" }), {
                    click: () => {
                        new UnitStatusPopup().appendTo(CloneCraft.screen.root);
                    },
                }).appendTo(this.characterList);
                cloneDom.domElement.draggable = true;
                cloneDom.onDom("dragstart", () => {
                    this.draggingCloneId = clone.id;
                });
                cloneDom.onDom("dragend", () => {
                    this.draggingCloneId = undefined;
                });
            }
        }
    }
}
