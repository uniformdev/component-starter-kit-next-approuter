/** @type {import('@uniformdev/canvas-next-rsc-v2/config').UniformServerConfig} */
module.exports = {
  defaultConsent: true,
  playgroundPath: '/playground',
  experimental: {
    middlewareRuntimeCache: true,
    quirkSerialization: true,
  },
};
