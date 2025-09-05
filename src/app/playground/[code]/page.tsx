import { resolvePlaygroundRoute, UniformPageParameters, UniformPlayground } from '@uniformdev/canvas-next-rsc-v2';
import { emptyPlaceholderResolver } from '@uniformdev/csk-components/components/canvas/emptyPlaceholders';
import { compositionCache } from '@uniformdev/csk-components/utils/getSlotComponents';
import { DesignExtensionsProvider } from '@uniformdev/design-extensions-tools/components/providers/server';
import { componentResolver } from '@/components';

export default async function PlaygroundPage(props: UniformPageParameters) {
  const result = await resolvePlaygroundRoute(props);
  return (
    <DesignExtensionsProvider>
      <div className="px-4 py-14">
        <UniformPlayground
          route={result}
          resolveComponent={componentResolver}
          resolveEmptyPlaceholder={emptyPlaceholderResolver}
          compositionCache={compositionCache}
        />
      </div>
    </DesignExtensionsProvider>
  );
}
