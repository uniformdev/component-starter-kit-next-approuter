import { FC } from 'react';
import { UniformSlot } from '@uniformdev/canvas-next-rsc-v2/component';
import BaseHeader from '@/components/ui/Header';
import { withFlattenParameters } from '@/utils/withFlattenParameters';
import { HeaderParameters, HeaderProps, HeaderVariants } from '.';

const Header: FC<HeaderProps & HeaderParameters> = ({ backgroundColor, color, spacing, border, slots, variant }) => (
  <BaseHeader
    sticky={variant === HeaderVariants.Sticky}
    leftSection={<UniformSlot slot={slots.headerLeftContent} />}
    rightSection={<UniformSlot slot={slots.headerRightContent} />}
    {...{ backgroundColor, color, spacing, border }}
  >
    <UniformSlot slot={slots.headerCenterContent} />
  </BaseHeader>
);

export default withFlattenParameters(Header);
