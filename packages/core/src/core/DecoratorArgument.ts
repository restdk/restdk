import { BaseNode } from "./BaseNode";
import { Value } from "./Value";

export class DecoratorArgument extends BaseNode {
  value: Value;

  toString() {
    return this.value;
  }
}
