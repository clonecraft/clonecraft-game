"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const skydapp_common_1 = require("skydapp-common");
const CloneCraft_1 = __importDefault(require("../CloneCraft"));
const Config_1 = __importDefault(require("../Config"));
const UnitStatusPopup_1 = __importDefault(require("./UnitStatusPopup"));
class TeamPopup extends skydapp_browser_1.FixedNode {
    constructor() {
        super(0, 0);
        this.dom = (0, skydapp_browser_1.el)(".popup-background", this.content = (0, skydapp_browser_1.el)(".team-popup", (0, skydapp_browser_1.el)(".top", (0, skydapp_browser_1.el)(""), (0, skydapp_browser_1.el)("h6", "MY TEAM"), (0, skydapp_browser_1.el)("a.close-button", (0, skydapp_browser_1.el)("img", { src: "/images/ui/close-button.png" }), { click: () => this.delete() })), (0, skydapp_browser_1.el)(".content", (0, skydapp_browser_1.el)(".my-panel", (0, skydapp_browser_1.el)(".slot-container", (0, skydapp_browser_1.el)(".my-container", (0, skydapp_browser_1.el)(".preset-container", (0, skydapp_browser_1.el)("a", "PRESET 1"), (0, skydapp_browser_1.el)("a", "PRESET 2"), (0, skydapp_browser_1.el)("a", "PRESET 3")), this.teamContainer = (0, skydapp_browser_1.el)(".team-container")), (0, skydapp_browser_1.el)(".info-container", (0, skydapp_browser_1.el)(".profile-wrap"), (0, skydapp_browser_1.el)(".content", (0, skydapp_browser_1.el)("h6", "PATIMA"), (0, skydapp_browser_1.el)(".effect-container", (0, skydapp_browser_1.el)("p", "Increase Damage + 10%"), (0, skydapp_browser_1.el)("p", "Decrease enemy damage - 15%")))))), (0, skydapp_browser_1.el)(".collection-container", this.characterList = (0, skydapp_browser_1.el)(".character-container", {
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
                    CloneCraft_1.default.removeCloneFromTeam(this.draggingCloneId);
                    await CloneCraft_1.default.saveTeam();
                    this.loadClones();
                }
            },
        }), (0, skydapp_browser_1.el)(".check-container", (0, skydapp_browser_1.el)(".checkbox-container", (0, skydapp_browser_1.el)("input", { type: "checkbox" }), (0, skydapp_browser_1.el)("label", "GRADE")), (0, skydapp_browser_1.el)(".checkbox-container", (0, skydapp_browser_1.el)("input", { type: "checkbox" }), (0, skydapp_browser_1.el)("label", "AMOUNT"))), (0, skydapp_browser_1.el)(".button-container", (0, skydapp_browser_1.el)("a", "ALL"), (0, skydapp_browser_1.el)("a", "FAIRY"))))));
        this.loadClones();
    }
    loadClones() {
        this.teamContainer.empty();
        skydapp_common_1.SkyUtil.repeat(3, (teamIndex) => {
            let teamClones = CloneCraft_1.default.team.units[teamIndex];
            if (teamClones === undefined) {
                teamClones = [];
            }
            const teamInfo = (0, skydapp_browser_1.el)(".team-info", (0, skydapp_browser_1.el)(".property", (0, skydapp_browser_1.el)("img", { src: "/images/ui/aura.png", alt: "aura" }), (0, skydapp_browser_1.el)("p", "3"))).appendTo(this.teamContainer);
            const slotContainer = (0, skydapp_browser_1.el)(".slot-container").appendTo(teamInfo);
            skydapp_common_1.SkyUtil.repeat(3, (unitIndex) => {
                const clone = teamClones[unitIndex];
                const slot = (0, skydapp_browser_1.el)(".slot", {
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
                            CloneCraft_1.default.removeCloneFromTeam(this.draggingCloneId);
                            for (let i = CloneCraft_1.default.team.units.length; i < 3; i += 1) {
                                CloneCraft_1.default.team.units.push([]);
                            }
                            const team = CloneCraft_1.default.team.units[teamIndex];
                            team[unitIndex] = {
                                collection: Config_1.default.CND_V3_ID,
                                tokenId: this.draggingCloneId,
                            };
                            await CloneCraft_1.default.saveTeam();
                            this.loadClones();
                        }
                    },
                }).appendTo(slotContainer);
                if (clone !== undefined && clone !== null) {
                    const cloneDom = (0, skydapp_browser_1.el)("a", (0, skydapp_browser_1.el)("img", { src: "/images/character/character1.jpeg", alt: "character" }), {
                        click: () => {
                            new UnitStatusPopup_1.default().appendTo(CloneCraft_1.default.screen.root);
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
        for (const clone of CloneCraft_1.default.clones) {
            if (CloneCraft_1.default.checkCloneIsInTeam(clone.id) !== true) {
                const cloneDom = (0, skydapp_browser_1.el)("a", (0, skydapp_browser_1.el)("img", { src: "/images/character/character1.jpeg", alt: "character" }), {
                    click: () => {
                        new UnitStatusPopup_1.default().appendTo(CloneCraft_1.default.screen.root);
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
exports.default = TeamPopup;
//# sourceMappingURL=TeamPopup.js.map