/** @type {import('next').NextConfig} */

const withImages = require('next-images');

const exportImages = withImages({
  esModule: true,
  webpack(config, options) {
    return config;
  },
});

const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  exportImages,
};

module.exports = nextConfig;
