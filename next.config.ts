import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
  devIndicators: false,
  images: {
    domains: [
      "https://finrqcfnemqyeqnrksig.supabase.co",
      "https://finrqcfnemqyeqnrksig.storage.supabase.co",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "finrqcfnemqyeqnrksig.storage.supabase.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "finrqcfnemqyeqnrksig.supabase.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
