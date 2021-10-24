import { BaseNode } from "./BaseNode";
import { Type } from "./Type";
import { em } from "@restdk/shared";

export class DefGeneric extends BaseNode {
  name: string;
  extends?: Type; // 继承
  defaultType?: Type; // 默认值

  getExtendsString() {
    return this.extends ? `extends ${this.extends}` : "";
  }

  getDefaultTypeString() {
    return this.defaultType ? ` = ${this.defaultType}` : "";
  }

  toString() {
    return `${this.name}${em(
      this.getExtendsString(),
      " "
    )}${this.getDefaultTypeString()}`;
  }
}
