import { FC } from 'react';
import LinkItem from '../../../components/LinkItem';
import { checkIsCurrentRoute } from './helpers';
import { LinkProps } from '.';

export const HeaderLink: FC<LinkProps> = ({ title, link, icon, hideIconBackground, styles, color, context }) => {
  const isCurrentRoute = checkIsCurrentRoute(link?.path, context);
  return (
    <li tabIndex={0}>
      <LinkItem
        icon={icon}
        isCurrentRoute={isCurrentRoute}
        title={title}
        hideIconBackground={hideIconBackground}
        color={color}
        styles={styles}
        link={link}
      />
    </li>
  );
};
