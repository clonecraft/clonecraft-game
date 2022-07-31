import { utils } from "ethers";
import { DomNode, el, FixedNode } from "skydapp-browser";
import CloneCraft from "../CloneCraft";
import Alert from "./Alert";

export default class BuyPopup extends FixedNode {

    public content: DomNode;

    constructor(asset: {
        id: number,
        name: string,
        image: string,
        price: number,
    }) {
        super(0, 0);
        this.dom = el(".popup-background",
            this.content = el(".buy-popup",
                el(".content",
                    el("h6", asset.name),
                    el(".image-container",
                        el("img", { src: asset.image, alt: "amber" }),
                    ),
                    el(".text-container",
                        el("p", "Description CxNxD Item"),
                    ),
                ),
                el(".button-container",
                    el("a", "CLOSE", {
                        click: () => this.delete(),
                    }),
                    el("a.buy",
                        el("p", "BUY"),
                        el(".amber-container",
                            el("p.price", String(asset.price)),
                            el("img", { src: "/images/ui/amber.png", alt: "amber" }),
                        ),
                        {
                            click: async () => {
                                if (CloneCraft.currentUserAmber.lt(utils.parseEther(String(asset.price)))) {
                                    new Alert("오류", "앰버가 부족합니다.").appendTo(CloneCraft.screen.root);
                                } else {
                                    await CloneCraft.buyItem(asset.id);
                                    await CloneCraft.loadAmber();
                                    this.delete();
                                    new Alert("구매 완료", `${asset.name}을/를 구매했습니다.`).appendTo(CloneCraft.screen.root);
                                }
                            },
                        },
                    ),
                ),
            ),
        );
    }
}
