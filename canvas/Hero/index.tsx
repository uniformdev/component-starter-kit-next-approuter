import { FC } from 'react';
import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { withoutContainer } from '../../hocs/withoutContainer';
import { ContainerProps } from '../../components/Container';
import { HeroSideImage } from './HeroSideImage';
import { HeroBackgroundImage } from './HeroBackgroundImage';
import { HeroTwoColumns } from './HeroTwoColumns';
import { HeroDefault } from './Hero';
import { registerUniformComponent } from '@/canvas/compat';

type Styles = {
  eyebrowText?: string;
  title?: string;
  description?: string;
  descriptionSeparator?: string;
  sideImage?: string;
  textAlign?: string;
};

export type HeroProps = ComponentProps<
  ContainerProps & {
    eyebrowText: string;
    title: string;
    titleStyle: Types.HeadingStyles;
    description: string;
    image?: string;
    video?: string;
    primaryButtonCopy: string;
    primaryButtonLink: Types.ProjectMapLink;
    primaryButtonStyle: Types.ButtonStyles;
    primaryButtonAnimationType?: Types.AnimationType;
    secondaryButtonCopy: string;
    secondaryButtonLink: Types.ProjectMapLink;
    secondaryButtonStyle: Types.ButtonStyles;
    secondaryButtonAnimationType?: Types.AnimationType;
    overlayColor?: Types.AvailableColor;
    overlayOpacity?: Types.AvailableOpacity;
    objectFit?: Types.AvailableObjectFit;
    useCustomTextElements?: boolean;
    fullHeight?: boolean;
    animationType?: Types.AnimationType;
    animationOrder?: Types.AnimationOrder;
    duration?: Types.DurationType;
    textColorVariant: Types.AvailableTextColorVariant;
    delay?: Types.AnimationDelay;
    animationPreview?: boolean;
    styles?: Styles;
  }
>;

export enum HeroVariant {
  ImageLeft = 'imageLeft',
  ImageRight = 'imageRight',
  BackgroundImage = 'backgroundImage',
  TwoColumns = 'twoColumns',
}

const Hero: FC<HeroProps> = props => {
  const { variant } = props.component || {};
  switch (variant) {
    case HeroVariant.ImageRight:
    case HeroVariant.ImageLeft:
      return <HeroSideImage {...props} />;
    case HeroVariant.BackgroundImage:
      return <HeroBackgroundImage {...props} />;
    case HeroVariant.TwoColumns:
      return <HeroTwoColumns {...props} />;
    default:
      return <HeroDefault {...props} />;
  }
};

export const heroMappings = [undefined, HeroVariant.ImageLeft, HeroVariant.ImageRight, HeroVariant.BackgroundImage, HeroVariant.TwoColumns].map(
  variantId => {
    return registerUniformComponent({
      type: 'hero',
      component: withoutContainer(Hero),
      variantId,
    });
  }
);

export default withoutContainer(Hero);
