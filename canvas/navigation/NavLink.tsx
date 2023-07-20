import { FC } from 'react';
import Link from 'next/link';
import { ComponentProps, UniformSlot } from '@uniformdev/canvas-next-rsc';

import classNames from 'classnames';

type LinkProps = ComponentProps<{
  title: string;
  link: Types.ProjectMapLink;
}>;

export const FooterLink: FC<LinkProps> = ({ title, link }) => (
  <Link href={link?.path || '#'} className="link text-secondary-content font-bold link-hover">
    {title}
  </Link>
);

export const HeaderLink: FC<LinkProps> = ({ title, link }) => {

  return (
    <li>
      <Link className={classNames('!rounded-none')} href={link?.path || '#'}>
        {title}
      </Link>
    </li>
  );
};

export const NavigationGroup: FC<LinkProps> = ({ title, link, component, context }) => {
  return (
    <li tabIndex={0}>
      <Link className={classNames('!rounded-none')} href={link?.path || '#'}>
        {title}
        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
          <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
        </svg>
      </Link>
      <ul className="p-2 bg-primary !rounded-none z-50">
        <UniformSlot
          name="subNavItems"
          data={component}
          context={context}
        />
      </ul>
    </li>
  );
};