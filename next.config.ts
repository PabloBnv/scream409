import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "instagram.fepa8-1.fna.fbcdn.net",
      },
    ],
  },
};

export default nextConfig;