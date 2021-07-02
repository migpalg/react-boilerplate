// @packages
import { Route, Switch, useRouteMatch } from "react-router-dom";

// @scripts
import { config } from "../../core/config";
import { Login, SignUp } from "./screens";

const routes = config.routes.auth;

/**
 * Router for authentication screens, put here all the related routes for this
 * feature
 */
export const AuthRouter: React.FC = () => {
  const { url } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${url}${routes.login}`} component={Login} />
      <Route path={`${url}${routes.signUp}`} component={SignUp} />
    </Switch>
  );
};

export default AuthRouter;
