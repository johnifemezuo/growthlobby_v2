import { gql } from "@apollo/client";

export const PROJECT_QUERY = gql`
  query {
    growthlobbyCaseStudies {
      id
      title
      description
     	slug
      platform
      industry
      projectType
    	introImage {
        url
      }
    }
  }
`;
export const PROJECT_DETAIL_QUERY = gql`
    query getProject($slug: String) {
    growthlobbyCaseStudies(where: { slug: $slug }) {
    id
    title
    description
    slug
    livesite
    industry
    platform
    timeline
    year
    projectType
    introImage {
      url
    }
    content {
      html
    }
  }
  }
`;

export const OTHER_PROJECT_QUERY = gql`
  query getOtherProject($slug: String) {
    growthlobbyCaseStudies(where: { slug_not_contains: $slug }, first: 3) {
      publishedAt
      id
      title
      description
      projectType
      slug
      livesite
      platform
      introImage {
        url
      }
    }
  }
`;


export const FEATURED_PROJECT_QUERY = gql`
  query {
    growthlobbyCaseStudies(where: { featured: true }, first: 6) {
      publishedAt
      id
      title
      description
      projectType
      slug
      livesite
      platform
      introImage {
        url
      }
    }
  }
`;

