import { ResolveComponentFunction } from "@uniformdev/canvas-next-rsc/component";
import { mapping as pageMapping } from "./Page/Page";
import { mapping as headerMapping } from "./_navigation/Header";
import {
  footerLinkMapping,
  headerLinkMapping,
  navigationGroupMapping,
  navigationLinkMapping,
} from "./_navigation/NavLink";
import { mapping as iconLinkMapping } from "./_navigation/IconLink";
import { heroMappings } from "./Hero";
import { callToActionMappings } from "./CallToAction";
import { featuredCalloutMappings } from "./FeaturedCallout";
import { featureMapping } from "./Feature";
import { cardBlockMappings } from "./CardBlock";
import { gridMapping } from "./_containers/Grid";
import { cardMappings } from "./Card";
import { accordionMapping } from "./Accordion";
import { accordionItemMapping } from "./AccordionItem";
import { breadcrumbMapping } from "./Breadcrumbs";
import { dividerMapping } from "./Divider";
import { containerMappings } from "./_containers/Container";
import { contentMapping } from "./ContentBlock";
import { carouselMappings } from "./Carousel";
import { gridItemMapping } from "./_containers/GridItem";
import { testimonialMappings } from "./Testimonial";
import { priceMapping } from "./Price";
import { addToCartMapping } from "./AddToCart";
import { spacerMappings } from "./Spacer";
import { imageMapping } from "./Image";
import { reviewMappings } from "./Review";
import { productGalleryMappings } from "./ProductGallery";
import { productInfoMapping } from "./ProductInfo";
import { navigationMenuMapping } from "./_navigation/_mega-menu/NavigationMenu";
import { bannerMappings } from "./Banner";
import { richTextMappings } from "./RichText";
import { videoMapping } from "./Video";
import { modalMapping } from "./Modal";
import { buttonMapping } from "./Button";
import { navigationMenuSectionMapping } from "./_navigation/_mega-menu/NavigationMenuSection";
import { navigationMenuSectionLinkMappings } from "./_navigation/_mega-menu/NavigationMenuSectionLink";
import { navigationOneColumnMenuMapping } from "./_navigation/_mega-menu/NavigationOneColumnMenu";
import { navigationOneColumnMenuLinkMappings } from "./_navigation/_mega-menu/NavigationOneColumnMenuLink";
import { navigationTwoColumnsMenuMapping } from "./_navigation/_mega-menu/NavigationTwoColumnMenu";
import { footerMapping } from "./_navigation/Footer";
import { footerSectionMapping } from "./FooterSection";
import { ComponentMapping } from "./compat";

export const resolver: ResolveComponentFunction = ({ component }) => {
  const checkIsMatch = ({
    mapping,
    checkVariant,
  }: {
    mapping: ComponentMapping;
    checkVariant: boolean;
  }) => {
    const isComponentMatch = mapping.type === component.type;
    const isVariantMatch =
      !mapping.variantId || mapping.variantId === component.variant;

    let isMatch = isComponentMatch;

    if (checkVariant) {
      isMatch = isMatch && isVariantMatch;
    }

    return isMatch;
  };

  let foundMapping = mappings.find((m) => {
    return checkIsMatch({
      mapping: m,
      checkVariant: true,
    });
  });

  if (!foundMapping) {
    foundMapping = mappings.find((m) => {
      return checkIsMatch({
        mapping: m,
        checkVariant: false,
      });
    });
  }

  return {
    component: foundMapping?.component || null,
  };
};

const mappings = [
  pageMapping,
  headerMapping,
  footerLinkMapping,
  headerLinkMapping,
  navigationGroupMapping,
  navigationLinkMapping,
  iconLinkMapping,
  ...heroMappings,
  ...callToActionMappings,
  ...featuredCalloutMappings,
  featureMapping,
  ...cardBlockMappings,
  gridMapping,
  ...cardMappings,
  accordionMapping,
  accordionItemMapping,
  breadcrumbMapping,
  dividerMapping,
  ...containerMappings,
  contentMapping,
  ...carouselMappings,
  gridItemMapping,
  ...testimonialMappings,
  priceMapping,
  addToCartMapping,
  ...spacerMappings,
  imageMapping,
  ...reviewMappings,
  ...productGalleryMappings,
  productInfoMapping,
  navigationMenuMapping,
  ...bannerMappings,
  ...richTextMappings,
  videoMapping,
  modalMapping,
  buttonMapping,
  navigationMenuSectionMapping,
  ...navigationMenuSectionLinkMappings,
  navigationOneColumnMenuMapping,
  ...navigationOneColumnMenuLinkMappings,
  navigationTwoColumnsMenuMapping,
  footerMapping,
  footerSectionMapping,
];
