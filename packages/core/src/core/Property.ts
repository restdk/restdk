import { BaseNode } from "./BaseNode";
import { Type } from "./Type";
import { em } from "@restdk/shared";
import { Value } from "./Value";
import { Decorator } from "./Decorator";

export class Property extends BaseNode {
  name: string;
  type: Type;
  comment?: string;
  decorators?: Decorator[]; // 属性的装饰器
  defaultValue?: Value; // 属性默认值

  getDefaultValueString() {
    if (this.defaultValue) {
      return `=${this.defaultValue}`;
    }
    return "";
  }

  toString() {
    return `
    ${em(this.decorators?.join("\n"))}${em(this.comment, "\n")}
    ${this.name}:${this.type}${this.getDefaultValueString()}`;
  }
}
