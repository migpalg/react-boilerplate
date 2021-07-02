// @packages
import { configureStore } from "@reduxjs/toolkit";

// @scripts
import { todosReducer } from "../../features/todos/slice/todos-slice";

/**
 * Root application store for redux
 */
export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
