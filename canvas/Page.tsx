import Container from '@/components/Container';
import {
  ComponentProps,
  UniformSlot,
  registerUniformComponent,
} from '@uniformdev/canvas-next-rsc';
import classNames from 'classnames';
import { HeroVariant } from './Hero';
import { PaddingSize } from '@/utils/styling';

export async function Page({ component, context }: ComponentProps) {
  return (
    <>
      <UniformSlot
        name="pageContent"
        data={component}
        context={context}
      >
        {/* adding container with padding only to 1+ component in the content slot */}
        {({ key, child, component }) => {
          // Do not wrap container around the component if it is a container itself
          if (['container', 'spacer'].includes(component.type)) return <>{child}</>;

          return (
            <Container
              className={classNames({
                '!max-w-none !px-0':
                  component.type === 'hero' &&
                  (component.variant === HeroVariant.BackgroundDarkImage ||
                    component.variant === HeroVariant.BackgroundLightImage),
              })}
              // adding padding top only to 1+ component in the content slot
              paddingTop={key.toString().endsWith('-0') ? PaddingSize.None : PaddingSize.Small}
              paddingBottom={PaddingSize.Small}
            >
              {child}
            </Container>
          );
        }}
      </UniformSlot>
    </>
  );
}

registerUniformComponent({
  type: 'page',
  component: Page as any,
});