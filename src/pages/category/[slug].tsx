import { Box } from "@mui/material";
import { GetServerSideProps } from "next";
import Head from "next/head";
import React from "react";
import { Content, Sidebar } from "src/components";
import { IEntity } from "src/interfaces/blogs";
import Layout from "src/layout/layout";
import { BlogService } from "src/services/blog.service";

const Categories = ({
  blogs,
  LatestBlogs,
  categories,
  query,
}: DetailedCategoryProps & { query: any }) => {
  return (
    <Layout>
      <Head>
        <title>{query.slug}</title>
      </Head>
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          padding: "20px",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Sidebar LatestBlogs={LatestBlogs} categories={categories} />
        <Content blogs={blogs} />
      </Box>
    </Layout>
  );
};

export default Categories;

export const getServerSideProps: GetServerSideProps<
  DetailedCategoryProps & { query: any }
> = async ({ query }) => {
  const blogs = await BlogService.getCategoriesSimple(query.slug as string);
  const LatestBlogs = await BlogService.getLatestBlogs();
  const categories = await BlogService.getCategories();
  return {
    props: {
      blogs,
      LatestBlogs,
      categories,
      query,
    },
  };
};

interface DetailedCategoryProps {
  blogs: IEntity.Blog[];
  LatestBlogs: IEntity.Blog[];
  categories: IEntity.Categories[];
}
