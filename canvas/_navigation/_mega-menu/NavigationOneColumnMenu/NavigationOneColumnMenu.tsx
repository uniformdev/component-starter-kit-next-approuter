import { FC } from 'react';
import { UniformSlot } from '@uniformdev/canvas-next-rsc/component';
import Button from '../../../../components/Button';
import { formatProjectMapLink } from '../../../../utilities';
import { NavigationOneColumnMenuProps } from '.';

export const NavigationOneColumnMenu: FC<NavigationOneColumnMenuProps> = ({
  primaryButtonCopy,
  primaryButtonLink,
  primaryButtonStyle,
  secondaryButtonCopy,
  secondaryButtonLink,
  secondaryButtonStyle,
  context,
  component,
  slots,
}) => (
  <div className="relative">
    <UniformSlot
      context={context}
      data={component}
      slot={slots.menuLinks}
    />
    <div className="grid grid-cols-12">
      <div className="col-span-4 px-8 py-2">
        {Boolean(primaryButtonCopy && primaryButtonLink) && (
          <Button
            className="mx-1"
            href={formatProjectMapLink(primaryButtonLink)}
            copy={primaryButtonCopy}
            style={primaryButtonStyle}
          />
        )}
        {Boolean(secondaryButtonCopy && secondaryButtonLink) && (
          <Button
            className="mx-1"
            href={formatProjectMapLink(secondaryButtonLink)}
            copy={secondaryButtonCopy}
            style={secondaryButtonStyle}
          />
        )}
      </div>
      <div className="col-span-8 bg-white">
        <div className="absolute w-full max-w-[60%] z-30 top-[10%] right-0">
          <UniformSlot
            context={context}
            data={component}
            slot={slots.defaultContent}
          />
        </div>
      </div>
    </div>
  </div>
);
