import { ReactiveVar } from "@apollo/client";

import { Todo, PartialTodo } from "../../../../models";

export function addTodo(
  todosVar: ReactiveVar<Todo[]>
): (data: PartialTodo) => void {
  const createNewTodo = (todo: PartialTodo): Todo => {
    return {
      id: Date.now().toString(36),
      completed: false,
      ...todo,
    };
  };

  return (data: PartialTodo) => {
    todosVar([...todosVar(), createNewTodo(data)]);
  };
}
