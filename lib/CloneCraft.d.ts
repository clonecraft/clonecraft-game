import { BigNumber } from "ethers";
import { Fullscreen } from "skydapp-browser";
import { EventContainer } from "skydapp-common";
import DiscordUserInfo from "./datamodel/DiscordUserInfo";
import ItemBalance from "./datamodel/ItemBalance";
import TeamInfo from "./datamodel/TeamInfo";
import UniqueItem from "./datamodel/UniqueItem";
declare class CloneCraft extends EventContainer {
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
    itemBalances: ItemBalance[];
    team: TeamInfo;
    start(): void;
    checkDiscordLogin(): Promise<boolean>;
    loadAll(): Promise<void>;
    loadAmber(): Promise<void>;
    goBattle(): void;
    goWorld(): void;
    saveTeam(): Promise<void>;
    buyItem(itemId: number): Promise<void>;
    removeCloneFromTeam(cloneId: string): void;
    checkCloneIsInTeam(cloneId: string): boolean;
    testCNDV3Mint(): Promise<void>;
}
declare const _default: CloneCraft;
export default _default;
//# sourceMappingURL=CloneCraft.d.ts.map