'use client';

import { FC, useState, useCallback } from 'react';
import { UniformSlot } from '@uniformdev/canvas-next-rsc/component';
import LinkItem from '../../../components/LinkItem';
import MobileMenuLayout from '../../../components/MobileMenuLayout';
import { checkIsCurrentRoute } from './helpers';
import { LinkProps } from '.';

export const NavigationGroup: FC<LinkProps> = ({
  title,
  link,
  styles,
  color,
  hideIconBackground,
  icon,
  context,
  slots,
  component,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const isCurrentRoute = checkIsCurrentRoute(link?.path, context);

  const onMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return (
    <li className="h-full relative" tabIndex={0} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className="grow px-0">
        <LinkItem
          icon={icon}
          isCurrentRoute={isCurrentRoute}
          title={title}
          showArrow
          isHovered={isHovered}
          hideIconBackground={hideIconBackground}
          color={color}
          styles={styles}
          link={link}
        />

        {isHovered && (
          <>
            <div className="p-2 bg-primary absolute top-full !rounded-none z-50 !mt-0 [&>*]:w-full [&>*]:min-w-max [&_a]:w-full [&_a]:py-4 hidden lg:block">
              <UniformSlot context={context} slot={slots.subNavItems} data={component} />
            </div>
            <MobileMenuLayout
              content={<UniformSlot context={context} slot={slots.subNavItems} data={component} />}
              onClickBack={onMouseLeave}
            />
          </>
        )}
      </div>
    </li>
  );
};
