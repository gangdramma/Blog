import Head from "next/head";
import React from "react";
import { Hero } from "src/components";
import Layout from "src/layout/layout";

const IndexPage = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Blog App</title>
        </Head>
        <Hero />
      </Layout>
    </>
  );
};

export default IndexPage;
