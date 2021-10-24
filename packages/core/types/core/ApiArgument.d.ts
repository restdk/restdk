import { BaseNode } from "./BaseNode";
import { Type } from "./Type";
export declare enum ParamType {
    QUERY = "query",
    BODY = "body",
    PARAM = "param"
}
export declare class ApiArgument extends BaseNode {
    name: string;
    paramType: ParamType;
    defaultValue: string;
    type: Type;
    toString(): string;
}
//# sourceMappingURL=ApiArgument.d.ts.map