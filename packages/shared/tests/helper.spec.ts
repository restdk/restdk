import { toSmallHump } from "../src/helper";

describe("property name", () => {
  it("toSmallHump", () => {
    expect(toSmallHump("UserName")).toBe("userName");
  });
});
