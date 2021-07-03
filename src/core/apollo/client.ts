// @packages
import { ApolloClient } from "@apollo/client";

// @scripts
import { cache } from "./cache";

export const client = new ApolloClient({
  cache,
});
