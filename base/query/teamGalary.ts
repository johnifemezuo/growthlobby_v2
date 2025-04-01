import { gql } from "@apollo/client";

export const TEAM_GALARY_QUERY = gql`
  query {
     teamPics {
    image {
      url
    }
  }
  }
`;
