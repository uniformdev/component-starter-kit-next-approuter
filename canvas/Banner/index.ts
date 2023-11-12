import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { withoutContainer } from '../../hocs/withoutContainer';
import { Banner } from './Banner';
import { registerUniformComponent } from '@/canvas/compat';
import { BannerVariant } from './helpers';

export type BannerProps = ComponentProps<{
  title: string;
  description: string;
  icon: string;
  inline: boolean;
  textAlign: Types.HorizontalAlignment;
  position: Types.AvailableBannerPosition;
  primaryButtonCopy: string;
  primaryButtonLink: Types.ProjectMapLink;
  primaryButtonStyle: Types.ButtonStyles;
  primaryButtonAnimationType?: Types.AnimationType;
  secondaryButtonCopy: string;
  secondaryButtonLink: Types.ProjectMapLink;
  secondaryButtonStyle: Types.ButtonStyles;
  secondaryButtonAnimationType?: Types.AnimationType;
}>;

export const bannerMappings = [undefined, BannerVariant.FullWidth].map(variantId => {
  return registerUniformComponent({
    type: 'banner',
    component: withoutContainer(Banner),
    variantId,
  });
});

export default withoutContainer(Banner);
