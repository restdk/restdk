import { BaseNode } from "./BaseNode";
import { Type } from "./Type";
export declare class DefGeneric extends BaseNode {
    name: string;
    extends?: Type;
    defaultType?: Type;
    getExtendsString(): string;
    getDefaultTypeString(): string;
    toString(): string;
}
//# sourceMappingURL=DefGeneric.d.ts.map