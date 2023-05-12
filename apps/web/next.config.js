// NOTE: Uncomment this when building with docker
// const path = require("path");

const withDocker = {
  // output: "standalone",
  // experimental: {
  //   outputFileTracingRoot: path.join(__dirname, "../../"),
  // },
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...withDocker,
  reactStrictMode: true,
};

module.exports = nextConfig;
