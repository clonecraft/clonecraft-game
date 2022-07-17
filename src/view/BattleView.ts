import { View, ViewParams } from "skydapp-common";
import Battle from "../gamenode/Battle";
import WorldManager from "../WorldManager";

export default class BattleView implements View {

    public battle: Battle;

    constructor() {
        WorldManager.screen.root.append(
            this.battle = new Battle(),
        );
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.battle.delete();
    }
}
