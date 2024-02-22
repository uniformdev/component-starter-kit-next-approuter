import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { Countdown } from './Countdown';

export type CountdownProps = ComponentProps<{
  targetDate: string;
  size?: Types.CountdownSize;
}>;

export enum CountdownVariant {
  LabelsUnder = 'labelsUnder',
  LabelsInBoxes = 'labelsInBoxes',
}

const CountdownWrapper = (props: CountdownProps) => <Countdown {...props} />;

export const countdownMappings = {
  countdown: CountdownWrapper,
};

export default CountdownWrapper;
