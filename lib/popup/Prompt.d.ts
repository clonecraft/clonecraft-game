import { DomNode, FixedNode } from "skydapp-browser";
export default class Prompt extends FixedNode {
    content: DomNode;
    private input;
    constructor(title: string, message: string, confirmTitle: string, confirm: (value: string) => void, placeholder?: string);
}
//# sourceMappingURL=Prompt.d.ts.map