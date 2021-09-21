import { make } from "../src";

describe("make.ts", () => {
  it("make", () => {
    class Test {
      id: number;
      name: string;
    }

    const obj = {
      id: 1,
      name: "2",
    };

    expect(make(new Test(), obj)).toEqual(obj);
  });
});
