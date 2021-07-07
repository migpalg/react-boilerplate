// @packages
import { useQuery } from "@apollo/client";
import { Route, Redirect, RouteProps } from "react-router";
import { useLocation } from "react-router-dom";

// @scripts
import { config } from "../../../../core/config";
import { DefaultFallback } from "../../../common/components";
import { GET_CURRENT_USER } from "../../apollo/operations/queries";

const routes = config.routes.auth;

/**
 * Creates a private route so that the user can access only if is authenticated
 */
export const PrivateRoute: React.FC<RouteProps> = (props) => {
  const location = useLocation();
  const { data, loading, error } = useQuery(GET_CURRENT_USER);

  if (loading) {
    return <DefaultFallback />;
  }

  if (!data.user || error) {
    const requestedRoute = encodeURIComponent(location.pathname);

    return <Redirect to={`${routes.login}?next=${requestedRoute}`} />;
  }

  return <Route {...props} />;
};
