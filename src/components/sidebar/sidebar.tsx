import { Box, Button, Divider, Typography } from "@mui/material";
import React, { Fragment } from "react";
import Image from "next/image";
import { navItems } from "src/config/constants";

const Sidebar = () => {
  return (
    <Box width={{ xs: "100%", md: "30%" }}>
      <Box
        position={"sticky"}
        top={"100px"}
        // border="1px solid gray"
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
            <Box marginTop={"20px"}>
              <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
                <Image
                  src="https://vividreal.com/wp-content/uploads/2020/10/10-Best-Blogging-Platforms-to-Help-You-Get-Content-out-in-the-Wild-2020.jpg"
                  alt="Latest Blog"
                  width={100}
                  height={100}
                  style={{ objectFit: "cover", borderRadius: "8px" }}
                />
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
                >
                  <Typography variant="body1">Latest blog</Typography>
                  <Typography variant="body1" sx={{ opacity: 0.4 }}>
                    info
                  </Typography>
                </Box>
              </Box>
              <Divider sx={{ marginTop: "20px" }} />
            </Box>
            <Box marginTop={"20px"}>
              <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
                <Image
                  src="https://vividreal.com/wp-content/uploads/2020/10/10-Best-Blogging-Platforms-to-Help-You-Get-Content-out-in-the-Wild-2020.jpg"
                  alt="Latest Blog"
                  width={100}
                  height={100}
                  style={{ objectFit: "cover", borderRadius: "8px" }}
                />
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
                >
                  <Typography variant="body1">Latest blog</Typography>
                  <Typography variant="body1" sx={{ opacity: 0.4 }}>
                    info
                  </Typography>
                </Box>
              </Box>
              <Divider sx={{ marginTop: "20px" }} />
            </Box>
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
            {navItems.map((nav) => (
              <Fragment key={nav.route}>
                <Button
                  fullWidth
                  sx={{ justifyContent: "flex-start", height: "50px" }}
                >
                  {nav.label}
                </Button>
              </Fragment>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
