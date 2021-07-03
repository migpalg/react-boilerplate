// @packages
import { useQuery } from "@apollo/client";
import { Route, Redirect, RouteProps } from "react-router";
import { useLocation } from "react-router-dom";

// @scripts
import { config } from "../../../../core/config";
import { AuthQueries } from "../../../../core/apollo/operations/queries";
import { DefaultFallback } from "../../../common/components";
import { User } from "../../models";

const routes = config.routes.auth;

/**
 * Creates a private route so that the user can access only if is authenticated
 */
export const PrivateRoute: React.FC<RouteProps> = (props) => {
  const location = useLocation();
  const { data, loading, error } = useQuery<User>(AuthQueries.GET_CURRENT_AUTH);

  if (loading) {
    return <DefaultFallback />;
  }

  if (!data || error) {
    const requestedRoute = encodeURIComponent(location.pathname);

    return (
      <Redirect to={`${routes.base}${routes.login}?next=${requestedRoute}`} />
    );
  }

  return <Route {...props} />;
};
