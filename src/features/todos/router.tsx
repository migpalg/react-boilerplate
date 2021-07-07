// @packages
import React from "react";
import { Switch, Route } from "react-router-dom";
import { config } from "../../core";

// @scripts
import { TodoListScreen } from "./screens";

const routes = config.routes.todos;

/**
 * Root router for todos feature
 */
export const TodosRouter: React.FC = () => {
  return (
    <Switch>
      <Route path={routes.base} component={TodoListScreen} />
    </Switch>
  );
};

export default TodosRouter;
