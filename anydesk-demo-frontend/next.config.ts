import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:path*', // Öneki "/" olan tüm istekler
        destination: 'http://localhost:8080/:path*', // Backend'e yönlendirilecek
      },
    ];
  },
};

export default nextConfig;
