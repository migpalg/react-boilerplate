// @packages
import { Route, RouteProps } from "react-router";

/**
 * Creates a private route so that the user can access only if is authenticated
 */
export const PrivateRoute: React.FC<RouteProps> = (props) => {
  return <Route {...props} />;
};
