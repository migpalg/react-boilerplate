// @packages
import React from "react";
import { Switch, Route } from "react-router-dom";

// @scripts
import { config } from "./config";
import { PrivateRoute } from "../features/auth/components";

// @lazy-routes
const TodosRouter = React.lazy(() => import("../features/todos/router"));
const AuthRouter = React.lazy(() => import("../features/auth/router"));

export const RootRouter: React.FC = () => {
  return (
    <Switch>
      <PrivateRoute path={config.routes.todos.base} component={TodosRouter} />
      <Route path={config.routes.auth.base} component={AuthRouter} />
    </Switch>
  );
};
