import { UniformPlayground, UniformPlaygroundProps } from '@uniformdev/canvas-next-rsc';
import { emptyPlaceholderResolver } from '@uniformdev/csk-components/components/canvas/emptyPlaceholders';
import { DesignExtensionsProvider } from '@uniformdev/design-extensions-tools/components/providers/server';
import { componentResolver } from '@/components';

export default async function PlaygroundPage(props: { searchParams: UniformPlaygroundProps['searchParams'] }) {
  return (
    <DesignExtensionsProvider>
      <div className="px-4 py-14">
        <UniformPlayground
          {...props}
          resolveComponent={componentResolver}
          resolveEmptyPlaceholder={emptyPlaceholderResolver}
        />
      </div>
    </DesignExtensionsProvider>
  );
}
