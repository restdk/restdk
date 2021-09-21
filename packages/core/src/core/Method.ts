import { make, URL } from "@restdk/shared";
import { Param } from "./Param";
import { Return } from "./Return";

export class Method {
  name: string;
  url: URL;
  requestMethod: RequestMethod = RequestMethod.GET;
  params?: Param[] = [];
  returns?: Return[] = [];
  // throws= [];
  getParamMap() {
    const paramMap = {
      param: [],
      query: [],
      body: [],
    };

    for (let i = 0; i < this.params.length; i++) {
      const param = this.params[i];
      paramMap[param.paramType].push(param.name);
    }

    return paramMap;
  }

  getArgsString() {
    return this.params.map((param) => param.toString());
  }

  getRetTypeString() {
    return this.returns.map((ret) => ret.type);
  }

  toString() {
    const { param, query, body } = this.getParamMap();
    return `
  ${this.name}(${this.getArgsString().join(", ")}):${
      this.getRetTypeString().join("|") || "any"
    }{
      return request({
        url:this.getUrl() + "${this.url}",
        method: "${this.requestMethod}",
        param: {${param.join(",")}},
        query: {${query.join(",")}},
        body: {${body.join(",")}},
      })
  }
    `;
  }

  static create(props: Partial<Method>) {
    return make(new Method(), props);
  }
}
export enum RequestMethod {
  GET = "GET",
  POST = "POST",
  DELETE = "DELETE",
  PUT = "PUT",
  PATCH = "PATCH",
}
