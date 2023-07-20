import { FC } from 'react';
import { ComponentProps, UniformSlot, registerUniformComponent } from '@uniformdev/canvas-next-rsc';

import Button from '@/components/Button';

type NavigationOneColumnMenuProps = ComponentProps<{
  description?: string;
  icon?: string;
  primaryButtonCopy: string;
  primaryButtonLink: Types.ProjectMapLink;
  primaryButtonStyle: Types.ButtonStyles;
  secondaryButtonCopy: string;
  secondaryButtonLink: Types.ProjectMapLink;
  secondaryButtonStyle: Types.ButtonStyles;
}>;

const NavigationOneColumnMenu: FC<NavigationOneColumnMenuProps> = ({
  primaryButtonCopy,
  primaryButtonLink,
  primaryButtonStyle,
  secondaryButtonCopy,
  secondaryButtonLink,
  secondaryButtonStyle,
  component,
  context,
}) => {
  return (
    <div className="relative">
      <UniformSlot
        name="menuLinks"
        data={component}
        context={context}
      />
      <div className="grid grid-cols-12">
        <div className="col-span-4 px-8 py-2">
          {Boolean(primaryButtonCopy && primaryButtonLink) && (
            <Button
              className="mx-1"
              href={primaryButtonLink.path}
              copy={primaryButtonCopy}
              style={primaryButtonStyle}
            />
          )}
          {Boolean(secondaryButtonCopy && secondaryButtonLink) && (
            <Button
              className="mx-1"
              href={secondaryButtonLink.path}
              copy={secondaryButtonCopy}
              style={secondaryButtonStyle}
            />
          )}
        </div>
        <div className="col-span-8 bg-white">
          <div className="absolute w-full max-w-[60%] h-full z-30 top-[10%]  right-0">
            <UniformSlot
              name="defaultContent"
              data={component}
              context={context}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

registerUniformComponent({
  type: 'navigationOneColumnMenu',
  component: NavigationOneColumnMenu,
});
