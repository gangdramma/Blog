export namespace IEntity {
  export interface Blog {
    createdAt: Date;
    excerpt: string;
    id: string;
    publishedAt: string;
    slug: string;
    title: string;
    updatedAt: string;
    image: {
      url: string;
    };
    category: {
      label: string;
      slug: string;
    };
    author: {
      name: string;
      avatar: {
        url: string;
      };
    };
    description: {
      html: string;
      text: string;
    };
  }
  export interface Categories {
    label: string;
    slug: string;
  }

  export type Blogs = Blog[];
}
