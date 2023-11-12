import { FC } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { LinkProps } from '.';
import { checkIsCurrentRoute } from './helpers';

export const HeaderLink: FC<LinkProps> = ({ title, link, styles, context }) => {
  const isCurrentRoute = checkIsCurrentRoute(link?.path, context);
  return (
    <li>
      <Link
        className={classNames('!rounded-none', styles?.link, {
          'font-extrabold': isCurrentRoute,
          [styles?.activeLink || '']: isCurrentRoute,
        })}
        href={link?.path || '#'}
      >
        {title}
      </Link>
    </li>
  );
};
