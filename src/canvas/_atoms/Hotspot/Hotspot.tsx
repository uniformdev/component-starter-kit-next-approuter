'use client';
import { FC, useCallback, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { UniformSlot } from '@uniformdev/canvas-next-rsc/component';
import BaseImage from '../../../components/Image/Image';
import { getMediaUrl } from '../../../utilities';
import { getPosition } from './helpers';
import { Tooltip } from './Tooltip';
import { HotspotProps } from './';

export const Hotspot: FC<HotspotProps> = ({
  icon,
  iconHorizontalPosition: left = '0%',
  iconVerticalPosition: top = '0%',
  tooltipPosition = 'top',
  tooltipWidth,
  tooltipBackgroundColor,
  withTooltipShadow,
  slots,
  context,
  component,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const onClickSpot = useCallback(() => setIsOpen(prevState => !prevState), []);

  const { previewMode } = context || {};
  const isContextualEditing = previewMode === 'editor';

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (!isContextualEditing && ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    },
    [isContextualEditing]
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  const imgSrc = getMediaUrl(icon);
  if (!imgSrc) return null;

  const baseTooltipWrapperClassName = classNames('absolute z-20 duration-300 opacity-0', {
    'opacity-100 duration-700': isOpen,
  });

  return (
    <div ref={ref}>
      <button
        className={classNames(
          'absolute z-10 -translate-x-1/2 -translate-y-1/2 hover:scale-125 hover:opacity-100 duration-700 cursor-pointer opacity-70',
          { 'scale-125 !opacity-100': isOpen }
        )}
        style={{ top, left }}
        onClick={onClickSpot}
      >
        <BaseImage src={imgSrc} width={24} height={24} alt="spot-icon" />
      </button>

      <div
        className={classNames(baseTooltipWrapperClassName, 'hidden sm:block', getPosition(tooltipPosition))}
        style={{ top, left }}
      >
        {isOpen && (
          <Tooltip
            className="p-4"
            backgroundColor={tooltipBackgroundColor}
            withShadow={withTooltipShadow}
            style={{ width: tooltipWidth?.startsWith('0') ? undefined : tooltipWidth }}
          >
            <UniformSlot context={context} slot={slots.content} data={component} />
          </Tooltip>
        )}
      </div>

      <div className={classNames(baseTooltipWrapperClassName, 'block sm:hidden top-0 left-1/2 -translate-x-1/2')}>
        {isOpen && (
          <Tooltip
            className="w-[calc(100vw-2rem)] pt-10"
            backgroundColor={tooltipBackgroundColor}
            withShadow={withTooltipShadow}
            style={{ maxWidth: tooltipWidth?.startsWith('0') ? undefined : tooltipWidth }}
          >
            <>
              <button
                onClick={() => setIsOpen(false)}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </button>
              <div className="p-4">
                <UniformSlot context={context} slot={slots.content} data={component} />
              </div>
            </>
          </Tooltip>
        )}
      </div>
    </div>
  );
};
