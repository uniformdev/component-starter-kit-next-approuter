import { applyGlobalProxy } from '@uniformdev/csk-cli/proxy-fetch';

export function registerNodeInstrumentation() {
  applyGlobalProxy();
}
