import { gql } from "@apollo/client";

export const PROJECT_QUERY = gql`
  query {
    projects {
      id
      title
      description
     	slug
      platform
        industry
    	coverimage {
        url
      }
    }
  }
`;
export const PROJECT_DETAIL_QUERY = gql`
    query getProject($slug: String) {
    projects(where: { slug: $slug }) {
    id
    title
    description
    slug
    livesite
    industry
    platform
    services
    timeline
    year
    coverimage {
      url
    }
    content {
      html
    }
  }
  }
`;
