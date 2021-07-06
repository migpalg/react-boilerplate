// @packages
import { InMemoryCache } from "@apollo/client";

// @scripts
import { authVar } from "../../../features/auth/apollo/auth-var";
import { todosVar } from "../../../features/todos/apollo/todos-var";

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        user: {
          read() {
            return authVar();
          },
        },
        todos: {
          read() {
            return todosVar();
          },
        },
      },
    },
  },
});
