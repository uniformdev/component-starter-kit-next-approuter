import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import { getMediaUrl } from '../../../../utilities';
import { NavigationMenuSectionLinkProps, NavigationMenuSectionLinkVariant } from '.';

export const NavigationMenuSectionLink: FC<NavigationMenuSectionLinkProps> = ({
  title,
  link,
  icon,
  description,
  component,
}) => {
  const imageIrl = getMediaUrl(icon);

  return (
    <Link className={classNames('!rounded-none')} href={link?.path || '#'}>
      <div className="py-2">
        <div
          className={classNames('flex items-center justify-between', {
            'flex-row-reverse': component?.variant === NavigationMenuSectionLinkVariant.IconLeft,
          })}
        >
          <div>
            <p className={classNames({ 'font-extrabold': false })}>{title}</p>
            {Boolean(description) && <p className="text-xs max-w-[150px]">{description}</p>}
          </div>
          <div className="flex items-center justify-center mt-1 rounded-md w-11">
            {imageIrl && (
              <Image width={100} height={100} alt="icon" className="w-10 h-10 text-indigo-50 " src={imageIrl} />
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};
