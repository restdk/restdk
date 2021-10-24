import { BaseNode } from "./BaseNode";
import { DecoratorArgument } from "./DecoratorArgument";
export declare class Decorator extends BaseNode {
    name: string;
    arguments?: DecoratorArgument[] | null;
    getArgumentsString(): string;
    toString(): string;
}
//# sourceMappingURL=Decorator.d.ts.map