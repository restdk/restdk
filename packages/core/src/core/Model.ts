import { make, URL } from "@restdk/shared";
import { Method } from "./Method";

export class Model {
  url: URL;
  name: string;
  parent: string | null;
  methods: Method[] = [];

  toString() {
    return `class ${this.name} extends BaseModel{
      url = "${this.url}"
      parent = ${this.getParentString()}

      ${this.getMethodString().join("\n")}
    }`;
  }

  getMethodString() {
    return this.methods.map((method) => method.toString());
  }

  getParentString() {
    return this.parent ? "new " + this.parent : null;
  }

  static create(props: Partial<Model>) {
    return make(new Model(), props);
  }
}
