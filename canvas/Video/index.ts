import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { Video } from './Video';
import { registerUniformComponent } from '@/canvas/compat';

export type VideoProps = ComponentProps<{
  url: Types.ProjectMapLink;
  loop?: boolean;
  controls: boolean;
  lazyLoad?: boolean;
  placeholderImage?: string;
  muted: boolean;
}>;

export const videoMapping = registerUniformComponent({
  type: 'video',
  component: Video,
});

export default Video;
