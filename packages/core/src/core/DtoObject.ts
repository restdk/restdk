import { make } from "@restdk/shared";
export class DtoObject {
  name: string;
  parent: null | string;
  property: Property[] = [];

  getParentString() {
    return this.parent ? `extends ${this.parent}` : "";
  }

  getPropertyString() {
    return this.property.join("\n");
  }

  toString() {
    return `
    class ${this.name} ${this.getParentString()} {
      ${this.getPropertyString()}
    }
    `;
  }

  static create(props: Partial<DtoObject>): DtoObject {
    return make(new DtoObject(), props);
  }
}

export class Property {
  name: string;
  type: string;
  required: boolean = false;
  comment: string = "";
  default: string = "";

  getDefaultString() {
    const typeMap = { string: '"' };
    const wrapSyb = typeMap[this.type] ?? "";
    return this.default ? ` = ${wrapSyb + this.default + wrapSyb}` : "";
  }

  getRequiredString() {
    return this.required ? "" : "?";
  }

  toString() {
    return `
    ${this.comment}
    ${this.name}${this.getRequiredString()}:${
      this.type
    }${this.getDefaultString()};`;
  }

  static create(props: Partial<Property>): Property {
    return make(new Property(), props);
  }
}
