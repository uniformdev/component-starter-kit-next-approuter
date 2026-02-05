// src/instrumentation.ts
export async function register() {
    if (process.env.NEXT_RUNTIME === "nodejs" && process.env.HTTPS_PROXY) {
      const undici = await import("undici");
      const proxyAgent = new undici.ProxyAgent({
        uri: process.env.HTTPS_PROXY,
      });
      undici.setGlobalDispatcher(proxyAgent);
  
      // Also patch fetch directly since Next.js may override the global dispatcher
      const originalFetch = globalThis.fetch;
      globalThis.fetch = ((input: any, init?: any) => {
        const url = typeof input === "string" ? input : input instanceof URL ? input.toString() : input.url;
        const isLocal = url?.includes("localhost") || url?.includes("127.0.0.1");
  
        if (isLocal) {
          return originalFetch(input, init);
        }
  
        console.log(`[proxy] Proxying: ${url}`);
        return originalFetch(input, { ...init, dispatcher: proxyAgent } as any);
      }) as typeof fetch;
  
      console.log(`[proxy] Global dispatcher + fetch override set in nodejs runtime`);
    }
  }