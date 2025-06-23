import { FC, useMemo } from 'react';
import { UniformText } from '@uniformdev/canvas-next-rsc/component';
import BaseButton, { ButtonProps as BaseButtonProps } from '@/components/ui/Button';
import BaseImage from '@/components/ui/Image';
import { resolveAsset } from '@/utils/assets';
import { formatUniformLink } from '@/utils/routing';
import { ButtonProps } from '.';

export const Button: FC<ButtonProps> = ({
  component,
  context,
  link,
  textColor,
  textFont,
  textWeight,
  textTransform,
  buttonColor,
  icon,
  iconPosition,
  border,
  size,
  textSize,
  hoverButtonColor,
  hoverTextColor,
  className,
  onClick,
  text,
  eventCategory,
  eventAction,
  eventLabel,
  eventValue,
}) => {
  const href = formatUniformLink(link);

  const isEditorPreviewMode = context.previewMode === 'editor' && context?.isContextualEditing;

  const iconParameters = useMemo(() => {
    const [resolvedImage] = resolveAsset(icon);
    const { url, title = '' } = resolvedImage || {};
    if (!url) return undefined;

    return {
      url,
      title,
    };
  }, [icon]);

  const Icon = () => {
    if (!iconParameters) return undefined;

    const { url, title } = iconParameters;

    return (
      <BaseImage
        src={url}
        alt={title}
        width={20}
        height={20}
        containerStyle={{
          width: '20px',
          height: '20px',
        }}
      />
    );
  };

  const hasContent = !!text || !!iconParameters;

  if (!hasContent && !isEditorPreviewMode) return null;

  return (
    <BaseButton
      variant={component.variant as BaseButtonProps['variant']}
      href={href}
      border={border}
      size={size}
      onClick={onClick}
      className={className}
      textSize={textSize}
      isActive={context.matchedRoute === href}
      textColor={textColor}
      textFont={textFont}
      textWeight={textWeight}
      textTransform={textTransform}
      buttonColor={buttonColor}
      hoverButtonColor={hoverButtonColor}
      hoverTextColor={hoverTextColor}
      icon={<Icon />}
      iconPosition={iconPosition}
      eventCategory={eventCategory}
      eventAction={eventAction}
      eventLabel={eventLabel}
      eventValue={eventValue}
    >
      <UniformText placeholder="Button text goes here" parameterId="text" component={component} context={context} />
    </BaseButton>
  );
};
