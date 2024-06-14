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
          description {
            text
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
          author {
            name
            avatar {
              url
            }
          }
          description {
            text
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
  async getCategories(): Promise<IEntity.Categories[]> {
    const query = gql`
      query getCategories {
        categories {
          slug
          label
        }
      }
    `;
    try {
      const result = await request<{ categories: IEntity.Categories[] }>(
        graphqlAPI,
        query
      );
      return result.categories;
    } catch (error) {
      console.error("Error fetching categories:", error);
      throw error;
    }
  },
  async getDetails(slug: string) {
    const query = gql`
      query getDetails($slug: String) {
        blog(where: { slug: $slug }) {
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
          description {
            html
            text
          }
        }
      }
    `;
    const result = await request<{ blog: IEntity.Blog }>(graphqlAPI, query, {
      slug,
    });
    return result.blog;
  },
};
