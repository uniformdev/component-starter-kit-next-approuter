import { getCanvasClient } from "@uniformdev/canvas-next-rsc";

export const getGlobalComponent = async () => {
  const globalCompositionId = '179bfdf3-be89-4d63-949c-53a58f3eff19';

  const canvasClient = getCanvasClient({
    revalidate: 60
  });

  const {
    composition: globalComponent,
  } = await canvasClient.getCompositionById({
    compositionId: globalCompositionId,
  });

  return globalComponent;
}