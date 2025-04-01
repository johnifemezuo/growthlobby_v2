import { gql } from "@apollo/client";

export const BLOG_QUERY = gql`
  query {
    blogs {
      id
      title
      date
      slug
      category
      readTime
      author {
        name
        profilePic {
          url
        }
        role
      }
      coverImage {
        url
      }
    }
  }
`;
export const BLOG_DETAIL_QUERY = gql`
  query getBlog($slug: String) {
    blogs(where: { slug: $slug }) {
      id
      title
      date
      slug
      category
      readTime
      author {
        name
        profilePic {
          url
        }
        role
      }
      coverImage {
        url
      }
      content {
        markdown
        html
      }
    }
  }
`;

export const RELATED_BLOG_QUERY = gql`
  query getRelatedBlogs($slug: String) {
    blogs(where: { slug_not_contains: $slug }) {
      id
      title
      date
      slug
      category
      readTime
      author {
        name
      }
      coverImage {
        url
      }
    }
  }
`;



// export const RELATED_BLOG_QUERY = gql`
//   query getBlog($slug: String, $category: String[]) {
//     blogs(where: { category_in: $category, slug_not_in: $slug }) {
//       id
//       title
//       date
//       slug
//       category
//       readTime
//       author {
//         name
//       }
//       coverImage {
//         url
//       }
//     }
//   }
// `;

