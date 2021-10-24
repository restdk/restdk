# restdk 核心模块

## 核心数据结构

```ts
class RestdkAPI {
  name: string;
  comment: string;
  version: number;
  modules: Module[];
}

class Module {
  name: string;
  comment: string;
  parent: string;
  apis: Api[];
  schemas: Schema[];
}

class Api {
  name: string;
  comment: string;
  method: string;
  arguments: ApiArgument[];
  results: ApiResult[];
  throws: ApiThrow[];
}

enum ParamType {
  QUERY = "query",
  BODY = "body",
  PARAM = "param",
}

class ApiArgument {
  comment: string;
  paramType: ParamType;
  type: Type;
}

class Type {
  name: string;
  comment: string;
  propGeneric?: Map<string, Type>;
  decorators?: TypeDecorator[];
  defaultValue?: any;
}

class Schema {
  name: string;
  comment: string;
  extends?: Type;
  defGeneric?: Map<string, DefGeneric>;
  property: Map<string, Type>;
}

class DefGeneric {
  extends: Type;
  default: Type;
}

class ApiResult {
  statusCode: number;
  type: Type;
}

class ApiThrow extends ApiResult {
  message: string;
  error: string;
}
```
