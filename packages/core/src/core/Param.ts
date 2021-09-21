import { make } from "@restdk/shared";

export class Param {
  type: string;
  name: string;
  paramType?: ParamType = ParamType.BODY;

  toString() {
    return `${this.name}:${this.type}`;
  }

  static create(props: Partial<Param>) {
    return make(new Param(), props);
  }
}
export enum ParamType {
  PARAM = "param",
  QUERY = "query",
  BODY = "body",
}
