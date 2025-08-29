/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["https://public-tv-productions.s3.sa-east-1.amazonaws.com"],
    unoptimized: false,
  },
};

export default nextConfig;
