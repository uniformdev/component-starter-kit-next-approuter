'use client';

import { FC, useCallback, useState } from 'react';
import classNames from 'classnames';
import { UniformSlot } from '@uniformdev/canvas-next-rsc/component';
import LinkItem from '../../../components/LinkItem';
import MobileMenuLayout from '../../../components/MobileMenuLayout';
import { checkIsCurrentRoute } from './helpers';
import { LinkProps } from '.';

export const NavigationMenu: FC<LinkProps> = ({
  link,
  title,
  color,
  icon,
  hideIconBackground,
  styles,
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
    <li className="h-full !static" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className="grow px-0">
        <LinkItem
          icon={icon}
          isCurrentRoute={isCurrentRoute}
          title={title}
          isHovered={isHovered}
          showArrow
          hideIconBackground={hideIconBackground}
          color={color}
          styles={styles}
          link={link}
        />

        {isHovered && (
          <>
            <div
              className={classNames(
                'lg:w-full absolute top-full left-0 text-primary-content !bg-transparent  !rounded-none -mt-5 pt-5 z-[60] hidden lg:block'
              )}
            >
              <div className={classNames('bg-white [&>*]:max-w-screen-xl [&>*]:mx-auto')}>
                <UniformSlot context={context} slot={slots.content} data={component} />
              </div>
            </div>

            <MobileMenuLayout
              isMegaMenu
              content={<UniformSlot context={context} slot={slots.content} data={component} />}
              onClickBack={onMouseLeave}
              backgroundType="static"
            />
          </>
        )}
      </div>
    </li>
  );
};
