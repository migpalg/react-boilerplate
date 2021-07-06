// @packages
import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

// @scripts
import { TodoListScreen } from "./screens";

/**
 * Root router for todos feature
 */
export const TodosRouter: React.FC = () => {
  const { url } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${url}/`} component={TodoListScreen} />
    </Switch>
  );
};

export default TodosRouter;
