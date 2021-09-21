import { make, URL } from "@restdk/shared";
import { DtoObject } from "./DtoObject";
import { Method } from "./Method";

export class Model {
  url: URL;
  name: string;
  parent: string | null;
  dtoObject: DtoObject[] = [];
  methods: Method[] = [];

  toString() {
    return `${this.getDtoObjectString()}
    class ${this.name} extends BaseModel{
      url = "${this.url}"
      parent = ${this.getParentString()}

      ${this.getMethodString()}
    }`;
  }

  getMethodString() {
    return this.methods.map((method) => method).join("\n");
  }

  getParentString() {
    return this.parent ? "new " + this.parent : null;
  }

  getDtoObjectString() {
    return this.dtoObject.map((dto) => dto).join("\n");
  }

  static create(props: Partial<Model>) {
    return make(new Model(), props);
  }
}
