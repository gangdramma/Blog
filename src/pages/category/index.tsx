import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { IEntity } from "src/interfaces/blogs";
import Layout from "src/layout/layout";
import { BlogService } from "src/services/blog.service";

const CategoryPage = ({
  categories,
  query,
}: CategoryPageProps & { query: any }) => {
  const router = useRouter();
  return (
    <Layout>
      <Head>
        <title>{query.slug ? `Category: ${query.slug}` : "Categories"}</title>
      </Head>
      <Box
        width={{ xs: "100%", md: "80%" }}
        height={{ xs: "30vh", md: "50vh" }}
        marginX="auto"
        marginTop={"10vh"}
        borderRadius="8px"
        rowGap={"10px"}
        sx={{
          background: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h3">All Categories</Typography>
        <ButtonGroup variant="contained" aria-label="Basic button group">
          {categories.map((category) => (
            <Button
              onClick={() => router.push(`/category/${category.slug}`)}
              key={category.slug}
            >
              # {category.label}
            </Button>
          ))}
        </ButtonGroup>
      </Box>
    </Layout>
  );
};

export default CategoryPage;

export const getServerSideProps: GetServerSideProps<
  CategoryPageProps & { query: any }
> = async ({ query }) => {
  const categories = await BlogService.getCategories();
  return {
    props: { categories, query },
  };
};

interface CategoryPageProps {
  categories: IEntity.Categories[];
}
