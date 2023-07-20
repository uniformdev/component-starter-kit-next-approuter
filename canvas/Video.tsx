import { FC } from 'react';
import { registerUniformComponent, ComponentProps } from '@uniformdev/canvas-next-rsc';
import { CustomReactPlayer } from '@/components/ReactPlayer';

export type VideoProps = ComponentProps<{
  url: Types.ProjectMapLink;
  loop?: boolean;
  controls: boolean;
  lazyLoad?: boolean;
  placeholderImage?: string;
  muted: boolean;
}>;

const ASPECT_RATION_PADDING = '56.25%';

const Video: FC<VideoProps> = ({
  url,
  loop,
  controls,
  lazyLoad,
  placeholderImage,
  muted
}) => {
  return (
    <div className="border-2 border-white group/video relative">
      {url && (
        <div style={{ paddingBottom: ASPECT_RATION_PADDING }}>
          <CustomReactPlayer
            url={url.path}
            muted={muted}
            loop={loop}
            controls={controls}
            lazyLoad={lazyLoad ? { placeholderImage } : false}
          />
        </div>
      )}
    </div>
  );
};

registerUniformComponent({
  type: 'video',
  component: Video,
});

export default Video;
