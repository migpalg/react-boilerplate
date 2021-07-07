import { routesFromBase } from "./routes-from-base";

describe("routes from base unit testing", () => {
  let routesDefinition: { test: { base: string; foo: string } };
  const ROUTES_BASE = "/test";
  const EXPECTED_FOO_ROUTE = `${ROUTES_BASE}/foo`;

  beforeAll(() => {
    routesDefinition = {
      test: routesFromBase(ROUTES_BASE, {
        foo: "/foo",
      }),
    };
  });

  it("should return base", () => {
    expect(routesDefinition.test.base).toEqual(ROUTES_BASE);
  });

  it("should concatenate childrens", () => {
    expect(routesDefinition.test.foo).toEqual(EXPECTED_FOO_ROUTE);
  });
});
