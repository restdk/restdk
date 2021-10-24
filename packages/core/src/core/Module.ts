import { BaseNode } from "./BaseNode";
import { em } from "@restdk/shared";
import { Schema } from "./Schema";
import { Api } from "./Api";

export class Module extends BaseNode {
  name: string;
  comment: string;
  parent: string; // 父模块名字
  apis: Api[]; // 接口方法
  schemas: Schema[]; // 模型

  toString() {
    return `
${em(this.comment)}
export class ${this.name} extends Api{
  constructor(private request) {
    super();
    ${this.parent ? `this.parent = new ${this.parent}(request);` : ""}
  }

${em(this.apis?.join("\n"))}
}
    `;
  }
}
