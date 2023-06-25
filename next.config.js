/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scontent-muc2-1.xx.fbcdn.net",
      },
    ],
  },
};

module.exports = nextConfig;
