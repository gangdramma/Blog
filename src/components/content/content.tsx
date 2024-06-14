import { Avatar, Box, Divider, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { format } from "date-fns";

const Content = () => {
  return (
    <Box width={{ xs: "100%", md: "70%" }}>
      <Box
        sx={{
          backgroundColor: "rgba(0, 0, 0, .5)",
          padding: "20px",
          marginTop: "20px",
          borderRadius: "8px",
        }}
      >
        <Box
          position={"relative"}
          width={"100%"}
          height={{ xs: "30vh", md: "50vh" }}
        >
          <Image
            fill
            src={
              "https://platinumlist.net/guide/wp-content/uploads/2023/03/8359_img_worlds_of_adventure-big1613913137.jpg-1024x683.webp"
            }
            alt={"platinumlist.net"}
            style={{ objectFit: "cover", borderRadius: "10px" }}
          />
        </Box>
        <Typography variant="h4" marginTop={"30px"}>
          Title
        </Typography>
        <Typography variant="body1" color={"gray"}>
          description
        </Typography>
        <Divider sx={{ marginTop: "30px" }} />
        <Box sx={{ display: "flex", gap: "10px", marginTop: "20px" }}>
          <Avatar
            alt={""}
            src={
              "https://platinumlist.net/guide/wp-content/uploads/2023/03/8359_img_worlds_of_adventure-big1613913137.jpg-1024x683.webp"
            }
          />
          <Box>
            <Typography>Author name</Typography>
            <Box color={"gray"}>
              {format(new Date(), "dd MMM, yyyy")} &#x2022; 5min read
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Content;
