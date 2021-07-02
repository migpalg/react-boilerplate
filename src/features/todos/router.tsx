// @packages
import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

// @scripts
import { TodoList } from "./screens";

/**
 * Root router for todos feature
 */
export const TodosRouter: React.FC = () => {
  const { url } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${url}/`} component={TodoList} />
    </Switch>
  );
};

export default TodosRouter;
