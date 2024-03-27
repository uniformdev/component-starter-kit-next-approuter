import {
  createPreviewGETRouteHandler,
  createPreviewOPTIONSRouteHandler,
  createPreviewPOSTRouteHandler,
} from '@uniformdev/canvas-next-rsc/handler';

export const GET = createPreviewGETRouteHandler({
  playgroundPath: '/playground',
});
export const POST = createPreviewPOSTRouteHandler();
export const OPTIONS = createPreviewOPTIONSRouteHandler();
