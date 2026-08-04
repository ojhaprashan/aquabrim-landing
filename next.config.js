/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        // CMS-uploaded images (served by the API in local development).
        protocol: 'http',
        hostname: 'localhost',
        port: '5000',
      },
    ],
  },
}

module.exports = nextConfig