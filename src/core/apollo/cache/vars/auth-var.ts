// @packages
import { makeVar, ReactiveVar } from "@apollo/client";

// @scripts
import { User } from "../../../../features/auth/models";
import { AsyncVar } from "../types";

export const authVar: ReactiveVar<AsyncVar<User>> = makeVar<AsyncVar<User>>({
  loading: "idle",
  error: null,
  data: null,
});
