import { FC } from 'react';
import BaseContainer from '@/components/ui/Container';
import { FooterProps } from './';

export const Footer: FC<FooterProps> = ({
  logo,
  content,
  copyright,
  backgroundColor,
  spacing,
  border,
  fluidContent,
  bottom,
}) => (
  <footer>
    <BaseContainer {...{ backgroundColor, spacing, border, fluidContent }}>
      <BaseContainer className="flex w-full flex-col justify-between gap-4 md:flex-row">
        <div className="flex flex-col gap-2 gap-y-4 md:w-1/2">
          {logo}
          {copyright}
        </div>
        <div>{content}</div>
      </BaseContainer>
      {bottom}
    </BaseContainer>
  </footer>
);
