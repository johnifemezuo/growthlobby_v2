import { gql } from "@apollo/client";

export const FAQ_QUERY = gql`
  query {
    faqs {
      question
      id
      answer
    }
  }
`;
