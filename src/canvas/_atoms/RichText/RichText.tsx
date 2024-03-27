import { FC } from 'react';
import classNames from 'classnames';
import { UniformRichText } from '@uniformdev/canvas-next-rsc/component';
import { REGEX_COLOR_HEX } from '../../../utilities';
import { getTextColor } from '../../../utilities/styling';
import { RichTextProps } from '.';

const DEFAULT_COLOR = '#000';

export const RichText: FC<RichTextProps> = ({ color = DEFAULT_COLOR, style = {}, styles, component }) => {
  const currentColor = REGEX_COLOR_HEX.test(color || DEFAULT_COLOR) ? color : undefined;
  return (
    <UniformRichText
      component={component}
      style={{ color: currentColor, ...style }}
      className={classNames(
        'max-w-full prose [&_*]:text-current marker:text-current',
        {
          [getTextColor(color as Types.ThemeColorsValues)]: !currentColor,
        },
        styles?.content
      )}
      parameterId="content"
    />
  );
};
