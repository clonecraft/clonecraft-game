import { Fullscreen } from "skydapp-browser";
import DiscordUserInfo from "./datamodel/DiscordUserInfo";
declare class CloneCraft {
    private codeStore;
    screen: Fullscreen;
    private client;
    private firstConnectingPopup;
    private world;
    private reconnectingPopup;
    currentUserInfo: DiscordUserInfo | undefined;
    start(): void;
    checkDiscordLogin(): Promise<boolean>;
    testCNDV3Mint(): Promise<any>;
    loadAllClones(): Promise<any>;
}
declare const _default: CloneCraft;
export default _default;
//# sourceMappingURL=CloneCraft.d.ts.map