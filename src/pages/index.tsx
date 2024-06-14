import { Box } from "@mui/material";
import Head from "next/head";
import React from "react";
import { Content, Sidebar } from "src/components";
import Layout from "src/layout/layout";

const IndexPage = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Blog App</title>
        </Head>
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            padding: "20px",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Sidebar />
          <Content />
        </Box>
      </Layout>
    </>
  );
};

export default IndexPage;

// import { Box } from "@mui/material";
// import Head from "next/head";
// import React from "react";
// import { Content, Sidebar } from "src/components";
// import Layout from "src/layout/layout";

// const IndexPage = () => {
//   return (
//     <>
//       <Layout>
//         <Head>
//           <title>Blog App</title>
//         </Head>
//         <Box
//           sx={{
//             display: "flex",
//             gap: "20px",
//             flexDirection: { xs: "column", md: "md" },
//             padding: "20px",
//           }}
//         >
//           <Sidebar />
//           <Content />
//         </Box>
//       </Layout>
//     </>
//   );
// };

// export default IndexPage;
