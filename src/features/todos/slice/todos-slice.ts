// @packages
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// @scripts
import { Todo } from "../models/todo";

export interface TodosState {
  todos: Array<Todo>;
  error?: string;
}

const initialState: TodosState = {
  todos: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },

    toggleCompleted(state, action: PayloadAction<number | string>) {
      const todoIndex = state.todos.findIndex(
        (todo) => todo.id === action.payload
      );

      if (todoIndex >= 0) {
        state.todos[todoIndex].completed = !state.todos[todoIndex].completed;
      }
    },

    removeTodo: (state, action: PayloadAction<number | string>) => {
      const todoIndex = state.todos.findIndex(
        (todo) => todo.id === action.payload
      );

      if (todoIndex >= 0) {
        state.todos.splice(todoIndex, 1);
      }
    },

    updateTodo: (
      state,
      action: PayloadAction<{
        id: number | string;
        data: Partial<Omit<Todo, "id">>;
      }>
    ) => {
      const todoIndex = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );

      if (todoIndex >= 0) {
        state.todos[todoIndex] = {
          ...state.todos[todoIndex],
          ...action.payload.data,
        };
      }
    },
  },
});

export const { addTodo, toggleCompleted, removeTodo, updateTodo } =
  todosSlice.actions;

export const todosReducer = todosSlice.reducer;
