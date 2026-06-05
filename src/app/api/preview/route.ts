import {
  createPreviewGETRouteHandler,
  createPreviewPOSTRouteHandler,
  createPreviewOPTIONSRouteHandler,
} from '@uniformdev/next-app-router/handler';

export const GET = createPreviewGETRouteHandler();
export const POST = createPreviewPOSTRouteHandler();
export const OPTIONS = createPreviewOPTIONSRouteHandler();
