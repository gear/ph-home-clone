import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "t3.ftcdn.net",
      },
    ],
  },
  output: "standalone",
  experimental: {
    appDocumentPreloading: true,
  },
  async headers() {
    return [
      {
        source: "/data/:path*",
        headers: [{ key: "Access-Control-Allow-Origin", value: "*" }],
      },
    ];
  },
};

export default nextConfig;
