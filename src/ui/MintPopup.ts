import { DomNode, el, FixedNode } from "skydapp-browser";

export default class MintPopup extends FixedNode {

    public content: DomNode;

    constructor() {
        super(0, 0);
        this.dom = el(".popup-background",
            this.content = el(".mint-popup",
                el(".info-container",
                    el("h5", "INFO"),
                    el("p", "CxNxD Omega는 Nectar War 게임에 사용되는 NFT입니다. 민팅 가격은 1개에 2 klay 입니다."),
                    el("p", "하루에 총 1000개 민팅이 가능하며 지갑당 하루에 9개 민팅 가능합니다. CxNxD Omega는 민팅시 스킬을 랜덤으로 부여받습니다."),
                    el("p", "또한 CxNxD Asset NFT를 활용하여 CxNxD Omega의 의상을 바꿀 수 있습니다."),
                ),
                el(".mint-container",
                    el(".content",
                        el("h5", "CXNXD OMEGA CLONE MINT"),
                        el("p", "MY KLAY: 100"),
                        el("p", "TODAY MY MINT AVAILABLE NUMBER: 100"),
                        el("p", "TODAY TOTAL MINT AVAILBLE NUMBER: 100"),
                        el("input", { placeholder: "Mint Amount" }),
                    ),
                    el("a", "MINT"),
                ),
            ),
        );
    }
}