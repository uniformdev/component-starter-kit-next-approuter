import { FC } from 'react';
import BaseLink from '@/components/ui/Link';
import { isExternalLink } from '@/utils/routing';
import { cn, resolveViewPort } from '@/utils/styling';
import { ButtonProps, ButtonVariant } from '.';

const ButtonWrapper: FC<ButtonProps> = ({
  children,
  href,
  className,
  onClick,
  eventCategory,
  eventAction,
  eventLabel,
  eventValue,
}) => {
  const isCurrentLinkExternal = isExternalLink(href);
  return href ? (
    <BaseLink
      className={className}
      link={href}
      openInNewTab={isCurrentLinkExternal}
      rel={isCurrentLinkExternal ? 'noopener noreferrer' : ''}
    >
      {children}
    </BaseLink>
  ) : (
    <button
      onClick={onClick}
      className={className}
      data-event-category={eventCategory}
      data-event-action={eventAction}
      data-event-label={eventLabel}
      data-event-value={eventValue}
    >
      {children}
    </button>
  );
};

export const Button: FC<ButtonProps> = ({
  variant,
  children,
  href,
  className,
  onClick,
  textColor,
  textSize,
  buttonColor,
  isActive,
  icon,
  iconPosition,
  border = '',
  textTransform = '',
  textWeight,
  textFont,
  size,
  hoverButtonColor,
  hoverTextColor,
  eventCategory,
  eventAction,
  eventLabel,
  eventValue,
}) => {
  const baseStyles = cn(
    'block w-max font-medium focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50',
    {
      [`text-${textColor}`]: textColor,
      [`hover:text-${hoverTextColor}`]: hoverTextColor,
      'flex flex-row gap-x-2': icon,
      'flex-row-reverse': icon && iconPosition === 'right',
      [`font-${textFont}`]: !!textFont,
      [`font-${textWeight}`]: !!textWeight,
      [`p-${size}`]: size,
      [textTransform]: !!textTransform,
      [resolveViewPort(border, '{value}')]: border,
      [resolveViewPort(textSize, 'text-{value}')]: textSize,
    }
  );
  const defaultStyles = cn({
    [`bg-${buttonColor}`]: buttonColor,
    [`hover:bg-${hoverButtonColor}`]: hoverButtonColor,
  });
  const linkStyles = cn('bg-transparent hover:underline hover:opacity-100', {
    [`hover:decoration-${buttonColor}`]: buttonColor,
    '!underline': href === isActive,
  });
  return (
    <ButtonWrapper
      href={href}
      onClick={onClick}
      className={cn(
        baseStyles,
        {
          [defaultStyles]: !variant,
          [linkStyles]: variant === ButtonVariant.Link,
        },
        className
      )}
      eventCategory={eventCategory}
      eventAction={eventAction}
      eventLabel={eventLabel}
      eventValue={eventValue}
    >
      {icon}
      {children}
    </ButtonWrapper>
  );
};
