import { FC } from 'react';
import classNames from 'classnames';
import {
  UniformSlot,
  registerUniformComponent,
  ComponentProps,
  UniformText,
  isIncontextEditingEnabled
} from '@uniformdev/canvas-next-rsc';
import { getTextClass } from '@/utils/styling';
import Button from '@/components/Button';
import CardBlockCarousel from '@/canvas/CardBlockCarousel';

export type CardBlockProps = ComponentProps<{
  title: string;
  description?: string;
  titleStyle: Types.HeadingStyles;
  buttonCopy: string;
  buttonLink: Types.ProjectMapLink;
  buttonStyle: Types.ButtonStyles;
}>;

export enum CardBlockVariants {
  Carousel = 'carousel',
}

const CardBlock: FC<CardBlockProps> = ({
  buttonLink,
  titleStyle: TitleTag = 'h1',
  buttonStyle,
  component,
  context,
}) => {
  const isContextualEditing = isIncontextEditingEnabled({
    searchParams: {},
  });
  return (
    <div className="flex items-center text-secondary-content justify-between py-2 flex-wrap">
      <div className="w-full flex flex-col md:flex-row md:items-center justify-between px-3 pb-6">
        <div className="basis-2/3 xl:basis-auto">
          <UniformText
            placeholder="Title goes here"
            parameterId="title"
            as={TitleTag}
            className={classNames('font-bold', getTextClass(TitleTag))}
            component={component}
          />
          <UniformText
            placeholder="Description goes here"
            parameterId="description"
            as="p"
            className="py-6"
            component={component}
          />
        </div>
        {Boolean(buttonLink) && (
          <Button
            href={buttonLink.path}
            copy={
              <UniformText
                placeholder="Button copy goes here"
                parameterId="buttonCopy"
                onClick={isContextualEditing ? e => e.preventDefault() : undefined}
                component={component}
              />
            }
            style={buttonStyle}
          />
        )}
      </div>
      <UniformSlot
        name="cardBlockInner"
        data={component}
        context={context}
      />
    </div>
  );
};

[undefined, CardBlockVariants.Carousel].forEach(variantId => {
  registerUniformComponent({
    type: 'cardBlock',
    component: variantId === CardBlockVariants.Carousel ? CardBlockCarousel : CardBlock,
    variantId,
  });
});

export default CardBlock;
