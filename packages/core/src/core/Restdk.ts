import { BaseNode } from "./BaseNode";
import { em, toSmallHump } from "@restdk/shared";
import { Module } from "./Module";

export class Restdk extends BaseNode {
  name: string = "defaultRestdk";
  comment: string; // 注释
  version: number; // 版本
  modules: Module[]; // 模块

  schemaString(): string {
    return this.modules.map((item) => em(item.schemas.join("\n"))).join("\n");
  }

  toString() {
    return `
/**
 * name: ${this.name}
 * version: ${this.version}
 * restdkVersion: ${1}
 */

${em(this.schemaString())}

${em(this.modules?.join("\n"))}

export function ${this.name}(request){
  return {
    ${this.modules.map(
      (item) => `${toSmallHump(item.name)}: new ${item.name}(request)`
    )}
  }
}
`;
  }
}
