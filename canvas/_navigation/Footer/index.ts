import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { Footer } from './Footer';
import { registerUniformComponent } from '@/canvas/compat';

type Styles = {
  container?: string;
  footerSection?: string;
  buildTimestamp?: string;
};

export type FooterProps = ComponentProps<{
  logo: string | Types.CloudinaryImage;
  displayBuildTimestamp?: boolean;
  copyright: string;
  footerText?: string;
  styles?: Styles;
}>;

export const footerMapping = registerUniformComponent({
  type: 'footer',
  component: Footer,
});

export default Footer;
