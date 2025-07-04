import { CANVAS_EDITOR_STATE } from '@uniformdev/canvas';
import { emptyPlaceholderResolver } from '@uniformdev/csk-components/components/canvas/emptyPlaceholders';
import { compositionCache } from '@uniformdev/csk-components/utils/getSlotComponents';
import { DesignExtensionsProvider } from '@uniformdev/design-extensions-tools/components/providers/server';
import {
  resolveRouteFromCode,
  UniformComposition,
  UniformPageParameters,
  createUniformStaticParams,
} from '@uniformdev/next-app-router';
import { componentResolver } from '@/components';
import getAllStaticGeneratedPages from '@/utils/getAllStaticGeneratedPages';

export const generateStaticParams = async () => {
  const paths = await getAllStaticGeneratedPages();
  return createUniformStaticParams({
    paths,
  });
};

const resolveRouteFromCodeWithCache = async (code: string) => {
  'use cache';
  const result = await resolveRouteFromCode({ code });
  return result;
};

export default async function UniformPage({ params }: UniformPageParameters) {
  const { code } = await params;
  const result = await resolveRouteFromCodeWithCache(code);
  return (
    <DesignExtensionsProvider isPreviewMode={result.pageState.compositionState === CANVAS_EDITOR_STATE}>
      <UniformComposition
        code={code}
        resolveRoute={resolveRouteFromCode}
        resolveComponent={componentResolver}
        resolveEmptyPlaceholder={emptyPlaceholderResolver}
        compositionCache={compositionCache}
      />
    </DesignExtensionsProvider>
  );
}

export { generateMetadata } from '@/utils/metadata';
