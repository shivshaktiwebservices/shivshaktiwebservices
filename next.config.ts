import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      allowedOrigins: ['192.168.1.11:3000' , 'localhost:3000','http://192.168.1.11:3000'], // adjust port as needed
    },
  },
  allowedDevOrigins: ['192.168.1.11'],
};


export default nextConfig;
