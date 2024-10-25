import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env : {
    NEXT_APP_API_KEY: process.env.NEXT_APP_API_KEY
  }
};

export default nextConfig;
