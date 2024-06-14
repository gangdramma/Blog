import { Avatar, Box, Divider, Typography } from "@mui/material";
import { GetServerSideProps } from "next";
import Head from "next/head";
import React from "react";
import Image from "next/image";
import { Sidebar } from "src/components";
import { IEntity } from "src/interfaces/blogs";
import Layout from "src/layout/layout";
import { BlogService } from "src/services/blog.service";
import { calculateTime } from "src/helpers/time";
import { format } from "date-fns";

const Details = ({
  blog,
  LatestBlogs,
  categories,
  query,
}: DetailedBlogProps & { query: any }) => {
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
        <Box width={{ xs: "100%", md: "70%" }}>
          <Box
            sx={{
              backgroundColor: "black",
              padding: "20px",
              boxShadow: "0px 8px 16px rgba(255, 255, 255, .1)",
              borderRadius: "8px",
            }}
            position={"relative"}
            width={"100%"}
            height={{ xs: "30vh", md: "50vh" }}
          >
            <Image
              fill
              src={blog.image.url}
              alt={blog.title}
              style={{ objectFit: "cover", borderRadius: "10px" }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              rowGap: "10px",
              flexDirection: "column",
              marginTop: "20px",
            }}
          >
            <Box sx={{ display: "flex", gap: "10px", marginTop: "20px" }}>
              <Avatar alt={blog.title} src={blog.author.avatar.url} />
              <Box>
                <Typography>{blog.author.name}</Typography>
                <Box color={"gray"}>
                  {format(blog.createdAt, "dd MMM, yyyy")} &#x2022;{" "}
                  {calculateTime(blog.description.html)} min read
                </Box>
              </Box>
            </Box>
            <Typography variant="h3" marginTop={"5px"}>
              {blog.title}
            </Typography>
            <Typography color={"gray"}>{blog.excerpt}</Typography>
            <Divider />
            <div
              dangerouslySetInnerHTML={{ __html: blog.description.html }}
              style={{ opacity: ".8" }}
            />
          </Box>
        </Box>
        <Sidebar LatestBlogs={LatestBlogs} categories={categories} />
      </Box>
    </Layout>
  );
};

export default Details;

export const getServerSideProps: GetServerSideProps<
  DetailedBlogProps
> = async ({ query }) => {
  const blog = await BlogService.getDetails(query.slug as string);
  const LatestBlogs = await BlogService.getLatestBlogs();
  const categories = await BlogService.getCategories();
  return {
    props: {
      blog,
      LatestBlogs,
      categories,
      query,
    },
  };
};

interface DetailedBlogProps {
  blog: IEntity.Blog;
  LatestBlogs: IEntity.Blog[];
  categories: IEntity.Categories[];
}
