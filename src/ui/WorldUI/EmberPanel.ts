import { utils } from "ethers";
import { el, GameNode } from "skydapp-browser";
import { SkyUtil } from "skydapp-common";
import CloneCraft from "../../CloneCraft";

export default class EmberPanel extends GameNode {

    public width = 278;
    public height = 70;

    constructor() {
        super(0, 0);
        this.dom = el(".ember-panel",
            el("p", SkyUtil.numberWithCommas(utils.formatEther(CloneCraft.currentUserAmber))),
        );
        this.dom.style({ width: this.width, height: this.height });
    }
}
