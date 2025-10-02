import baseCskComponentsMapping from '@uniformdev/csk-components/components/canvas';
import Carousel from './Carousel';
import Footer from './Footer';
import Header from './Header';

export const cskComponentsMapping = {
  ...baseCskComponentsMapping,
  header: Header,
  footer: Footer,
  carousel: Carousel,
};
