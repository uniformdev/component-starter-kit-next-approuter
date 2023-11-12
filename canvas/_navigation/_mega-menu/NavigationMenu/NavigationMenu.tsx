import { FC } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { UniformSlot } from '@uniformdev/canvas-next-rsc/component';
import { NavigationMenuProps } from '.';

export const NavigationMenu: FC<NavigationMenuProps> = ({
  link,
  title,
  component,
  context,
  slots,
}) => {
  const isCurrentRoute = false;

  return (
    <li tabIndex={0}>
      <Link className={classNames('!rounded-none', { 'font-extrabold': isCurrentRoute })} href={link?.path || '#'}>
        {title}
        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
          <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
        </svg>
      </Link>
      <ul className="w-max bg-primary text-white -right-6 !rounded-none z-40">
        <UniformSlot
          context={context}
          data={component}
          slot={slots.content}
        />
      </ul>
    </li>
  );
};
