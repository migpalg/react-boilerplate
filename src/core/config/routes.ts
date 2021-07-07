import { routesFromBase } from "../utils";

export const routesConfig = {
  todos: routesFromBase("/todos"),
  auth: routesFromBase("/auth", {
    login: "/login",
    signUp: "/sign-up",
  }),
};
