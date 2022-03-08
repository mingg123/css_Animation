/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  cssModules: true,
  images: {
    loader: 'akamai',
    path: '/',
  },
};

const withSass = require('@zeit/next-sass');
module.exports = withSass;
module.exports = nextConfig;
