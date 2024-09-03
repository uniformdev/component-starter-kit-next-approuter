import { FC } from 'react';
import { RichTextProps } from '.';
import { nodeParser } from '@kontent-ai/delivery-node-parser';
import { createDeliveryClient, createRichTextHtmlResolver, linkedItemsHelper } from '@kontent-ai/delivery-sdk';

const deliveryClient = createDeliveryClient({
  environmentId: process.env.KONTENT_AI_ENVIRONMENT_ID || '',
});

export const RichText: FC<RichTextProps> = async ({ text }) => {
  const response = await deliveryClient.item<any>('ai_robotic_powered_vehicle_kit_25a0265').toPromise();
  const richTextElement = response.data.item.elements.content;

  console.log('richTextElement.images', richTextElement.images);
  console.log('text.images', text.images);

  const resolvedRichText = createRichTextHtmlResolver(nodeParser).resolveRichText({
    element: richTextElement,

    contentItemResolver: (itemId, contentItem) => {
      return {
        contentItemHtml: `<div class="p-2 border-2 font-bold text-center">Unsupported type ${contentItem?.system.type} for ${itemId}</div>`,
      };
    },
  });

  return <div dangerouslySetInnerHTML={{ __html: resolvedRichText.html }} />;
};
