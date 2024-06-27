/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1504, 1920, 2048, 3840],
    loader: "custom",
    loaderFile: "./src/storyblokImageLoader.js",
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
      {
        protocol: "https",
        hostname: "a.storyblok.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
