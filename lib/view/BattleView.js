"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Battle_1 = __importDefault(require("../gamenode/Battle"));
const CloneCraft_1 = __importDefault(require("../CloneCraft"));
class BattleView {
    constructor() {
        CloneCraft_1.default.screen.root.append(this.battle = new Battle_1.default());
    }
    changeParams(params, uri) { }
    close() {
        this.battle.delete();
    }
}
exports.default = BattleView;
//# sourceMappingURL=BattleView.js.map