import { el, GameNode } from "skydapp-browser";

export default class UserInfoPanel extends GameNode {
  public width = 400;
  public height = 100;

  constructor() {
    super(0, 0);
    this.dom = el(
      ".user-info-panel",
      el(".profile-image"),
      el(".info-container", el("h6", "Clonesneverdie")/*, el("p", "lv.3")*/)
    );
    this.dom.style({ width: this.width, height: this.height });
  }
}
