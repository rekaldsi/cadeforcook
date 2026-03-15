import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "run.imgix.net",
      },
      {
        protocol: "https",
        hostname: "*.imgix.net",
      },
    ],
  },
};

export default nextConfig;
