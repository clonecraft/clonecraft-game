import { msg } from "skydapp-browser";
import { SkyRouter } from "skydapp-browser";
import superagent from "superagent";
import CloneCraft from "./CloneCraft";

(async () => {
    if (sessionStorage.__spa_path) {
        SkyRouter.go(sessionStorage.__spa_path);
        sessionStorage.removeItem("__spa_path");
    }
    msg.parseCSV((await superagent.get("/msg.csv")).text);
    CloneCraft.start();
})();
