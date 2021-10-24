export declare class Param {
    type: string;
    name: string;
    paramType?: ParamType;
    toString(): string;
    static create(props: Partial<Param>): any;
}
export declare enum ParamType {
    PARAM = "param",
    QUERY = "query",
    BODY = "body"
}
//# sourceMappingURL=Param.d.ts.map