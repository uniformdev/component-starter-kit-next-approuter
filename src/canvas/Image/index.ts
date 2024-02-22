import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import type { Asset } from '@uniformdev/assets';
import { Image } from './Image';

export type ImageProps = ComponentProps<{
  src: string | Asset | Types.CloudinaryImage;
  width?: string;
  height?: string;
  alt?: string;
  fill?: boolean;
  quality?: number;
  priority?: boolean;
  overlayColor?: Types.AvailableColor;
  overlayOpacity?: Types.AvailableOpacity;
  borderColor?: Types.AvailableColor;
  borderWidth?: string;
  borderRadius?: Types.AvailableBorderRadius;
  objectFit?: Types.AvailableObjectFit;
}>;

export const imageMappings = {
  image: Image,
};

export default Image;
