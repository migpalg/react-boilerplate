// @packages
import { InMemoryCache } from "@apollo/client";

// @scripts
import { authVar } from "./vars/auth-var";

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        auth: {
          read() {
            return authVar();
          },
        },
      },
    },
  },
});
