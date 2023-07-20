import { registerUniformComponent } from '@uniformdev/canvas-next-rsc';
import { FooterLink, HeaderLink, NavigationGroup } from './navigation/NavLink';
import AccordionItem from './AccordionItem';
import { AddToCart } from './AddToCart';

import './Accordion';
import './Banner';
import './Breadcrumbs';
import './CallToAction';
import './Card';
import './CardBlock';
import './ContentBlock';
import './Carousel';
import './Divider';
import './Feature';
import './FeaturedCallout';
import './Hero';
import './Image';
import './Spacer';
import './RichText';
import './Review';
import './Video';
import './Page';
import './Price';
import './navigation/Footer';
import './navigation/FooterSection';
import './navigation/Header';
import './navigation/IconLink';
import './navigation/NavLink';
import './navigation/mega-menu/NavigationMenu';
import './navigation/mega-menu/NavigationOneColumnMenuLink';
import './navigation/mega-menu/NavigationOneColumnMenu';
import './navigation/mega-menu/NavigationMenuSectionLink';
import './navigation/mega-menu/NavigationMenuSection';
import './navigation/mega-menu/NavigationTwoColumnMenu';
import './containers/Container';
import './containers/FlexContainer';
import './containers/GridContainer';
import './containers/Grid';
import './containers/GridItem';
import './containers/SectionOneColumn';
import './containers/SectionTwoColumns';

registerUniformComponent({
  type: 'navigationLink',
  component: HeaderLink,
});

registerUniformComponent({
  type: 'navigationLink',
  component: FooterLink,
  variantId: 'footer',
});

registerUniformComponent({
  type: 'navigationLink',
  component: HeaderLink,
  variantId: 'header',
});

registerUniformComponent({
  type: 'navigationGroup',
  component: NavigationGroup,
});

registerUniformComponent({
  type: 'accordionItem',
  component: AccordionItem,
});

registerUniformComponent({
  type: 'addToCart',
  component: AddToCart,
});