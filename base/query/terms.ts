import { gql } from "@apollo/client";

export const TERMS_QUERY = gql`
  query {
    termsAndConditions {
      title
      content {
        html
      }
        publishedAt
    }
  }
`;

export const POLICY_QUERY = gql`
  query {
    privacyPolicies {
      title
      publishedAt
      content {
        
        html
      }
    }
  }
`;
