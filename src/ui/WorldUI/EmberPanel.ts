import { utils } from "ethers";
import { DomNode, el, GameNode } from "skydapp-browser";
import { SkyUtil } from "skydapp-common";
import CloneCraft from "../../CloneCraft";

export default class EmberPanel extends GameNode {

    public width = 278;
    public height = 70;

    private amberDisplay: DomNode;

    constructor() {
        super(0, 0);
        this.dom = el(".ember-panel",
            el("a", "받기", { href: "https://amber-faucet.clonecraft.co.kr/" }),
            this.amberDisplay = el("p", SkyUtil.numberWithCommas(utils.formatEther(CloneCraft.currentUserAmber))),
        );
        this.dom.style({ width: this.width, height: this.height });
        CloneCraft.on("changeAmber", this.changeAmberHandler);
    }

    private changeAmberHandler = () => {
        this.amberDisplay.empty().appendText(SkyUtil.numberWithCommas(utils.formatEther(CloneCraft.currentUserAmber)));
    };

    public delete() {
        CloneCraft.off("changeAmber", this.changeAmberHandler);
        super.delete();
    }
}
