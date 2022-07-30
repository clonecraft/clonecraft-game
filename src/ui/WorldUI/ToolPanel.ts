import { el, GameNode } from "skydapp-browser";
import CloneCraft from "../../CloneCraft";
import MintPopup from "../../popup/MintPopup";
import RankingPopup from "../../popup/RankingPopup";
import ShopPopup from "../../popup/ShopPopup";
import TeamPopup from "../../popup/TeamPopup";

export default class ToolPanel extends GameNode {

    public width = 100 * 5;
    public height = 126;

    constructor() {
        super(0, 0);
        this.dom = el(".tool-panel",
            el("a.mint", {
                click: () => {
                    new MintPopup().appendTo(CloneCraft.screen.root);
                },
            }),
            el("a.team", {
                click: () => {
                    new TeamPopup().appendTo(CloneCraft.screen.root);
                },
            }),
            el("a.shop", {
                click: () => {
                    new ShopPopup().appendTo(CloneCraft.screen.root);
                },
            }),
            el("a.explore"),
            el("a.stage", {
                click: () => {
                    new RankingPopup().appendTo(CloneCraft.screen.root);
                },
            }),
        );
        this.dom.style({ width: this.width, height: this.height });
    }
}
