import { NextConfig } from 'next';
import { withUniformConfig } from '@uniformdev/next-app-router/config';

/** @type {NextConfig} */
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: '*' }],
    deviceSizes: [320, 420, 640, 768, 1024, 1280, 1536],
  },
  cacheComponents: true,
};

export default withUniformConfig(nextConfig);
