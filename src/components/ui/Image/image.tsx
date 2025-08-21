import { FC } from 'react';
import NextImage from 'next/image';
import { cn, resolveViewPort } from '@/utils/styling';
import { ImageProps } from './';

export const Image: FC<ImageProps> = ({
  containerStyle,
  overlayColor,
  overlayOpacity,
  border = '',
  style: imageStyle,
  ...nextImageStyle
}) => (
  <div className="relative size-full" style={containerStyle}>
    <NextImage
      {...nextImageStyle}
      className={cn({
        [resolveViewPort(border, '{value}')]: border,
      })}
      style={{ ...imageStyle }}
    />
    <div
      className={cn('absolute bottom-0 left-0 right-0 top-0', {
        [`bg-${overlayColor}`]: overlayColor,
        [resolveViewPort(border, '{value}')]: border,
      })}
      style={{ opacity: overlayOpacity || 0 }}
    />
  </div>
);
