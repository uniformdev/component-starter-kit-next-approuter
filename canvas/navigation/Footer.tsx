import { FC } from 'react';
import Image from 'next/image';
import { UniformSlot, ComponentProps, registerUniformComponent, UniformRichText } from '@uniformdev/canvas-next-rsc';
import { ScreenContainer } from '@/components/Container';
import { getImageUrl } from '@/utils';

type FooterProps = ComponentProps<{
  logo: string | Types.CloudinaryImage;
  copyright: string;
  footerText?: Document;
}>;

const Footer: FC<FooterProps> = ({ logo, copyright, component, context }) => {
  const imageUrl = getImageUrl(logo);
  return (
    <ScreenContainer>
      <footer className="footer py-10 flex flex-col-reverse md:flex-row justify-between border-t-[1px] border-info-content w-full">
        <div className="w-full md:w-1/2">
          <Image src={imageUrl} width="200" height="50" alt="Uniform" />
          <div
            className="footer-content text-secondary-content"
            dangerouslySetInnerHTML={{ __html: `2023 ${copyright}` }}
          />
          <div className="footer-content text-secondary-content">
            <UniformRichText
              parameterId="footerText"
              component={component}
            />
          </div>
        </div>
        <UniformSlot
          name="section"
          data={component}
          context={context}
        />
        <div className="flex">
          <UniformSlot
            name="iconLinks"
            data={component}
            context={context}
          />
        </div>
      </footer>
    </ScreenContainer>
  );
};

registerUniformComponent({
  type: 'footer',
  component: Footer,
});

export default Footer;
