// @packages
import React from "react";
import { Container, Button, Typography } from "@material-ui/core";

// @scripts
import { Todo } from "../../models";

export const TodoList: React.FC = () => {
  const todos: Todo[] = [];

  return (
    <Container>
      <Typography variant="h4" component="h2">
        Todos List
      </Typography>
      <ul>
        {todos.map((todo) => (
          <li key={`todo-${todo.id}`}>{todo.name}</li>
        ))}
      </ul>
      <Button variant="contained" color="primary">
        Add
      </Button>
    </Container>
  );
};
