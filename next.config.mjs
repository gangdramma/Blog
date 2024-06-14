/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "vividreal.com",
      "platinumlist.net",
      "us-east-1-shared-usea1-02.graphassets.com",
    ],
  },
  env: {
    HYGRAPH_ENDPOINT: process.env.HYGRAPH_ENDPOINT,
  },
};

export default nextConfig;
