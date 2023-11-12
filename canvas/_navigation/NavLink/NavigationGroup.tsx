import { FC } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { UniformSlot } from '@uniformdev/canvas-next-rsc/component';
import { checkIsCurrentRoute } from './helpers';
import { NavigationGroupProps } from '.';

export const NavigationGroup: FC<NavigationGroupProps> = ({ title, link, styles, context, component, slots }) => {
  const isCurrentRoute = checkIsCurrentRoute(link?.path, context);

  return (
    <li tabIndex={0}>
      <Link
        className={classNames('!rounded-none', styles?.link, {
          'font-extrabold': isCurrentRoute,
          [styles?.activeLink || '']: isCurrentRoute,
        })}
        href={link?.path || '#'}
      >
        {title}
        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
          <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
        </svg>
      </Link>
      <ul className="p-2 bg-primary !rounded-none z-50">
        <UniformSlot
          context={context}
          data={component}
          slot={slots.subNavItems}
        />
      </ul>
    </li>
  );
};
