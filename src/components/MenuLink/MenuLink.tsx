'use client';

import { FC } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import Image from '../Image';
import { MenuLinkProps, NavigationOneColumnMenuLinkVariant } from '.';
import { checkIsCurrentRoute } from './helpers';

const MenuLink: FC<MenuLinkProps> = ({ link, title, description, imageUrl, variant, context }) => {
  const isCurrentRoute = checkIsCurrentRoute(link?.path, context);

  return (
    <Link className={classNames('!rounded-none')} href={link?.path || '#'}>
      <div className="py-2">
        <div
          className={classNames('flex items-center justify-between', {
            'flex-row-reverse !justify-end gap-2': variant === NavigationOneColumnMenuLinkVariant.IconLeft,
          })}
        >
          <div>
            <p className={classNames({ 'font-extrabold': isCurrentRoute })}>{title}</p>
            {Boolean(description) && <p className="text-xs max-w-[150px] whitespace-break-spaces">{description}</p>}
          </div>
          {imageUrl && (
            <div className="flex items-center justify-center mt-1 rounded-md w-11">
              <Image width={100} height={100} alt="icon" className="w-10 h-10 text-indigo-50 " src={imageUrl} />
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default MenuLink;
