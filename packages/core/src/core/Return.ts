import { make } from "@restdk/shared";

export class Return {
  type: string;

  static create(props: Partial<Return>) {
    return make(new Return(), props);
  }
}
