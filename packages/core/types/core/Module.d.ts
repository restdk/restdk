import { BaseNode } from "./BaseNode";
import { Schema } from "./Schema";
import { Api } from "./Api";
export declare class Module extends BaseNode {
    name: string;
    comment: string;
    parent: string;
    apis: Api[];
    schemas: Schema[];
    toString(): string;
}
//# sourceMappingURL=Module.d.ts.map