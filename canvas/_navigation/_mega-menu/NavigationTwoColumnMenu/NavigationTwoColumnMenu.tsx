import { FC } from 'react';
import { UniformSlot } from '@uniformdev/canvas-next-rsc/component';
import Button from '../../../../components/Button';
import { formatProjectMapLink } from '../../../../utilities';
import { NavigationOneColumnMenuProps } from '.';

export const NavigationTwoColumnsMenu: FC<NavigationOneColumnMenuProps> = ({
  primaryButtonCopy,
  primaryButtonLink,
  primaryButtonStyle,
  secondaryButtonCopy,
  secondaryButtonLink,
  secondaryButtonStyle,
  component,
  context,
  slots,
}) => (
  <div className="relative">
    <div className="grid grid-cols-8">
      <div className="col-span-4 bg-primary p-4">
        <div className="grid grid-cols-12">
          <div className="col-span-6 bg-primary p-4">
            <UniformSlot
              context={context}
              data={component}
              slot={slots.leftColumn}
            />
          </div>
          <div className="col-span-6 bg-primary p-4">
            <UniformSlot
              context={context}
              data={component}
              slot={slots.rightColumn}
            />
          </div>
        </div>
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
      <div className="col-span-4 bg-white p-4">
        <UniformSlot
          context={context}
          data={component}
          slot={slots.content}
        />
      </div>
    </div>
  </div>
);
