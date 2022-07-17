import { el, GameNode } from "skydapp-browser";
import RankingPopup from "../RankingPopup";
import TeamPopup from "../TeamPopup";

export default class ToolPanel extends GameNode {

    public width = 300;
    public height = 126;

    constructor() {
        super(0, 0);
        this.dom = el(".tool-panel",
            el("a.team", {
                click: () => {
                    if (this.screen !== undefined) {
                        new TeamPopup().appendTo(this.screen.root);
                    }
                },
            }
            ),
            el("a.explore"),
            el("a.stage", {
                click: () => {
                    if (this.screen !== undefined) {
                        new RankingPopup().appendTo(this.screen.root);
                    }
                },
            }),
        );
        this.dom.style({ width: this.width, height: this.height });
    }
}
