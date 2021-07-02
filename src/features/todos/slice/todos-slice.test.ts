// @packages
import { AnyAction } from "@reduxjs/toolkit";

// @scripts
import { Todo } from "../models/todo";
import {
  addTodo,
  removeTodo,
  todosReducer,
  TodosState,
  toggleCompleted,
  updateTodo,
} from "./todos-slice";

describe("todos slice unit testing", () => {
  let initialState: TodosState;
  let testTodo: Todo;

  beforeAll(() => {
    testTodo = {
      id: 1,
      name: "test",
      dueDate: new Date(),
      completed: false,
    };
  });

  beforeEach(() => {
    initialState = todosReducer(undefined, {} as AnyAction);
  });

  it("should return initial state", () => {
    expect(initialState).toEqual({
      todos: [],
    });
  });

  it("should add a todo", () => {
    const newState = todosReducer(initialState, addTodo(testTodo));

    expect(newState).toEqual({
      todos: [testTodo],
    });
  });

  it("should toggle todo completed state", () => {
    const newState = todosReducer(initialState, addTodo(testTodo));
    const toggled = todosReducer(newState, toggleCompleted(testTodo.id));

    expect(
      toggled.todos.find((todo) => todo.id === testTodo.id)?.completed
    ).toBeTruthy();
  });

  it("should delete a todo", () => {
    const newState = todosReducer(initialState, addTodo(testTodo));
    const withRemoved = todosReducer(newState, removeTodo(testTodo.id));

    expect(withRemoved.todos.length).toEqual(0);
  });

  it("should update a todo", () => {
    const expectedDescription = "Hello world!";

    const newState = todosReducer(initialState, addTodo(testTodo));
    const withUpdated = todosReducer(
      newState,
      updateTodo({
        id: testTodo.id,
        data: { description: expectedDescription },
      })
    );

    expect(withUpdated.todos.find((todo) => todo.id === testTodo.id)).toEqual({
      ...testTodo,
      description: expectedDescription,
    });
  });
});
