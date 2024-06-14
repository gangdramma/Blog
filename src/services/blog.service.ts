import { gql, request } from "graphql-request";
import { IEntity } from "src/interfaces/blogs";

const graphqlAPI = process.env.HYGRAPH_ENDPOINT as string;

if (!graphqlAPI) {
  throw new Error(
    "HYGRAPH_ENDPOINT is not defined in the environment variables."
  );
}

export const BlogService = {
  async getAllBlogs(): Promise<IEntity.Blogs> {
    const query = gql`
      query GetBlogs {
        blogs {
          createdAt
          excerpt
          id
          publishedAt
          slug
          title
          updatedAt
          image {
            url
          }
          category {
            label
            slug
          }
          author {
            name
            avatar {
              url
            }
          }
        }
      }
    `;
    try {
      const result = await request(graphqlAPI, query);
      return result.blogs as IEntity.Blogs;
    } catch (error) {
      console.error("Error fetching blogs:", error);
      throw error;
    }
  },
  async getLatestBlogs(): Promise<IEntity.Blogs> {
    const query = gql`
      query GetLatestBlogs {
        blogs(last: 2) {
          createdAt
          id
          slug
          title
          image {
            url
          }
          category {
            label
            slug
          }
          author {
            name
            avatar {
              url
            }
          }
        }
      }
    `;
    try {
      const result = await request(graphqlAPI, query);
      return result.blogs as IEntity.Blogs;
    } catch (error) {
      console.error("Error fetching latest blogs:", error);
      throw error;
    }
  },
};
