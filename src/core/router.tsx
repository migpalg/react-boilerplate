// @packages
import React from "react";
import { Switch, Route } from "react-router-dom";

// @scripts
import { config } from "./config";

// @lazy-routes
const TodosRouter = React.lazy(() => import("../features/todos/router"));

export const RootRouter: React.FC = () => {
  return (
    <Switch>
      <Route path={config.routes.todos.base} component={TodosRouter} />
    </Switch>
  );
};
