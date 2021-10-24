import { ApiArgument, ParamType } from "@/core/ApiArgument";
import { Decorator } from "@/core/Decorator";
import { DefGeneric } from "@/core/DefGeneric";
import { Property } from "@/core/Property";
import { Restdk } from "@/core/Restdk";
import { Schema } from "@/core/Schema";
import { Type } from "@/core/Type";
import { Value } from "@/core/Value";
import { Module } from "@/core/Module";
import { Api, ApiMethod } from "@/core/Api";
import { make, makePlus } from "@restdk/shared";

describe("Restdk", () => {
  it("test Value", () => {
    expect(make(new Value(), { text: "1" }).toString()).toMatchInlineSnapshot(
      `"1"`
    );
    expect(make(new Value(), { text: "1" }).nodeType).toBe("Value");
  });

  const userType = makePlus(Type, { name: "User" });
  it("test Type", () => {
    expect(userType.toString()).toMatchInlineSnapshot(`"User"`);
    expect(
      make(new Type(), {
        name: "User",
        propGeneric: [make(new Type(), { name: "Base" })],
      }).toString()
    ).toMatchInlineSnapshot(`"User<Base>"`);
    expect(make(new Type(), { name: "User" }).nodeType).toBe("Type");
  });

  const schemaProperty = make(new Property(), {
    name: "username",
    type: make(new Type(), { name: "string" }),
    defaultValue: make(new Value(), { text: '""' }),
    decorators: [make(new Decorator(), { name: "IsString" })],
  });

  it("test SchemaProperty", () => {
    expect(schemaProperty.toString()).toMatchInlineSnapshot(`
"
    @IsString()
    username:string=\\"\\""
`);
  });

  const schema = make(new Schema(), {
    name: "User",
    extends: make(new Type(), { name: "Common" }),
    defGeneric: [make(new DefGeneric(), { name: "T" })],
    properties: [schemaProperty],
  });

  it("test Schema", () => {
    expect(schema.toString()).toMatchInlineSnapshot(`
"
export class User<T> extends Common {
  
    @IsString()
    username:string=\\"\\"
}"
`);
  });

  const apiArguments = [
    makePlus(ApiArgument, { name: "id", paramType: ParamType.PARAM }),
    makePlus(ApiArgument, {
      name: "queryDto",
      paramType: ParamType.QUERY,
    }),
    makePlus(ApiArgument, {
      name: "userPart",
      paramType: ParamType.BODY,
      type: userType,
    }),
  ];

  it("test api arguments", () => {
    expect(apiArguments[0].toString()).toMatchInlineSnapshot(`"id"`);
    expect(apiArguments[1].toString()).toMatchInlineSnapshot(`"queryDto"`);
    expect(apiArguments[2].toString()).toMatchInlineSnapshot(`"userPart:User"`);
  });

  const api = makePlus(Api, {
    name: "createUser",
    method: ApiMethod.POST,
    arguments: apiArguments,
  });

  it("test ApiMethod", () => {
    expect(api.toString()).toMatchInlineSnapshot(`
"
    
    createUser(id, queryDto, userPart:User):Promise<any>{
      return this.request({
        method: \\"Post\\",
        url: this.getUrl(),
        param: {id},
        query: queryDto,
        body: userPart,
      })
    }
    "
`);
  });

  const module = makePlus(Module, {
    name: "UserController",
    apis: [api],
    schemas: [schema],
  });

  it("test module", () => {
    expect(module.toString()).toMatchInlineSnapshot(`
"

export class UserController extends Api{
  constructor(private request) {
    super();
    
  }


    
    createUser(id, queryDto, userPart:User):Promise<any>{
      return this.request({
        method: \\"Post\\",
        url: this.getUrl(),
        param: {id},
        query: queryDto,
        body: userPart,
      })
    }
    
}
    "
`);
  });

  const restDk = makePlus(Restdk, {
    name: "AppProject",
    modules: [module],
    version: 1,
  });

  it("test restDk", () => {
    expect(restDk.toString()).toMatchInlineSnapshot(`
"
/**
 * name: AppProject
 * version: 1
 * restdkVersion: 1
 */


export class User<T> extends Common {
  
    @IsString()
    username:string=\\"\\"
}



export class UserController extends Api{
  constructor(private request) {
    super();
    
  }


    
    createUser(id, queryDto, userPart:User):Promise<any>{
      return this.request({
        method: \\"Post\\",
        url: this.getUrl(),
        param: {id},
        query: queryDto,
        body: userPart,
      })
    }
    
}
    

export function AppProject(request){
  return {
    userController: new UserController(request)
  }
}
"
`);
  });
});
