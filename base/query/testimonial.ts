import { gql } from "@apollo/client";

export const TESTIMONIAL_QUERY = gql`
  query {
    testimonials {
    name
    title
    testimonial
    id
    clientProject
    profile {
      url
    }
  }
  }
`;

export const DEVELOPER_TESTIMONIAL_QUERY = gql`
  query {
    devTestimonials {
    name
    title
    testimonial
    id
     profilePic {
      url
    }
  }
  }
`;
