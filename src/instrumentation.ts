export async function register() {
  if (process.env.NEXT_RUNTIME !== 'nodejs') return;
  const { applyGlobalProxy } = await import('@uniformdev/csk-cli/proxy-fetch');
  applyGlobalProxy();
}
