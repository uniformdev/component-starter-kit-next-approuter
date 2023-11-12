import { FC } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { UniformSlot, UniformText } from '@uniformdev/canvas-next-rsc/component';
import { getMediaUrl } from '../../utilities';
import { getTextClass } from '../../utilities/styling';
import { FeaturedCalloutProps } from '.';
import { getFeaturedCalloutContentClass, getFeaturedCalloutTextContentClass } from './helpers';

export const FeaturedCallout: FC<FeaturedCalloutProps> = ({
  eyebrowText,
  titleStyle: TitleTag = 'h1',
  image,
  component,
  context,
  slots
}) => {
  const { variant } = component || {};
  const imageUrl = getMediaUrl(image);
  return (
    <div className="hero flex flex-wrap lg:gap-10 lg:flex-nowrap text-secondary-content">
      <div
        className={classNames(
          'flex items-center justify-start w-full lg:w-1/2',
          getFeaturedCalloutContentClass(variant)
        )}
      >
        <div>{Boolean(imageUrl) && <Image src={imageUrl} width="521" height="482" alt="Feature" />}</div>
      </div>

      <div
        className={classNames(
          'hero-content flex flex-wrap items-center w-full lg:w-1/2 p-0',
          getFeaturedCalloutTextContentClass(variant)
        )}
      >
        <div>
          <div className="flex flex-col w-full">
            {eyebrowText && (
              <UniformText
                placeholder="Eyebrow text goes here"
                parameterId="eyebrowText"
                as="div"
                className="text-sm font-bold tracking-wider uppercase text-primary my-3"
                component={component}
                context={context}
              />
            )}
            <UniformText
              placeholder="Title goes here"
              parameterId="title"
              as={TitleTag}
              className={classNames('font-bold', getTextClass(TitleTag))}
              component={component}
              context={context}
            />
            <UniformText
              placeholder="Description goes here"
              parameterId="description"
              as="p"
              className="py-6"
              component={component}
              context={context}
            />
          </div>
          <div className="w-full">
            <UniformSlot
              context={context}
              data={component}
              slot={slots.feature}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
