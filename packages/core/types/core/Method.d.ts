import { URL } from "@restdk/shared";
import { Param } from "./Param";
import { Return } from "./Return";
export declare class Method {
    name: string;
    url: URL;
    requestMethod: RequestMethod;
    params?: Param[];
    returns?: Return[];
    getParamMap(): {
        param: any[];
        query: any[];
        body: any[];
    };
    getArgsString(): string;
    getRetTypeString(): string;
    toString(): string;
    static create(props: Partial<Method>): any;
}
export declare enum RequestMethod {
    GET = "GET",
    POST = "POST",
    DELETE = "DELETE",
    PUT = "PUT",
    PATCH = "PATCH"
}
//# sourceMappingURL=Method.d.ts.map