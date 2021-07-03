// @packages
import { gql } from "@apollo/client";

/**
 * Returns the current user in the cache
 */
export const GET_CURRENT_AUTH = gql`
  query GetCurrentAuth {
    auth @client {
      user {
        id
        name
        email
        photoUrl
      }
      fetching
    }
  }
`;
