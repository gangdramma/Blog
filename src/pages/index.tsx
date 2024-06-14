import { Box } from "@mui/material";
import { GetServerSideProps } from "next";
import Head from "next/head";
import React from "react";
import { Content, Sidebar } from "src/components";
import { IEntity } from "src/interfaces/blogs";
import Layout from "src/layout/layout";
import { BlogService } from "src/services/blog.service";

const IndexPage = ({ blogs, LatestBlogs }: HomePageProps) => {
  console.log(LatestBlogs);
  return (
    <>
      <Layout>
        <Head>
          <title>Blog Main</title>
        </Head>
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            padding: "20px",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Sidebar LatestBlogs={LatestBlogs} />
          <Content blogs={blogs} />
        </Box>
      </Layout>
    </>
  );
};

export default IndexPage;

export const getServerSideProps: GetServerSideProps<
  HomePageProps
> = async () => {
  const blogs = await BlogService.getAllBlogs();
  const LatestBlogs = await BlogService.getLatestBlogs();
  return {
    props: {
      blogs,
      LatestBlogs,
    },
  };
};

interface HomePageProps {
  blogs: IEntity.Blogs;
  LatestBlogs: IEntity.Blog[];
}
