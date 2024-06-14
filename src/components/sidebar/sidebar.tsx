import { Avatar, Box, Button, Divider, Typography } from "@mui/material";
import React, { Fragment } from "react";
import Image from "next/image";
import { SidebarProps } from "./sidebar.props";
import { format } from "date-fns";
import { calculateTime } from "src/helpers/time";
import { useRouter } from "next/router";

const Sidebar = ({ LatestBlogs, categories }: SidebarProps) => {
  const router = useRouter();
  return (
    <Box width={{ xs: "100%", md: "30%" }} sx={{ cursor: "pointer" }}>
      <Box
        position={"sticky"}
        top={"100px"}
        sx={{ transition: "all .3s ease", borderRadius: "8px" }}
      >
        <Box
          sx={{
            padding: "20px",
            border: "1px solid #272727",
            borderRadius: "8px",
          }}
        >
          <Typography variant="h5">Latest Blog</Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {LatestBlogs.map((blog) => (
              <Box
                marginTop={"20px"}
                sx={{ cursor: "pointer" }}
                onClick={() => router.push(`/blog/${blog.slug}`)}
              >
                <Box
                  sx={{ display: "flex", gap: "20px", alignItems: "center" }}
                >
                  <Image
                    src={blog.image.url}
                    alt={blog.title}
                    width={100}
                    height={100}
                    style={{ objectFit: "cover", borderRadius: "8px" }}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <Typography variant="body1">{blog.title}</Typography>
                    <Box sx={{ display: "flex", gap: "10px" }}>
                      <Avatar alt={blog.title} src={blog.author.avatar.url} />
                      <Box>
                        <Typography>{blog.author.name}</Typography>
                        <Box color={"gray"}>
                          {format(blog.createdAt, "dd MMM, yyyy")}
                          {/* {calculateTime(blog.description.text)} min read */}
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Divider sx={{ marginTop: "20px" }} />
              </Box>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            padding: "20px",
            border: "1px solid #272727",
            borderRadius: "8px",
            marginTop: "20px",
          }}
        >
          <Typography variant="h5">Category</Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {categories.map((nav) => (
              <Fragment key={nav.slug}>
                {nav.label && (
                  <>
                    <Button
                      fullWidth
                      sx={{ justifyContent: "flex-start", height: "50px" }}
                      onClick={() => {
                        router.push(`/category/${nav.slug}`);
                      }}
                    >
                      {nav.label}
                    </Button>
                    <Divider sx={{ marginTop: "5px" }} />
                  </>
                )}
              </Fragment>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
