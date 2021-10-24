import { BaseNode } from "./BaseNode";
import { Type } from "./Type";

export class ApiResult extends BaseNode {
  statusCode: number; // 状态码
  type: Type; // 类型

  toString() {
    return `${this.type}`;
  }
}
