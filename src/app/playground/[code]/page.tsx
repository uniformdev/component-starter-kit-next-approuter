import { Suspense } from 'react';
import { emptyPlaceholderResolver } from '@uniformdev/csk-components/components/canvas/emptyPlaceholders';
import { compositionCache } from '@uniformdev/csk-components/utils/getSlotComponents';
import { DesignExtensionsProvider } from '@uniformdev/design-extensions-tools/components/providers/server';
import { PlaygroundParameters, resolvePlaygroundRoute, UniformPlayground } from '@uniformdev/next-app-router';
import { componentResolver } from '@/components';

async function PlaygroundContent({ params }: PlaygroundParameters) {
  const { code } = await params;
  return (
    <DesignExtensionsProvider>
      <div className="px-4 py-14">
        <UniformPlayground
          code={code}
          resolveRoute={resolvePlaygroundRoute}
          compositionCache={compositionCache}
          resolveComponent={componentResolver}
          resolveEmptyPlaceholder={emptyPlaceholderResolver}
        />
      </div>
    </DesignExtensionsProvider>
  );
}

export default async function PlaygroundPage({ params }: PlaygroundParameters) {
  return (
    <Suspense>
      <PlaygroundContent params={params} />
    </Suspense>
  );
}
