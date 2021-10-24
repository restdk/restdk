import { BaseNode } from "./BaseNode";
import { ApiThrow } from "./ApiThrow";
import { ApiResult } from "./ApiResult";
import { ApiArgument } from "./ApiArgument";
export declare enum ApiMethod {
    GET = "Get",
    POST = "Post",
    DEL = "Delete",
    PATCH = "Patch",
    PUT = "Put"
}
export declare class Api extends BaseNode {
    name: string;
    comment: string;
    method: ApiMethod;
    arguments: ApiArgument[];
    results: ApiResult[];
    throws: ApiThrow[];
    getParamMap(): {
        param: any[];
        query: any[];
        body: any[];
    };
    toString(): string;
}
//# sourceMappingURL=Api.d.ts.map