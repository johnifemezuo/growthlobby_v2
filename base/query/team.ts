import { gql } from "@apollo/client";

export const EXECUTIVES_QUERY = gql`
  query {
    executives {
    name
    title
    id
    socialLink
    profilePic {
      url
    }
  }
  }
`;

export const TEAM_QUERY = gql`
  query {
    developers {
    devTitle
    title
    id
    socialLink
    profilePic {
      url
    }
  }
  }
`;
