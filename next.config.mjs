/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "clubhouseonhauntedhill.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.xborg.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "uploads-ssl.webflow.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
