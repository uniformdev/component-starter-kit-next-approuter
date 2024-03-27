import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import type { Asset } from '@uniformdev/assets';
import { withoutContainer } from '../../../hocs/withoutContainer';
import { Header } from './Header';

export type HeaderProps = ComponentProps<
  {
    logo?: string | Asset | Types.CloudinaryImage;
    theme: string;
    linksAlignment: Types.HorizontalAlignment;
  },
  'links' | 'iconLinks'
>;

export enum HeaderVariants {
  Light = 'light',
}

export const headerMappings = {
  header: withoutContainer(Header),
};

export default withoutContainer(Header);
export * from './decorator';
