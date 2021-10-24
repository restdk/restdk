import { BaseNode } from "./BaseNode";
import { Type } from "./Type";
import { em } from "@restdk/shared";

export enum ParamType {
  QUERY = "query",
  BODY = "body",
  PARAM = "param",
}

export class ApiArgument extends BaseNode {
  name: string;
  paramType: ParamType; // 参数类型
  defaultValue: string;
  type: Type; // 类型

  toString() {
    return `${this.name}${em(this.type, ":")}`;
  }
}
