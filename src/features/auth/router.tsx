// @packages
import { Route, Switch } from "react-router-dom";

// @scripts
import { config } from "../../core/config";
import { Login, SignUp } from "./screens";
import { NotFound } from "../common/screens";

const routes = config.routes.auth;

/**
 * Router for authentication screens, put here all the related routes for this
 * feature
 */
export const AuthRouter: React.FC = () => {
  return (
    <Switch>
      <Route path={routes.login} component={Login} />
      <Route path={routes.signUp} component={SignUp} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default AuthRouter;
