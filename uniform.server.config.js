/** @type {import('@uniformdev/next-app-router/config').UniformServerConfig} */
module.exports = {
  defaultConsent: true,
  playgroundPath: '/playground',
  experimental: {
    middlewareRuntimeCache: true,
    quirkSerialization: true,
  },
};
