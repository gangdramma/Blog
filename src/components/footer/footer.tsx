import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import React from "react";
import { format } from "date-fns";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <Box
      padding={"20px"}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#272727",
        color: "white",
      }}
    >
      <Typography>
        Copyright © {format(new Date(), "yyyy")} All rights reserved
      </Typography>
      <Box>
        <Button
          sx={{
            backgroundColor: "#272727",
            color: "white",
            "&:hover": {
              backgroundColor: "#272727",
            },
            "&:focus": {
              outline: "none",
            },
          }}
          href="https://t.me/gang_dramma"
        >
          <TelegramIcon />
        </Button>
        <Button
          sx={{
            backgroundColor: "#272727",
            color: "white",
            "&:hover": {
              backgroundColor: "#272727",
            },
            "&:focus": {
              outline: "none",
            },
          }}
          href="https://www.instagram.com/gang_dramma?igsh=MWYyZnZsMXJ5czIxYQ=="
        >
          <InstagramIcon />
        </Button>
        <Button
          sx={{
            backgroundColor: "#272727",
            color: "white",
            "&:hover": {
              backgroundColor: "#272727",
            },
            "&:focus": {
              outline: "none",
            },
          }}
          href="https://github.com/gangdramma"
        >
          <GitHubIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default Footer;
