import { FC, SyntheticEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import { ComponentProps, UniformSlot, registerUniformComponent } from '@uniformdev/canvas-next-rsc';
import { getImageUrl } from '@/utils';
import { HoverContent, ToggleContent, ToggleProvider } from './ToggleContext';

type LinkProps = ComponentProps<{
  title: string;
  link: Types.ProjectMapLink;
  description?: string;
  icon?: string;
}>;

export enum NavigationOneColumnMenuLinkVariant {
  IconLeft = 'iconLeft',
}

const NavigationOneColumnMenuLink: FC<LinkProps> = ({ title, link, icon, description, component, context }) => {
  const imageIrl = getImageUrl(icon);

  const renderLink = () => {
    return (
      <Link className={classNames('!rounded-none')} href={link?.path || '#'}>
        <div className="py-2">
          <div
            className={classNames('flex items-center justify-between', {
              'flex-row-reverse': component?.variant === NavigationOneColumnMenuLinkVariant.IconLeft,
            })}
          >
            <div>
              <p>{title}</p>
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

  const renderHoverItem = () => (
    <div className="absolute w-full max-w-[60%] h-full z-50 top-[10%] right-0">
      <ToggleContent>
        <div className="w-full bg-white">
          <UniformSlot name="hoverContent" data={component} context={context} />
        </div>
      </ToggleContent>
    </div>
  );

  return (
    <ToggleProvider>
      <div className="grid grid-cols-12">
        <HoverContent className="col-span-4 px-4 py-2">
          {renderLink()}
        </HoverContent>
        <div className="col-span-8 bg-white">{renderHoverItem()}</div>
      </div>
    </ToggleProvider>
  );
};

[undefined, NavigationOneColumnMenuLinkVariant.IconLeft].forEach(variantId =>
  registerUniformComponent({
    type: 'navigationOneColumnMenuLink',
    component: NavigationOneColumnMenuLink,
    variantId,
  })
);
