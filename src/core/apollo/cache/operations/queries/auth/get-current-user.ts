// @packages
import { gql } from "@apollo/client";

export const GET_CURRENT_USER = gql`
  query GetCurrentUser {
    auth @client {
      user {
        id
        name
        email
        photoUrl
      }
    }
  }
`;
