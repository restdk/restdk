import { BaseNode } from "./BaseNode";
import { DecoratorArgument } from "./DecoratorArgument";

export class Decorator extends BaseNode {
  name: string;
  arguments?: DecoratorArgument[] | null;

  getArgumentsString() {
    if (this.arguments === null || this.arguments === undefined) {
      return "";
    }
    return `(${this.arguments.join(",")})`;
  }

  toString() {
    return `@${this.name}(${this.getArgumentsString()})`;
  }
}
