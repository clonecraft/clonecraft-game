import { FixedNode, Screen } from "skydapp-browser";
import BattleButton from "./WorldUI/BattleButton";
import EmberPanel from "./WorldUI/EmberPanel";
import ToolPanel from "./WorldUI/ToolPanel";
import UserInfoPanel from "./WorldUI/UserInfoPanel";

export default class WorldUI extends FixedNode {

    private userInfoPanel: UserInfoPanel;
    private battleButton: BattleButton;
    private emberPanel: EmberPanel;
    private toolPanel: ToolPanel;

    constructor() {
        super(0, 0);
        this.append(
            this.userInfoPanel = new UserInfoPanel(),
            this.battleButton = new BattleButton(),
            this.emberPanel = new EmberPanel(),
            this.toolPanel = new ToolPanel(),
        );
    }

    public repositeUI() {
        if (this.screen !== undefined) {
            this.userInfoPanel.move(this.userInfoPanel.width / 2 - this.screen.centerX + 10, this.userInfoPanel.height / 2 - this.screen.centerY + 10);
            this.battleButton.move(this.battleButton.width / 2 - this.screen.centerX + 10, -this.battleButton.height / 2 + this.screen.centerY - 10);
            this.emberPanel.move(-this.emberPanel.width / 2 + this.screen.centerX - 10, this.userInfoPanel.height / 2 - this.screen.centerY + 10);
            this.toolPanel.move(-this.toolPanel.width / 2 + this.screen.centerX - 10, -this.toolPanel.height / 2 + this.screen.centerY - 10);
        }
    }
}
