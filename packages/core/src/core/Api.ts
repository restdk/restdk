import { em } from "@restdk/shared";
import { BaseNode } from "./BaseNode";
import { ApiThrow } from "./ApiThrow";
import { ApiResult } from "./ApiResult";
import { ApiArgument } from "./ApiArgument";

export enum ApiMethod {
  GET = "Get",
  POST = "Post",
  DEL = "Delete",
  PATCH = "Patch",
  PUT = "Put",
}

export class Api extends BaseNode {
  name: string;
  comment: string;
  method: ApiMethod; // 请求类型 GET POST ...
  arguments: ApiArgument[]; // 请求参数
  results: ApiResult[]; // 返回结果
  throws: ApiThrow[]; // 抛错

  getParamMap() {
    const paramMap = {
      param: [],
      query: [],
      body: [],
    };

    for (let i = 0; i < this.arguments.length; i++) {
      const argument = this.arguments[i];
      paramMap[argument.paramType].push(argument.name);
    }

    return paramMap;
  }

  toString() {
    const { param = [], query = [], body = [] } = this.getParamMap();
    return `
    ${em(this.comment)}
    ${this.name}(${em(this.arguments?.join(", "))}):Promise<${
      em(this.results?.join("|")) || "any"
    }>{
      return this.request({
        method: "${this.method}",
        url: this.getUrl(),
        param: {${param.join(",")}},
        query: ${query.join(",")},
        body: ${body.join(",")},
      })
    }
    `;
  }
}
