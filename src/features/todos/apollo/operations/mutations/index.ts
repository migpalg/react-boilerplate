// @scripts
import { addTodo } from "./add-todo/add-todo";
import { todosVar } from "../../todos-var";

export const todoMutations = {
  addTodo: addTodo(todosVar),
};
