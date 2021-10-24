class BaseNode {
    nodeType;
    text; // 代码字符
    locPath; // 代码块位置 语法 文件路径:行,列
    constructor() {
        this.nodeType = this.constructor.name;
    }
}

function toSmallHump(name) {
    const [c, ...other] = name;
    return c.toLowerCase() + other.join("");
}
function em(params, prefix = "", suffix = "") {
    if (typeof params === "number" || typeof params === "boolean") {
        return params;
    }
    return params ? prefix + params + suffix : "";
}

class Restdk extends BaseNode {
    name = "defaultRestdk";
    comment; // 注释
    version; // 版本
    modules; // 模块
    schemaString() {
        return this.modules.map((item) => em(item.schemas.join("\n"))).join("\n");
    }
    toString() {
        return `
/**
 * name: ${this.name}
 * version: ${this.version}
 * restdkVersion: ${1}
 */

${em(this.schemaString())}

${em(this.modules?.join("\n"))}

export function ${this.name}(request){
  return {
    ${this.modules.map((item) => `${toSmallHump(item.name)}: new ${item.name}(request)`)}
  }
}
`;
    }
}

var ParamType;
(function (ParamType) {
    ParamType["QUERY"] = "query";
    ParamType["BODY"] = "body";
    ParamType["PARAM"] = "param";
})(ParamType || (ParamType = {}));
class ApiArgument extends BaseNode {
    name;
    paramType; // 参数类型
    defaultValue;
    type; // 类型
    toString() {
        return `${this.name}${em(this.type, ":")}`;
    }
}

class Decorator extends BaseNode {
    name;
    arguments;
    getArgumentsString() {
        if (this.arguments === null || this.arguments === undefined) {
            return "";
        }
        return `(${this.arguments.join(",")})`;
    }
    toString() {
        return `@${this.name}(${this.getArgumentsString()})`;
    }
}

class DefGeneric extends BaseNode {
    name;
    extends; // 继承
    defaultType; // 默认值
    getExtendsString() {
        return this.extends ? `extends ${this.extends}` : "";
    }
    getDefaultTypeString() {
        return this.defaultType ? ` = ${this.defaultType}` : "";
    }
    toString() {
        return `${this.name}${em(this.getExtendsString(), " ")}${this.getDefaultTypeString()}`;
    }
}

class Property extends BaseNode {
    name;
    type;
    comment;
    decorators; // 属性的装饰器
    defaultValue; // 属性默认值
    getDefaultValueString() {
        if (this.defaultValue) {
            return `=${this.defaultValue}`;
        }
        return "";
    }
    toString() {
        return `
    ${em(this.decorators?.join("\n"))}${em(this.comment, "\n")}
    ${this.name}:${this.type}${this.getDefaultValueString()}`;
    }
}

class Schema extends BaseNode {
    name;
    comment;
    extends; // 继承
    defGeneric; // 定义泛型
    properties; // 属性
    getExtendsString() {
        return this.extends ? `extends ${this.extends}` : "";
    }
    getPropGenericString() {
        if (!this.defGeneric?.length) {
            return "";
        }
        return `<${this.defGeneric?.join(",") ?? ""}>`;
    }
    toString() {
        return `${em(this.comment)}
export class ${this.name}${this.getPropGenericString()} ${this.getExtendsString()} {
  ${em(this.properties?.join("\n"))}
}`;
    }
}

class Type extends BaseNode {
    name;
    propGeneric; // 泛型传参
    getPropGenericString() {
        if (!this.propGeneric?.length) {
            return "";
        }
        return `<${this.propGeneric?.join(",") ?? ""}>`;
    }
    toString() {
        return `${this.name}${this.getPropGenericString()}`;
    }
}

class Value extends BaseNode {
    type;
    toString() {
        return this.text;
    }
}

class Module extends BaseNode {
    name;
    comment;
    parent; // 父模块名字
    apis; // 接口方法
    schemas; // 模型
    toString() {
        return `
${em(this.comment)}
export class ${this.name} extends Api{
  constructor(private request) {
    super();
    ${this.parent ? `this.parent = new ${this.parent}(request);` : ""}
  }

${em(this.apis?.join("\n"))}
}
    `;
    }
}

var ApiMethod;
(function (ApiMethod) {
    ApiMethod["GET"] = "Get";
    ApiMethod["POST"] = "Post";
    ApiMethod["DEL"] = "Delete";
    ApiMethod["PATCH"] = "Patch";
    ApiMethod["PUT"] = "Put";
})(ApiMethod || (ApiMethod = {}));
class Api extends BaseNode {
    name;
    comment;
    method; // 请求类型 GET POST ...
    arguments; // 请求参数
    results; // 返回结果
    throws; // 抛错
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
    ${this.name}(${em(this.arguments?.join(", "))}):Promise<${em(this.results?.join("|")) || "any"}>{
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

export { Api, ApiArgument, ApiMethod, Decorator, DefGeneric, Module, ParamType, Property, Restdk, Schema, Type, Value };
//# sourceMappingURL=core.esm.js.map
