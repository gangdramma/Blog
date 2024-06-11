import { Box } from "@mui/material";
import React from "react";
import { Footer, Navbar } from "src/components";
import { IEntity } from "./layout.props";

const Layout = ({ children }: IEntity.LayoutProps): JSX.Element => {
  return (
    <>
      <Navbar />
      <Box minHeight={"90vh"}>{children}</Box>
      <Footer />
    </>
  );
};

export default Layout;
