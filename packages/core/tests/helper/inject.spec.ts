describe("Inject.ts", () => {
  it("test injectTools parseUrl", () => {
    const url = `/api/:id/:id/:type/:type?a=2`;
    const param = {
      id: 11,
      type: "hello",
    };

    function parseUrl(url: string, param: any) {
      return url.replace(/:(\w+)/gim, (_, $1) => {
        return param[$1];
      });
    }

    expect(parseUrl(url, param)).toBe(`/api/11/11/hello/hello?a=2`);
  });
});
