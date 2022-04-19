/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.shopify.com"],
  },
};

const webpack = require("webpack");

const { parsed: myEnv } = require("dotenv").config({
  path: ".env",
});

module.exports = {
  nextConfig,
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(myEnv));
    return config;
  },
};
