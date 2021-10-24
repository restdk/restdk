import { BaseNode } from "./BaseNode";
import { Type } from "./Type";
import { em } from "@restdk/shared";
import { DefGeneric } from "./DefGeneric";
import { Property } from "./Property";

export class Schema extends BaseNode {
  name: string;
  comment?: string;
  extends?: Type; // 继承
  defGeneric?: DefGeneric[]; // 定义泛型
  properties: Property[]; // 属性

  getExtendsString() {
    return this.extends ? `extends ${this.extends}` : "";
  }

  getPropGenericString() {
    if (!this.defGeneric?.length) {
      return "";
    }
    return `<${this.defGeneric?.join(",") ?? ""}>`;
  }

  toString() {
    return `${em(this.comment)}
export class ${
      this.name
    }${this.getPropGenericString()} ${this.getExtendsString()} {
  ${em(this.properties?.join("\n"))}
}`;
  }
}
