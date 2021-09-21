import { DtoObject, Property } from "../../src/core/DtoObject";

describe("DtoObject.ts", () => {
  it("dtoObject to string", () => {
    expect(
      DtoObject.create({
        name: "BodyDto",
        parent: "User",
        property: [
          Property.create({
            name: "id",
            type: "number",
            required: true,
            default: "1",
            comment: "/*id*/",
          }),
          Property.create({
            name: "name",
            type: "string",
            required: false,
            default: "xx",
            comment: "/*name*/",
          }),
        ],
      })
        .toString()
        .replace(/\s/gim, "")
    ).toBe(
      `
     class BodyDto extends User{
       /*id*/
       id:number = 1;
       /*name*/
       name?:string = "xx";
     }
    `.replace(/\s/gim, "")
    );
  });
});
