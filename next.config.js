/** @type {import('next').NextConfig} */
const nextConfig = {
  api: {
    bodyParser: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
