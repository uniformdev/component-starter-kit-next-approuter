import { FC } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import Image from '../../../components/Image';
import { UniformSlot } from '@uniformdev/canvas-next-rsc/component';
import { ScreenContainer } from '../../../components/Container';
import { getMediaUrl } from '../../../utilities';
import { getHeaderColor, getLinksAlignment } from './helpers';
import { MobileView } from './MobileView';
import { HeaderProps } from '.';

export const Header: FC<HeaderProps> = ({ logo, component, linksAlignment, context, slots }) => (
  <header className={classNames('text-primary-content relative', getHeaderColor(component.variant))}>
    <ScreenContainer>
      <div className="navbar px-0">
        <div className="navbar-start w-full">
          <div className="lg:hidden">
            <MobileView
              context={context}
              slots={slots}
              component={component}
              wrapperClassName={getHeaderColor(component.variant)}
              logo={
                <Link className="ml-8 lg:ml-0" href={`/`}>
                  <Image src={getMediaUrl(logo)} width="270" height="43" alt="Uniform" />
                </Link>
              }
            />
          </div>
          <Link className="ml-8 lg:ml-0" href={`/`}>
            <Image src={getMediaUrl(logo)} width="270" height="43" alt="Uniform" />
          </Link>
          <div className={classNames('hidden lg:flex w-full', getLinksAlignment(linksAlignment))}>
            <ul className="menu menu-horizontal px-1 py-0 shrink-0">
              <UniformSlot context={context} slot={slots.links} data={component} />
            </ul>
          </div>
        </div>
        <div className="hidden md:flex gap-x-2">
          <UniformSlot context={context} slot={slots.iconLinks} data={component} />
        </div>
      </div>
    </ScreenContainer>
  </header>
);
