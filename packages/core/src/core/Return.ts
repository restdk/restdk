import { make } from "@restdk/shared";

export class Return {
  type: string;

  toString() {
    return this.type;
  }

  static create(props: Partial<Return>) {
    return make(new Return(), props);
  }
}
