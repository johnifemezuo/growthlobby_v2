import { gql } from "@apollo/client";

export const TERMS_QUERY = gql`
  query {
    termsAndConditions {
      title
      date
      content {
        markdown
        html
      }
    }
  }
`;

export const POLICY_QUERY = gql`
  query {
    privacyPolicies {
      title
      date
      content {
        markdown
        html
      }
    }
  }
`;
