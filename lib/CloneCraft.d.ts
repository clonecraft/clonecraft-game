import { BigNumber } from "ethers";
import { Fullscreen } from "skydapp-browser";
import DiscordUserInfo from "./datamodel/DiscordUserInfo";
import TeamInfo from "./datamodel/TeamInfo";
import UniqueItem from "./datamodel/UniqueItem";
declare class CloneCraft {
    private codeStore;
    screen: Fullscreen;
    private client;
    private firstConnectingPopup;
    private world;
    private battle;
    private reconnectingPopup;
    currentUserInfo: DiscordUserInfo | undefined;
    currentUserAmber: BigNumber;
    clones: UniqueItem[];
    team: TeamInfo;
    start(): void;
    checkDiscordLogin(): Promise<boolean>;
    loadAll(): Promise<void>;
    goBattle(): void;
    goWorld(): void;
    saveTeam(): Promise<void>;
    removeCloneFromTeam(cloneId: string): void;
    checkCloneIsInTeam(cloneId: string): boolean;
    testCNDV3Mint(): Promise<void>;
}
declare const _default: CloneCraft;
export default _default;
//# sourceMappingURL=CloneCraft.d.ts.map