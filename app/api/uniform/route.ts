import {
  createPreviewGETRouteHandler,
  createPreviewPOSTRouteHandler
} from '@uniformdev/canvas-next-rsc/handler';

export const GET = createPreviewGETRouteHandler();
export const POST = createPreviewPOSTRouteHandler();