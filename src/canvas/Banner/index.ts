import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import type { Asset } from '@uniformdev/assets';
import { withoutContainer } from '../../hocs/withoutContainer';
import { Banner } from './Banner';

export type BannerProps = ComponentProps<{
  title: string;
  description: string;
  icon?: string | Asset;
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

export const enum BannerVariant {
  FullWidth = 'fullWidth',
}

export const bannerMappings = {
  banner: withoutContainer(Banner),
};

export default withoutContainer(Banner);
