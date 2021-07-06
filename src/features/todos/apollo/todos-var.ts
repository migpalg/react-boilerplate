// @packages
import { makeVar, ReactiveVar } from "@apollo/client";

// @scripts
import { Todo } from "../models";

export const todosVar: ReactiveVar<Todo[]> = makeVar<Todo[]>([]);
