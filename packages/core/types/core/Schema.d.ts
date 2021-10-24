import { BaseNode } from "./BaseNode";
import { Type } from "./Type";
import { DefGeneric } from "./DefGeneric";
import { Property } from "./Property";
export declare class Schema extends BaseNode {
    name: string;
    comment?: string;
    extends?: Type;
    defGeneric?: DefGeneric[];
    properties: Property[];
    getExtendsString(): string;
    getPropGenericString(): string;
    toString(): string;
}
//# sourceMappingURL=Schema.d.ts.map