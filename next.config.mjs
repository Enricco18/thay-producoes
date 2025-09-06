/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "public-tv-productions.s3.sa-east-1.amazonaws.com",
      "d21xr4iz978gd2.cloudfront.net",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "public-tv-productions.s3.sa-east-1.amazonaws.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "d21xr4iz978gd2.cloudfront.net",
        port: "",
        pathname: "/**",
      },
    ],
    unoptimized: false,
  },
};

export default nextConfig;
