import { richTextMappings } from './_atoms/RichText';
import { textMappings } from './_atoms/Text';
import { accordionMappings } from './Accordion';
import { accordionItemMappings } from './AccordionItem';
import { addToCartMappings } from './AddToCart';
import { bannerMappings } from './Banner';
import { breadcrumbsMappings } from './Breadcrumbs';
import { buttonMappings } from './Button';
import { callToActionMappings } from './CallToAction';
import { cardMappings } from './Card';
import { countdownMappings } from './Countdown';
import { tabsMappings } from './Tabs';
import { tabMappings } from './Tab';
import { cardBlockMappings } from './CardBlock';
import { carouselMappings } from './Carousel';
import { containerMappings } from './_containers/Container';
import { advancedContainerMappings } from './_containers/AdvancedContainer';
import { boxMappings } from './_containers/Box';
import { gridMappings } from './_containers/Grid';
import { gridItemMappings } from './_containers/GridItem';
import { contentBlockMappings } from './ContentBlock';
import { dividerMappings } from './Divider';
import { featureMappings } from './Feature';
import { featuredCalloutMappings } from './FeaturedCallout';
import { heroMappings } from './Hero';
import { imageMappings } from './Image';
import { tableMappings } from './Table';
import { modalMappings } from './Modal';
import { footerMappings } from './_navigation/Footer';
import { navigationSectionMappings } from './_navigation/NavigationSection';
import { headerMappings } from './_navigation/Header';
import { iconLinkMappings } from './_navigation/IconLink';
import { navigationLinkMappings } from './_navigation/NavLink';
import { priceMappings } from './Price';
import { productDetailsMappings } from './ProductDetails';
import { productInfoMappings } from './ProductInfo';
import { imageGalleryMappings } from './ImageGallery';
import { reviewMappings } from './Review';
import { spacerMappings } from './Spacer';
import { testimonialMappings } from './Testimonial';
import { videoMappings } from './Video';
import { enrichmentSetterMappings } from './EnrichmentSetter';
import { pageMapping } from './Page/Page';

export const baseComponentMappings = {
  ...accordionItemMappings,
  ...accordionMappings,
  ...addToCartMappings,
  ...bannerMappings,
  ...breadcrumbsMappings,
  ...buttonMappings,
  ...callToActionMappings,
  ...cardMappings,
  ...countdownMappings,
  ...enrichmentSetterMappings,
  ...tabsMappings,
  ...tabMappings,
  ...cardBlockMappings,
  ...carouselMappings,
  ...containerMappings,
  ...advancedContainerMappings,
  ...gridMappings,
  ...gridItemMappings,
  ...contentBlockMappings,
  ...boxMappings,
  ...dividerMappings,
  ...featureMappings,
  ...featuredCalloutMappings,
  ...heroMappings,
  ...imageMappings,
  ...tableMappings,
  ...modalMappings,
  ...footerMappings,
  ...navigationSectionMappings,
  ...headerMappings,
  ...iconLinkMappings,
  ...navigationLinkMappings,
  ...priceMappings,
  ...productDetailsMappings,
  ...productInfoMappings,
  ...imageGalleryMappings,
  ...reviewMappings,
  ...richTextMappings,
  ...textMappings,
  ...spacerMappings,
  ...testimonialMappings,
  ...videoMappings,
  ...pageMapping,
};

import { createComponentResolver } from '@/utilities/canvas/componentResolver';

export const componentResolver = createComponentResolver({
  ...baseComponentMappings,
});
