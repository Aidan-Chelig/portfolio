/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    swcFileReading: false,
  },
  reactStrictMode: true,
  webpack: (config) => {
    config.experiments.syncWebAssembly = true;
    return config;
  },
};

module.exports = nextConfig;
