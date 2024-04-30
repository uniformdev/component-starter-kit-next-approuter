import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import type { Asset } from '@uniformdev/assets';
import { Video } from './Video';

export type VideoProps = ComponentProps<{
  url: Types.ProjectMapLink;
  autoPlay?: boolean;
  loop?: boolean;
  controls: boolean;
  lazyLoad?: boolean;
  placeholderImage?: string | Asset;
  muted: boolean;
}>;

export const videoMappings = {
  video: Video,
};

export default Video;
