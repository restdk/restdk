import { URL } from "@restdk/shared";
import { DtoObject } from "./DtoObject";
import { Method } from "./Method";
export declare class Model {
    url: URL;
    name: string;
    parent: string | null;
    dtoObject: DtoObject[];
    methods: Method[];
    toString(): string;
    getMethodString(): string;
    getParentString(): string;
    getDtoObjectString(): string;
    static create(props: Partial<Model>): any;
}
//# sourceMappingURL=Model.d.ts.map