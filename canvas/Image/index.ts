import { Image } from './Image';
import { registerUniformComponent } from '@/canvas/compat';

export type ImageProps = {
  src: string | Types.CloudinaryImage;
  width: number;
  height: number;
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
};

export const imageMapping = registerUniformComponent({
  type: 'image',
  component: Image,
});

export default Image;
