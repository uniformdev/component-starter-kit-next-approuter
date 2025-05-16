import { PageParameters, UniformComposition } from '@uniformdev/canvas-next-rsc';
import { emptyPlaceholderResolver } from '@uniformdev/csk-components/components/canvas/emptyPlaceholders';
import { DesignExtensionsProvider } from '@uniformdev/design-extensions-tools/components/providers/server';
import { componentResolver } from '@/components';
import locales from '@/i18n/locales.json';
import retrieveRoute from '@/utils/retrieveRoute';
import { enhanceComposition } from '@/utils/enhanceComposition';

export default async function Home(props: PageParameters) {
  const resolvedRoute = await retrieveRoute(props, locales.defaultLocale);

  if (resolvedRoute?.type === 'composition') {
    const { composition } = resolvedRoute.compositionApiResponse ?? {};
    await enhanceComposition(composition);
  }

  const searchParams = await props.searchParams;
  const isPreviewMode = searchParams?.is_incontext_editing_mode === 'true';
  return (
    <DesignExtensionsProvider isPreviewMode={isPreviewMode}>
      <UniformComposition
        {...props}
        route={resolvedRoute}
        resolveComponent={componentResolver}
        mode="server"
        resolveEmptyPlaceholder={emptyPlaceholderResolver}
      />
    </DesignExtensionsProvider>
  );
}

export { generateMetadata } from '@/utils/metadata';
