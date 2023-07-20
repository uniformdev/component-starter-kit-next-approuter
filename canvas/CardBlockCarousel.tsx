import { FC, Fragment, ReactElement, ReactNode } from 'react';
import classNames from 'classnames';
import {
  ComponentProps,
  UniformText,
  UniformSlot,
  isIncontextEditingEnabled
} from '@uniformdev/canvas-next-rsc';
import Button from '@/components/Button';
import { getTextClass } from '@/utils/styling';
import { MultiCarousel } from '@/components/MultiCarousel';

type Props = ComponentProps<{
  title: string;
  titleStyle: Types.HeadingStyles;
  description?: string;
  buttonCopy: string;
  buttonLink: Types.ProjectMapLink;
  buttonStyle: Types.ButtonStyles;
}>;

const Carousel: FC<Props> = ({ titleStyle: TitleTag = 'h1', buttonLink, buttonStyle, component, context }) => {
  const children: ReactNode[] = [];
  const isContextualEditing = isIncontextEditingEnabled({
    searchParams: {},
  });
  return (
    <>
      {/*
        This is a workaround because Uniform sends us a Slot with these items wrapped by a Fragment. 
        However, in order to make this carousel work, we should send an array as the children
      */}
      <UniformSlot
        name="cardBlockInner"
        data={component}
        context={context}
      >
        {({ child }) => {
          const currentComponent = child as ReactElement;
          const isAlreadyExist = children.some(item => (item as ReactElement).key === currentComponent.key);

          if (!isAlreadyExist) {
            children.push(child);
          }

          return <Fragment />;
        }}
      </UniformSlot>
      <div className="w-full flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-10 text-secondary-content">
        <div className="mb-6 md:mb-0 basis-2/3 xl:basis-auto">
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
            className="sm:pr-8"
            component={component}
          />
        </div>
        {Boolean(buttonLink) && (
          <Button
            href={buttonLink.path}
            style={buttonStyle}
            copy={
              <UniformText
                placeholder="Button copy goes here"
                parameterId="buttonCopy"
                onClick={isContextualEditing ? e => e.preventDefault() : undefined}
                component={component}
              />
            }
          />
        )}
      </div>
      <MultiCarousel
        buttonStyle={buttonStyle}
      >
        {children}
      </MultiCarousel>
    </>
  );
};

export default Carousel;
