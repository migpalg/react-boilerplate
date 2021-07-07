// @packages
import { render } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { MemoryRouter } from "react-router-dom";

// @scripts
import { GET_CURRENT_USER } from "../../apollo/operations/queries";
import { PrivateRoute } from "./private-route";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "/example/location",
  }),
}));

const gqlMocks = [
  {
    request: {
      query: GET_CURRENT_USER,
    },
    result: {
      data: {
        user: null,
      },
    },
  },
];

describe("PrivateRoute unit testing", () => {
  it("should render without crasing", () => {
    render(
      <MockedProvider mocks={gqlMocks} addTypename={false}>
        <PrivateRoute />
      </MockedProvider>,
      { wrapper: MemoryRouter }
    );
  });
});
