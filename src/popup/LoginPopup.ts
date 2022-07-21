import { DomNode, el, FixedNode } from "skydapp-browser";
import Config from "../Config";

export default class LoginPopup extends FixedNode {

    public content: DomNode;

    constructor() {
        super(0, 0);
        this.dom = el(".popup-background",
            this.content = el(".login-popup",
                el(".top",
                    el("h5", "WELCOME"),
                    el("h6", "DISCORD LOGIN IS REQUIRED TO ENTER CLONE CRAFT"),
                ),
                el(".content",
                    el("a",
                        el("img", { src: "/images/icn/discord-white.svg", alt: "discord" }),
                        el("p", "LOGIN WITH DISCORD"),
                        {
                            href: `https://discord.com/api/oauth2/authorize?client_id=${Config.applicationId}&redirect_uri=${encodeURIComponent(`${window.location.protocol}//${window.location.host}`)}&response_type=code&scope=identify`,
                        },
                    ),
                ),
                el(".bottom",
                    el("a", "CONTINUE"),
                ),
            ),
        );
    }
}
