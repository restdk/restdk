import { Method, RequestMethod } from "../../src/core/Method";
import { Param, ParamType } from "../../src/core/Param";
import { Return } from "../../src/core/Return";
import { Model } from "../../src/core/Model";
import { DtoObject, Property } from "../../src/core/DtoObject";

describe("Model.ts", () => {
  it("create model", () => {
    return expect(
      Model.create({
        url: "/api",
        name: "App",
        parent: null,
        dtoObject: [
          DtoObject.create({
            name: "BodyDto",
            parent: "User",
            property: [
              Property.create({
                name: "id",
                type: "number",
                required: true,
              }),
            ],
          }),
          DtoObject.create({
            name: "User",
            parent: null,
            property: [
              Property.create({
                name: "name",
                type: "string",
              }),
            ],
          }),
        ],
        methods: [
          Method.create({
            name: "getUser",
            requestMethod: RequestMethod.GET,
            url: "/user",
          }),
        ],
      })
    ).toEqual({
      url: "/api",
      name: "App",
      parent: null,
      dtoObject: [
        {
          name: "BodyDto",
          parent: "User",
          property: [
            {
              name: "id",
              type: "number",
              required: true,
              comment: "",
              default: "",
            },
          ],
        },
        {
          name: "User",
          parent: null,
          property: [
            {
              name: "name",
              type: "string",
              required: false,
              comment: "",
              default: "",
            },
          ],
        },
      ],
      methods: [
        {
          name: "getUser",
          requestMethod: "GET",
          url: "/user",
          params: [],
          returns: [],
        },
      ],
    });
  });

  it("model toString", () => {
    expect(
      Model.create({
        url: "/api",
        name: "App",
        parent: null,
        methods: [],
      })
        .toString()
        .replace(/\s/gim, "")
    ).toBe(
      `class App extends BaseModel{
        url = "/api"
        parent = null
      }`.replace(/\s/gim, "")
    );
  });

  it("model and method toSting", () => {
    expect(
      Model.create({
        url: "/api",
        name: "App",
        parent: null,
        methods: [
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
          }),
        ],
      })
        .toString()
        .replace(/\s/gim, "")
    ).toBe(
      `class App extends BaseModel{
        url = "/api"
        parent = null

        getUser(bodyDto:BodyDto):User{
          return request({
            url:this.getUrl() + "/user",
            method: "POST",
            param: {},
            query: {},
            body: {bodyDto},
          })
        }
      }`.replace(/\s/gim, "")
    );
  });
});
