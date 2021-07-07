// @packages
import { render } from "@testing-library/react";

// @scripts
import { App } from "./app";

describe("app unit testing", () => {
  it("renders without crashing", () => {
    render(<App />);
  });
});
