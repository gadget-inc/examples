/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.shopify.com"],
  },
};

const webpack = require("webpack");

module.exports = {
  nextConfig,
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin({ API_KEY: process.env.NEXT_PUBLIC_API_KEY }));
    return config;
  },
};
