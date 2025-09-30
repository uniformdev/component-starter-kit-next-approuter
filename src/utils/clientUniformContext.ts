'use client';

import { useRouter } from 'next/navigation';
import {
  ClientContextComponent,
  createClientUniformContext,
  useInitUniformContext,
} from '@uniformdev/canvas-next-rsc/component';
import { ContextPlugin, enableContextDevTools } from '@uniformdev/context';
import { enableUniformInsights } from '@uniformdev/insights';

export const UniformClientContext: ClientContextComponent = ({ manifest }) => {
  const router = useRouter();

  useInitUniformContext(() => {
    console.log('useInitUniformContext');
    const plugins: ContextPlugin[] = [];

    plugins.push(
      enableContextDevTools({
        onAfterMessageReceived: () => {
          router.refresh();
        },
      })
    );

    plugins.push(
      // Proxying to local backend endpoint
      enableUniformInsights({
        endpoint: {
          type: 'proxy',
          path: '/api/analytics',
          projectId: process.env.NEXT_PUBLIC_UNIFORM_PROJECT_ID!,
        },
      })
      // Client side tracking directly calling ingesting endpoint
      // enableUniformInsights({
      //   endpoint: {
      //     type: 'api',
      //     host: process.env.NEXT_PUBLIC_INSIGHTS_API_URL!,
      //     apiKey: process.env.NEXT_PUBLIC_UNIFORM_INSIGHTS_KEY!,
      //     projectId: process.env.NEXT_PUBLIC_UNIFORM_PROJECT_ID!,
      //   },
      // })
    );

    return createClientUniformContext({
      manifest,
      plugins,
      defaultConsent: true,
    });
  });

  return null;
};