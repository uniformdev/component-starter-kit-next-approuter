'use client';

import { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ViewPort } from '@uniformdev/csk-components/types/cskTypes';
import BaseContainer from '@/components/ui/Container';
import { cn, resolveViewPort } from '@/utils/styling';
import { CarouselProps, CarouselVariant } from '.';

const VIEWPORT_BREAKPOINTS = {
  desktop: 1024,
  tablet: 768,
};
const getItemsPerPageNumber = (itemsPerPage: ViewPort<string> | string) => {
  if (typeof itemsPerPage === 'string') {
    return Number(itemsPerPage);
  } else {
    if (window.innerWidth >= VIEWPORT_BREAKPOINTS.desktop) {
      return Number(itemsPerPage.desktop || itemsPerPage.tablet || itemsPerPage.mobile);
    } else if (window.innerWidth >= VIEWPORT_BREAKPOINTS.tablet) {
      return Number(itemsPerPage.tablet || itemsPerPage.mobile);
    } else {
      return Number(itemsPerPage.mobile);
    }
  }
};

export const Carousel: FC<CarouselProps> = ({
  countOfItems,
  backgroundColor,
  spacing,
  border,
  fluidContent,
  height,
  itemsPerPage = '1',
  children,
  gapX,
  variant = CarouselVariant.DEFAULT,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [recheckSlider, setRecheckSlider] = useState(false);
  const [itemsPerPageNumber, setItemsPerPageNumber] = useState(getItemsPerPageNumber(itemsPerPage));

  useEffect(() => {
    const handleResize = () => {
      setRecheckSlider(prev => !prev);
      setItemsPerPageNumber(getItemsPerPageNumber(itemsPerPage));
    };
    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, [itemsPerPage]);

  const totalCountOfItems = useMemo(() => {
    if (!countOfItems) return 0;
    return itemsPerPageNumber > 1 ? Math.ceil(countOfItems / itemsPerPageNumber) : countOfItems;
  }, [countOfItems, itemsPerPageNumber]);

  useEffect(() => {
    if (containerRef.current) {
      const { clientWidth } = containerRef.current;
      containerRef.current.scrollLeft = currentIndex * clientWidth;
    }
  }, [currentIndex, recheckSlider]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex(prev => (prev === 0 ? totalCountOfItems - 1 : prev - 1));
  }, [totalCountOfItems]);

  const goToNext = useCallback(() => {
    setCurrentIndex(prev => (prev === totalCountOfItems - 1 ? 0 : prev + 1));
  }, [totalCountOfItems]);

  const renderPagination = () => {
    if (variant === CarouselVariant.BROCHURE) {
      return (
        <div className={cn('flex py-4 px-4 z-5 gap-x-4 justify-end items-center')}>
          <button onClick={goToPrevious}>❮</button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalCountOfItems }).map((_, index) => (
              <button
                key={`slide-${index}`}
                onClick={() => setCurrentIndex(index)}
                className={cn('h-2 rounded-full transition-all duration-300 size-2 opacity-50', {
                  'w-6 opacity-100': index === currentIndex,
                  [`bg-${backgroundColor} invert`]: !!backgroundColor,
                  'bg-black dark:bg-white': !backgroundColor,
                })}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button onClick={goToNext}>❯</button>
        </div>
      );
    }

    if (variant === CarouselVariant.NUMERIC) {
      return (
        <div
          className={cn('flex py-4 px-4 z-5 gap-x-4 justify-end items-center', {
            [`text-${backgroundColor} invert`]: !!backgroundColor,
            'text-black dark:text-white': !backgroundColor,
          })}
        >
          <button onClick={goToPrevious}>❮</button>
          <div className="flex flex-col px-2">
            {currentIndex + 1} of {totalCountOfItems}
          </div>
          <button onClick={goToNext}>❯</button>
        </div>
      );
    }

    return (
      <div
        className={cn('absolute inset-x-5 top-1/2 flex -translate-y-1/2 justify-between', {
          [`text-${backgroundColor} invert`]: !!backgroundColor,
          'text-black dark:text-white': !backgroundColor,
        })}
      >
        <button onClick={goToPrevious}>❮</button>
        <button onClick={goToNext}>❯</button>
      </div>
    );
  };

  const renderSlides = () =>
    children({
      className: cn('flex size-full items-center justify-center', {
        [resolveViewPort(gapX, 'px-{value}')]: gapX,
      }),
      style: {
        minWidth: itemsPerPageNumber > 1 ? `calc(${100 / itemsPerPageNumber}%)` : '100%',
      },
    });

  return (
    <BaseContainer {...{ backgroundColor, spacing, border, fluidContent, height }}>
      <div
        className={cn('relative', {
          [resolveViewPort(gapX, '-mx-{value}')]: gapX,
        })}
      >
        <div ref={containerRef} className="flex overflow-x-hidden scroll-smooth">
          {renderSlides()}
        </div>
        {renderPagination()}
      </div>
    </BaseContainer>
  );
};
