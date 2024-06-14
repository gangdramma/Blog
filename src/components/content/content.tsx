import { Avatar, Box, Divider, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { format } from "date-fns";
import { ContentProps } from "./content.props";
import { calculateTime } from "src/helpers/time";
import { useRouter } from "next/router";

const Content = ({ blogs }: ContentProps) => {
  const router = useRouter();
  return (
    <Box width={{ xs: "100%", md: "70%" }}>
      {blogs.map((blog) => (
        <Box
          sx={{
            backgroundColor: "rgba(0, 0, 0, .5)",
            padding: "20px",
            marginTop: "20px",
            borderRadius: "8px",
            cursor: "pointer",
            boxShadow: "0px 8px 16px rgba(255, 255, 255, .1)",
          }}
          onClick={() => router.push(`/blog/${blog.slug}`)}
        >
          <Box
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
          <Typography variant="h4" marginTop={"30px"}>
            {blog.title}
          </Typography>
          <Typography variant="body1" color={"gray"}>
            {blog.excerpt}
          </Typography>
          <Divider />
          <Box sx={{ display: "flex", gap: "10px", marginTop: "20px" }}>
            <Avatar alt={blog.title} src={blog.author.avatar.url} />
            <Box>
              <Typography>{blog.author.name}</Typography>
              <Box color={"gray"}>
                {format(blog.createdAt, "dd MMM, yyyy")} &#x2022;{" "}
                {calculateTime(blog.description.text)} min read
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Content;
