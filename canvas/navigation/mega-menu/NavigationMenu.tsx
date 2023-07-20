import { FC } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { ComponentProps, UniformSlot, registerUniformComponent } from '@uniformdev/canvas-next-rsc';

type NavigationMenuProps = ComponentProps<{
  title: string;
  link: Types.ProjectMapLink;
}>;

const NavigationMenu: FC<NavigationMenuProps> = ({ link, title, component, context }) => (
  <li tabIndex={0}>
    <Link className={classNames('!rounded-none')} href={link?.path || '#'}>
      {title}
      <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
      </svg>
    </Link>
    <ul className="w-max bg-primary text-white -right-6 !rounded-none z-40">
      <UniformSlot
        name="content"
        data={component}
        context={context}
      />
    </ul>
  </li>
)

registerUniformComponent({
  type: 'navigationMenu',
  component: NavigationMenu,
});
