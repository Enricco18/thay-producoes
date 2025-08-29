/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["public-tv-productions.s3.sa-east-1.amazonaws.com"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'public-tv-productions.s3.sa-east-1.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
    unoptimized: false,
  },
};

export default nextConfig;
