import { FC } from 'react';
import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { CardBlockCarousel } from './CardBlockCarousel';
import { CardBlockDefault } from './CardBlock';
import { registerUniformComponent } from '@/canvas/compat';

type Styles = {
  container?: string;
  title?: string;
  description?: string;
};

export type CardBlockProps = ComponentProps<{
  title: string;
  description?: string;
  titleStyle: Types.HeadingStyles;
  buttonCopy: string;
  buttonLink: Types.ProjectMapLink;
  buttonStyle: Types.ButtonStyles;
  buttonAnimationType?: Types.AnimationType;
  textColorVariant?: Types.AvailableTextColorVariant;
  styles?: Styles;
}, 'cardBlockInner'>;

export enum CardBlockVariants {
  Carousel = 'carousel',
}

const CardBlock: FC<CardBlockProps> = props => {
  const { variant } = props.component || {};
  switch (variant) {
    case CardBlockVariants.Carousel:
      return <CardBlockCarousel {...props} />;
    default:
      return <CardBlockDefault {...props} />;
  }
};

export const cardBlockMappings = [undefined, CardBlockVariants.Carousel].map(variantId => {
  return registerUniformComponent({
    type: 'cardBlock',
    component: CardBlock,
    variantId,
  });
});

export default CardBlock;
