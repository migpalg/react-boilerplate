// @packages
import { makeVar, ReactiveVar } from "@apollo/client";

// @scripts
import { User } from "../models";

export const authVar: ReactiveVar<User | null> = makeVar<User | null>(null);
