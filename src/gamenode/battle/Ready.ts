import { Delay, GameNode, SpineNode } from "skydapp-browser";

export default class Ready extends GameNode {

    constructor() {
        super(0, 0);

        const spine = new SpineNode(0, 0, {
            json: "/images/battle/battle.json",
            atlas: "/images/battle/battle.atlas",
            png: "/images/battle/battle.png",
            animation: "animation",
        }).appendTo(this);

        spine.on("load", () => {
            new Delay(this, () => {
                spine.fadeOut(0.002, () => {
                    spine.delete();
                    this.fireEvent("next");
                });
            }, 1000);
        });
    }
}
