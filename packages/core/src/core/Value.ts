import { BaseNode } from "./BaseNode";
import { Type } from "./Type";

export class Value extends BaseNode {
  type?: Type;
  toString() {
    return this.text;
  }
}
