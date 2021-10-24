import { BaseNode } from "./BaseNode";
import { Type } from "./Type";
import { Value } from "./Value";
import { Decorator } from "./Decorator";
export declare class Property extends BaseNode {
    name: string;
    type: Type;
    comment?: string;
    decorators?: Decorator[];
    defaultValue?: Value;
    getDefaultValueString(): string;
    toString(): string;
}
//# sourceMappingURL=Property.d.ts.map