import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';

export type BaseAddToCartProps = Omit<
  ComponentProps<{
    buttonCopy?: string;
    buttonStyle: Types.ButtonStyles;
    onClick?: (quantity: number) => void;
    useCustomTextElements?: boolean;
    animationType?: Types.AnimationType;
    buttonAnimationType?: Types.AnimationType;
  }>,
  'slots' | 'slotIndex' | 'slotName'
>;

export { default } from './BaseAddToCart';
