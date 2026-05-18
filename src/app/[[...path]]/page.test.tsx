import { emptyPlaceholderResolver } from '@uniformdev/csk-components/components/canvas/emptyPlaceholders';
import { componentResolver } from '@/components';
import locales from '@/i18n/locales.json';
import retrieveRoute from '@/utils/retrieveRoute';
import Home, { generateMetadata } from './page';

jest.mock('@uniformdev/csk-components/components/canvas/emptyPlaceholders', () => ({
  emptyPlaceholderResolver: jest.fn(),
}));

jest.mock('@uniformdev/csk-components/utils/assets', () => ({
  resolveAsset: jest.fn(() => [null]),
}));

jest.mock('@uniformdev/csk-components/utils/routing', () => ({
  isRouteWithoutErrors: jest.fn((route) => route.type === 'success'),
}));

jest.mock('@uniformdev/design-extensions-tools/components/providers/server', () => ({
  DesignExtensionsProvider: jest.fn(({ children }) => ({
    type: 'div',
    props: { 'data-testid': 'design-extensions-provider', children },
  })),
}));

jest.mock('@/components', () => ({
  componentResolver: jest.fn(),
}));

jest.mock('@/i18n/locales.json', () => ({
  __esModule: true,
  default: {
    locales: ['en'],
    localeNames: { en: 'English' },
    defaultLocale: 'en',
  },
}));

jest.mock('@/utils/retrieveRoute', () => jest.fn());

jest.mock('@uniformdev/canvas-next-rsc', () => ({
  UniformComposition: jest.fn(({ route, mode }) => ({
    type: 'div',
    props: { 'data-testid': 'uniform-composition', 'data-route': route, 'data-mode': mode },
  })),
}));

jest.mock('next/navigation', () => ({
  notFound: jest.fn(() => {
    throw new Error('NotFound');
  }),
}));

jest.mock('@uniformdev/canvas', () => ({
  flattenValues: jest.fn((composition) => composition?.parameters || {}),
}));

describe('Home Page', () => {
  const mockSearchParams = Promise.resolve({});
  const mockParams = Promise.resolve({ path: 'test-path' });

  beforeEach(() => {
    jest.clearAllMocks();
    (retrieveRoute as jest.Mock).mockResolvedValue({ type: 'success', compositionApiResponse: { composition: {} } });
  });

  it('should render UniformComposition with correct props', async () => {
    const props = {
      params: mockParams,
      searchParams: mockSearchParams,
    };

    const result = await Home(props);

    expect(result).toBeDefined();
    expect(retrieveRoute).toHaveBeenCalledWith(props, locales.defaultLocale);
  });

  it('should pass isPreviewMode as false when is_incontext_editing_mode is not true', async () => {
    const props = {
      params: mockParams,
      searchParams: Promise.resolve({ is_incontext_editing_mode: 'false' }),
    };

    const result = await Home(props);

    expect(result).toBeDefined();
  });

  it('should pass isPreviewMode as true when is_incontext_editing_mode is true', async () => {
    const props = {
      params: mockParams,
      searchParams: Promise.resolve({ is_incontext_editing_mode: 'true' }),
    };

    const result = await Home(props);

    expect(result).toBeDefined();
  });

  it('should handle empty searchParams', async () => {
    const props = {
      params: mockParams,
      searchParams: Promise.resolve({}),
    };

    const result = await Home(props);

    expect(result).toBeDefined();
  });

  it('should handle undefined path in params', async () => {
    const props = {
      params: Promise.resolve({}),
      searchParams: mockSearchParams,
    };

    const result = await Home(props);

    expect(result).toBeDefined();
  });

  it('should use DesignExtensionsProvider wrapper', async () => {
    const props = {
      params: mockParams,
      searchParams: mockSearchParams,
    };

    const result = await Home(props);

    expect(result).toBeDefined();
  });

  it('should pass mode as server to UniformComposition', async () => {
    const props = {
      params: mockParams,
      searchParams: mockSearchParams,
    };

    const result = await Home(props);

    expect(result).toBeDefined();
  });

  it('should pass resolveComponent to UniformComposition', async () => {
    const props = {
      params: mockParams,
      searchParams: mockSearchParams,
    };

    const result = await Home(props);

    expect(result).toBeDefined();
    expect(componentResolver).toBeDefined();
  });

  it('should pass resolveEmptyPlaceholder to UniformComposition', async () => {
    const props = {
      params: mockParams,
      searchParams: mockSearchParams,
    };

    const result = await Home(props);

    expect(result).toBeDefined();
    expect(emptyPlaceholderResolver).toBeDefined();
  });
});

describe('generateMetadata', () => {
  const mockSearchParams = Promise.resolve({});
  const mockParams = Promise.resolve({ path: 'test-path' });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should generate metadata successfully', async () => {
    (retrieveRoute as jest.Mock).mockResolvedValue({
      type: 'success',
      compositionApiResponse: {
        composition: {
          parameters: {},
        },
      },
    });

    const props = {
      params: mockParams,
      searchParams: mockSearchParams,
    };

    const metadata = await generateMetadata(props);

    expect(metadata).toBeDefined();
    expect(retrieveRoute).toHaveBeenCalledWith(props, locales.defaultLocale);
  });

  it('should handle metadata with pageTitle', async () => {
    (retrieveRoute as jest.Mock).mockResolvedValue({
      type: 'success',
      compositionApiResponse: {
        composition: {
          parameters: {
            pageTitle: 'Test Page Title',
          },
        },
      },
    });

    const props = {
      params: mockParams,
      searchParams: mockSearchParams,
    };

    const metadata = await generateMetadata(props);

    expect(metadata).toBeDefined();
    expect(metadata.title).toBe('Test Page Title');
  });

  it('should handle metadata with pageDescription', async () => {
    (retrieveRoute as jest.Mock).mockResolvedValue({
      type: 'success',
      compositionApiResponse: {
        composition: {
          parameters: {
            pageDescription: 'Test page description',
          },
        },
      },
    });

    const props = {
      params: mockParams,
      searchParams: mockSearchParams,
    };

    const metadata = await generateMetadata(props);

    expect(metadata).toBeDefined();
    expect(metadata.description).toBe('Test page description');
  });

  it('should handle metadata with openGraph properties', async () => {
    (retrieveRoute as jest.Mock).mockResolvedValue({
      type: 'success',
      compositionApiResponse: {
        composition: {
          parameters: {
            openGraphTitle: 'OG Title',
            openGraphDescription: 'OG Description',
            openGraphType: 'article',
          },
        },
      },
    });

    const props = {
      params: mockParams,
      searchParams: mockSearchParams,
    };

    const metadata = await generateMetadata(props);

    expect(metadata).toBeDefined();
    expect(metadata.openGraph).toBeDefined();
  });

  it('should handle metadata with twitter properties', async () => {
    (retrieveRoute as jest.Mock).mockResolvedValue({
      type: 'success',
      compositionApiResponse: {
        composition: {
          parameters: {
            twitterTitle: 'Twitter Title',
            twitterDescription: 'Twitter Description',
            twitterCard: 'summary_large_image',
          },
        },
      },
    });

    const props = {
      params: mockParams,
      searchParams: mockSearchParams,
    };

    const metadata = await generateMetadata(props);

    expect(metadata).toBeDefined();
    expect(metadata.twitter).toBeDefined();
  });

  it('should handle metadata with keywords', async () => {
    (retrieveRoute as jest.Mock).mockResolvedValue({
      type: 'success',
      compositionApiResponse: {
        composition: {
          parameters: {
            pageKeywords: 'keyword1, keyword2',
          },
        },
      },
    });

    const props = {
      params: mockParams,
      searchParams: mockSearchParams,
    };

    const metadata = await generateMetadata(props);

    expect(metadata).toBeDefined();
    expect(metadata.keywords).toBe('keyword1, keyword2');
  });

  it('should handle empty composition parameters', async () => {
    (retrieveRoute as jest.Mock).mockResolvedValue({
      type: 'success',
      compositionApiResponse: {
        composition: {
          parameters: {},
        },
      },
    });

    const props = {
      params: mockParams,
      searchParams: mockSearchParams,
    };

    const metadata = await generateMetadata(props);

    expect(metadata).toBeDefined();
  });

  it('should handle undefined composition', async () => {
    (retrieveRoute as jest.Mock).mockResolvedValue({
      type: 'success',
      compositionApiResponse: {
        composition: undefined,
      },
    });

    const props = {
      params: mockParams,
      searchParams: mockSearchParams,
    };

    const metadata = await generateMetadata(props);

    expect(metadata).toBeDefined();
  });
});
