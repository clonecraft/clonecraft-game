import { el, GameNode } from "skydapp-browser";
import { SkyRouter } from "skydapp-common";
import BattlePopup from "../../popup/BattlePopup";

export default class BattleButton extends GameNode {

    public width = 122;
    public height = 126;

    constructor() {
        super(0, 0);
        this.dom = el("a.battle-button", {
            click: () => {
                SkyRouter.go("/battle");
            },
        });
        this.dom.style({ width: this.width, height: this.height });
    }
}
