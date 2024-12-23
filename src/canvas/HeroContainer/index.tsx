import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { BaseHeroProps } from '../../components/BaseHero';
import { withoutContainer } from '../../hocs/withoutContainer';
import HeroContainer from './HeroContainer';

export { BaseHeroVariant as HeroContainerVariant } from '../../components/BaseHero';
export type HeroContainerProps = ComponentProps<BaseHeroProps, 'buttonsSection'>;

export const heroContainerMappings = {
  heroContainer: withoutContainer(HeroContainer),
};

export default withoutContainer(HeroContainer);
