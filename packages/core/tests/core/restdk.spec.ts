import { Restdk } from "../../src/core/Restdk";

describe("Restdk.ts", () => {
  it("Restdk toString ", () => {
    expect(
      Restdk.create({
        name: "Sdk",
        baseURL: "http://localhost:80/api",
        env: "local",
        models: [],
      })
        .toString()
        .replace(/\s/gim, "")
    ).toBe(
      `import Axios from "axios";
/*
  This file is automatically generated. Do not modify it.
*/
let env = "local";
const axios = new Axios({ baseUrl: "http://localhost:80/api" });
function request(option) {
  return axios({
    method: option.method,
    url: parseUrl(option.url, option.param),
    data: option.body,
    params: option.query,
  });
}
class BaseModel {
  url: string;
  parent: null | BaseModel;
  getUrl() {
    return (this.parent ? this.parent.getUrl() : "") + this.url;
  }
}
function parseUrl(url: string, param: any) {
  return url.replace(/:(w+)/gim, (_, $1) => {
    return param[$1];
  });
}
`.replace(/\s/gim, "")
    );
  });
});