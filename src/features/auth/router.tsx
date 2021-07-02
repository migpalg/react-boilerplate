// @packages
import { Route, Switch, useRouteMatch } from "react-router-dom";

// @scripts
import { config } from "../../core/config";
import { Login } from "./screens";

const routes = config.routes.auth;

export const AuthRouter: React.FC = () => {
  const { url } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${url}${routes.login}`} component={Login} />
    </Switch>
  );
};

export default AuthRouter;
