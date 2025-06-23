import { DefaultTheme } from 'tailwindcss/types/generated/default-theme';
import { AssetParamValue } from '@uniformdev/assets';
import { LinkParamValue } from '@uniformdev/canvas';
import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { ButtonProps as BaseButtonProps } from '@/components/ui/Button';
import { withPlaygroundWrapper } from '@/hocs/withPlaygroundWrapper';
import { ViewPort } from '@/types/cskTypes';
import { Button } from './button';

export type ButtonParameters = {
  text?: string;
  link?: LinkParamValue;
  textColor?: string;
  textWeight?: keyof DefaultTheme['fontWeight'];
  textFont?: 'uppercase' | 'lowercase' | 'capitalize' | 'normal-case';
  textTransform?: string;
  buttonColor?: string;
  border?: string | ViewPort<string>;
  size?: string;
  icon?: AssetParamValue;
  test?: AssetParamValue;
  textSize?: BaseButtonProps['textSize'];
  iconPosition?: BaseButtonProps['iconPosition'];
  hoverButtonColor?: string;
  hoverTextColor?: string;
  eventCategory?: string;
  eventAction?: string;
  eventLabel?: string;
  eventValue?: string;
};

export type ButtonAdditionalProps = {
  className?: string;
  onClick?: () => void;
};

export type ButtonProps = ComponentProps<ButtonParameters & ButtonAdditionalProps>;

export default withPlaygroundWrapper(Button);
