import { Box } from "@mui/material";
import { GetServerSideProps } from "next";
import Head from "next/head";
import React from "react";
import { Content } from "src/components";
import { IEntity } from "src/interfaces/blogs";
import Layout from "src/layout/layout";
import { BlogService } from "src/services/blog.service";

const BlogPage = ({ blogs, query }: BlogPageProps & { query: any }) => {
  return (
    <Layout>
      <Head>
        <title>{query.slug ? `${query.slug}` : "Blogs"}</title>
      </Head>
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          padding: "20px",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
        }}
      >
        <Content blogs={blogs} />
      </Box>
    </Layout>
  );
};

export default BlogPage;

export const getServerSideProps: GetServerSideProps<
  BlogPageProps & { query: any }
> = async ({ query }) => {
  const blogs = await BlogService.getAllBlogs();
  return {
    props: { blogs, query },
  };
};

interface BlogPageProps {
  blogs: IEntity.Blog[];
}
