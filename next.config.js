const { withUniformConfig } = require("@uniformdev/canvas-next-rsc/config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "*" }, // any image hosts are welcome
      { protocol: "https", hostname: "unresolved" }, // For cases where the data obtained are unresolved
    ],
    deviceSizes: [320, 420, 640, 768, 1024, 1280, 1536],
  },
};

module.exports = withUniformConfig(nextConfig);
