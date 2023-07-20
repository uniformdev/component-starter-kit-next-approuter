import { FC } from 'react';
import classNames from 'classnames';
import { ComponentProps, UniformRichText, registerUniformComponent } from '@uniformdev/canvas-next-rsc';
import Container from '../components/Container';
import { PaddingSize } from '@/utils/styling';

type RichTextProps = ComponentProps<{
  content?: string;
}>;

enum RichTextVariants {
  Light = 'light',
}

const RichText: FC<RichTextProps> = ({ component }) => {
  return (
    <Container paddingTop={PaddingSize.Small} paddingBottom={PaddingSize.Small}>
      <div
        className={classNames('prose max-w-full', {
          'text-primary-content': component?.variant === RichTextVariants.Light,
          'text-secondary-content': component?.variant !== RichTextVariants.Light,
        })}
      >
        <div
          className={classNames({
            '[&_*]:text-primary-content !marker:text-primary-content': component?.variant === RichTextVariants.Light,
            '[&_*]:text-secondary-content marker:text-secondary-content': component?.variant !== RichTextVariants.Light,
          })}
        >
          <UniformRichText
            parameterId="content"
            component={component}
          />
        </div>
      </div>
    </Container>
  );
}

[undefined, RichTextVariants.Light].forEach(variantId =>
  registerUniformComponent({
    type: 'richText',
    component: RichText,
    variantId,
  })
);

export default RichText;
