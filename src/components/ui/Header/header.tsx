import { FC } from 'react';
import dynamic from 'next/dynamic';
import { cn } from '@/utils/styling';
import { HeaderProps } from './';
import { DesktopHeader } from './desktop';

const MobileHeader = dynamic(() => import('./mobile').then(mod => mod.MobileHeader));

export const Header: FC<HeaderProps> = ({ sticky, ...headerProps }) => (
  <header className={cn({ 'sticky top-0 shadow z-10': sticky })}>
    <div className="hidden lg:block">
      <DesktopHeader {...headerProps} />
    </div>

    <div className="block lg:hidden">
      <MobileHeader {...headerProps} />
    </div>
  </header>
);
