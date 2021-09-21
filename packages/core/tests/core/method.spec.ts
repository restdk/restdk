import { Method, RequestMethod } from "../../src/core/Method";
import { Param, ParamType } from "../../src/core/Param";
import { Return } from "../../src/core/Return";

describe("Method.ts", () => {
  it("create method", () => {
    return expect(
      Method.create({
        name: "getUser",
        requestMethod: RequestMethod.POST,
        url: "/user",
        params: [
          Param.create({
            name: "bodyDto",
            paramType: ParamType.BODY,
            type: "BodyDto",
          }),
        ],
        returns: [
          Return.create({
            type: "User",
          }),
        ],
      })
    ).toEqual({
      name: "getUser",
      requestMethod: "POST",
      url: "/user",
      params: [
        {
          name: "bodyDto",
          paramType: "body",
          type: "BodyDto",
        },
      ],
      returns: [
        {
          type: "User",
        },
      ],
    });
  });

  it("method toString", () => {
    expect(
      Method.create({
        name: "getUser",
        requestMethod: RequestMethod.POST,
        url: "/user",
        params: [
          Param.create({
            name: "bodyDto",
            paramType: ParamType.BODY,
            type: "BodyDto",
          }),
        ],
        returns: [
          Return.create({
            type: "User",
          }),
        ],
      })
        .toString()
        .replace(/\s/gim, "")
    ).toBe(
      `getUser(bodyDto:BodyDto):User{
        return request({
          url:this.getUrl() + "/user",
          method: "POST",
          param: {},
          query: {},
          body: {bodyDto},
        })
      }`.replace(/\s/gim, "")
    );
  });
});
