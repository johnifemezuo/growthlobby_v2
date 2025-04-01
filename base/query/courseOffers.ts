import { gql } from "@apollo/client";

export const COURSE_OFFERS_QUERY = gql`
  query {
    courseOffers {
      description
      title
      duration
      id
    }
}`;
