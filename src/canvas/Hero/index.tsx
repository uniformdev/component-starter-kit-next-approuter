import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { withoutContainer } from '../../hocs/withoutContainer';
import { BaseHeroProps } from '../../components/BaseHero';
import Hero from './Hero';

export { BaseHeroVariant as HeroVariant } from '../../components/BaseHero';

export type HeroProps = ComponentProps<
  BaseHeroProps & {
    primaryButtonCopy: string;
    primaryButtonLink: Types.ProjectMapLink;
    primaryButtonStyle: Types.ButtonStyles;
    primaryButtonAnimationType?: Types.AnimationType;
    secondaryButtonCopy: string;
    secondaryButtonLink: Types.ProjectMapLink;
    secondaryButtonStyle: Types.ButtonStyles;
    secondaryButtonAnimationType?: Types.AnimationType;
  }
>;

export const heroMappings = {
  hero: withoutContainer(Hero),
};

export default withoutContainer(Hero);
