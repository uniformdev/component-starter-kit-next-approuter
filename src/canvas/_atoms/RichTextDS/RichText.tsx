import { FC } from 'react';
import { RichTextProps } from '.';
import { createRichTextHtmlResolver } from '@kontent-ai/delivery-sdk';
// import { nodeParser } from '@kontent-ai/delivery-node-parser';

export const RichText: FC<RichTextProps> = ({ text }) => {
  const resolvedRichText = createRichTextHtmlResolver().resolveRichText({
    element: text,

    contentItemResolver: (itemId, contentItem) => {
      return {
        contentItemHtml: `<div>Unsupported type ${contentItem?.system.type} for ${itemId}</div>`,
      };
    },
  });

  return <div dangerouslySetInnerHTML={{ __html: resolvedRichText.html }} />;
};
