import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { CardThing } from './Card';
import { registerUniformComponent } from '@/canvas/compat';
import { CardVariants } from './helpers';

type Styles = {
  title?: string;
  description?: string;
  container?: string;
  image?: string;
  cardBody?: string;
};

export type CardProps = ComponentProps<{
  image: string | Types.CloudinaryImage;
  badge?: string;
  badgeStyle?: Types.BadgeStyles;
  badgeSize?: Types.BadgeSize;
  title: string;
  description: string;
  buttonCopy?: string;
  buttonLink?: Types.ProjectMapLink;
  buttonStyle: Types.ButtonStyles;
  buttonAnimationType?: Types.AnimationType;
  lineCountRestriction: Types.AvailableMaxLineCount;
  useCustomTextElements?: boolean;
  overlayColor?: Types.AvailableColor;
  overlayOpacity?: Types.AvailableOpacity;
  objectFit?: Types.AvailableObjectFit;
  textColorVariant?: Types.AvailableTextColorVariant;
  animationType?: Types.AnimationType;
  duration?: Types.DurationType;
  delay?: Types.AnimationDelay;
  animationPreview?: boolean;
  styles?: Styles;
}>;

export const cardMappings = [undefined, CardVariants.BackgroundImage, CardVariants.Featured].map(variantId => {
  return registerUniformComponent({
    type: 'card',
    component: CardThing,
    variantId,
  });
});
