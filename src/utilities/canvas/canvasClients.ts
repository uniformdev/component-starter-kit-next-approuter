import { CANVAS_PUBLISHED_STATE, CANVAS_DRAFT_STATE } from '@uniformdev/canvas';
import { PageParameters, getDefaultProjectMapClient } from '@uniformdev/canvas-next-rsc';

export const getState = (preview: boolean | undefined) =>
  process.env.NODE_ENV === 'development' || preview ? CANVAS_DRAFT_STATE : CANVAS_PUBLISHED_STATE;

export const getBreadcrumbs = async ({
  compositionId,
  preview,
  dynamicTitle,
  resolvedUrl,
  searchParams,
}: {
  compositionId: string;
  preview: boolean;
  dynamicTitle?: string;
  resolvedUrl?: string;
  searchParams: PageParameters['searchParams'];
}) => {
  const projectMapClient = getDefaultProjectMapClient({
    searchParams,
  });

  const urlSegments = resolvedUrl?.split('/') || [];

  const { nodes: projectMapNodes } = await projectMapClient.getNodes({
    compositionId: compositionId,
    includeAncestors: true,
    state: getState(preview),
  });

  return projectMapNodes?.map((node, index) => {
    const isDynamicPath = Boolean(node.pathSegment?.includes(':'));
    return {
      name: node.name,
      path: isDynamicPath ? urlSegments.slice(0, index + 1).join('/') || '/' : node.path,
      type: node.type,
      isRoot: node.path === '/',
      dynamicInputTitle: (isDynamicPath && dynamicTitle) || null,
    };
  });
};
