import { BaseNode } from "./BaseNode";

export class Type extends BaseNode {
  name: string;
  propGeneric?: Type[]; // 泛型传参

  private getPropGenericString() {
    if (!this.propGeneric?.length) {
      return "";
    }
    return `<${this.propGeneric?.join(",") ?? ""}>`;
  }

  toString() {
    return `${this.name}${this.getPropGenericString()}`;
  }
}
