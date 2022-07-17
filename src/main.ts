import { BrowserInfo, msg } from "skydapp-browser";
import { SkyRouter } from "skydapp-common";
import superagent from "superagent";
import BattleView from "./view/BattleView";
import WorldView from "./view/WorldView";

(async () => {
    msg.language = BrowserInfo.language;
    msg.parseCSV((await superagent.get("/msg.csv")).text);

    if (sessionStorage.__spa_path) {
        SkyRouter.go(sessionStorage.__spa_path);
        sessionStorage.removeItem("__spa_path");
    }

    SkyRouter.route("**", WorldView, ["battle"]);
    SkyRouter.route("battle", BattleView);
})();