import { FC } from 'react';
import { FooterLink, HeaderLink, LinkProps, LinkVariant } from '.';

export const NavigationLink: FC<LinkProps> = props => {
  const { variant } = props?.component || {};

  switch (variant) {
    case LinkVariant.Header:
      return <HeaderLink {...props} />;
    case LinkVariant.Footer:
      return <FooterLink {...props} />;
    default:
      return <HeaderLink {...props} />;
  }
};
