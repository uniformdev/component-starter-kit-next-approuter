import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { withoutContainer } from '../../../hocs/withoutContainer';
import { Header } from './Header';
import { registerUniformComponent } from '@/canvas/compat';

type SlotNames = 'links' | 'iconLinks';

export type HeaderProps = ComponentProps<{
  logo: string | Types.CloudinaryImage;
  theme: string;
  linksAlignment: Types.HorizontalAlignment;
}, SlotNames>;

export enum HeaderVariants {
  Light = 'light',
}

export const mapping = registerUniformComponent({
  type: 'header',
  component: withoutContainer(Header),
});

export default withoutContainer(Header);
