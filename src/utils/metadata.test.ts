import { generateMetadata } from './metadata';
import type { PageParameters } from '@uniformdev/canvas-next-rsc';

jest.mock('./retrieveRoute', () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock('next/navigation', () => ({
  notFound: jest.fn(() => {
    throw new Error('NEXT_NOT_FOUND');
  }),
}));

jest.mock('@uniformdev/csk-components/utils/assets', () => ({
  resolveAsset: jest.fn((asset) => [asset ? { url: asset.url } : null]),
}));

jest.mock('@uniformdev/canvas', () => ({
  flattenValues: jest.fn((composition) => composition || {}),
}));

jest.mock('@uniformdev/csk-components/utils/routing', () => ({
  isRouteWithoutErrors: jest.fn((route) => route && !route.errors),
}));

describe('generateMetadata', () => {
  const mockRetrieveRoute = require('./retrieveRoute').default;
  const { isRouteWithoutErrors } = require('@uniformdev/csk-components/utils/routing');
  const { flattenValues } = require('@uniformdev/canvas');
  const { resolveAsset } = require('@uniformdev/csk-components/utils/assets');
  const { notFound } = require('next/navigation');

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return metadata with basic fields', async () => {
    const mockParams: PageParameters = {
      params: Promise.resolve({}),
      searchParams: Promise.resolve({}),
    };

    const mockRoute = {
      compositionApiResponse: {
        composition: {
          pageTitle: 'Test Page',
          pageDescription: 'Test Description',
          pageKeywords: 'test, keywords',
        },
      },
    };

    mockRetrieveRoute.mockResolvedValue(mockRoute);
    isRouteWithoutErrors.mockReturnValue(true);
    flattenValues.mockReturnValue(mockRoute.compositionApiResponse.composition);

    const result = await generateMetadata(mockParams);

    expect(result.title).toBe('Test Page');
    expect(result.description).toBe('Test Description');
    expect(result.keywords).toBe('test, keywords');
  });

  it('should return metadata with Open Graph fields', async () => {
    const mockParams: PageParameters = {
      params: Promise.resolve({}),
      searchParams: Promise.resolve({}),
    };

    const mockRoute = {
      compositionApiResponse: {
        composition: {
          pageTitle: 'Test Page',
          pageDescription: 'Test Description',
          openGraphTitle: 'OG Title',
          openGraphDescription: 'OG Description',
          openGraphType: 'website' as const,
          openGraphImage: { url: 'https://example.com/og.jpg' },
        },
      },
    };

    mockRetrieveRoute.mockResolvedValue(mockRoute);
    isRouteWithoutErrors.mockReturnValue(true);
    flattenValues.mockReturnValue(mockRoute.compositionApiResponse.composition);

    const result = await generateMetadata(mockParams);

    expect(result.openGraph?.title).toBe('OG Title');
    expect(result.openGraph?.description).toBe('OG Description');
    expect((result.openGraph as any).type).toBe('website');
    expect(result.openGraph?.images).toBe('https://example.com/og.jpg');
  });

  it('should return metadata with Twitter fields', async () => {
    const mockParams: PageParameters = {
      params: Promise.resolve({}),
      searchParams: Promise.resolve({}),
    };

    const mockRoute = {
      compositionApiResponse: {
        composition: {
          pageTitle: 'Test Page',
          pageDescription: 'Test Description',
          twitterTitle: 'Twitter Title',
          twitterDescription: 'Twitter Description',
          twitterImage: { url: 'https://example.com/twitter.jpg' },
          twitterCard: 'summary_large_image' as const,
        },
      },
    };

    mockRetrieveRoute.mockResolvedValue(mockRoute);
    isRouteWithoutErrors.mockReturnValue(true);
    flattenValues.mockReturnValue(mockRoute.compositionApiResponse.composition);

    const result = await generateMetadata(mockParams);

    expect((result.twitter as any).card).toBe('summary_large_image');
    expect(result.twitter?.title).toBe('Twitter Title');
    expect(result.twitter?.description).toBe('Twitter Description');
    expect(result.twitter?.images).toBe('https://example.com/twitter.jpg');
  });

  it('should use pageTitle as fallback for Open Graph and Twitter titles', async () => {
    const mockParams: PageParameters = {
      params: Promise.resolve({}),
      searchParams: Promise.resolve({}),
    };

    const mockRoute = {
      compositionApiResponse: {
        composition: {
          pageTitle: 'Test Page',
          pageDescription: 'Test Description',
        },
      },
    };

    mockRetrieveRoute.mockResolvedValue(mockRoute);
    isRouteWithoutErrors.mockReturnValue(true);
    flattenValues.mockReturnValue(mockRoute.compositionApiResponse.composition);

    const result = await generateMetadata(mockParams);

    expect(result.openGraph?.title).toBe('Test Page');
    expect(result.twitter?.title).toBe('Test Page');
  });

  it('should call notFound when route has errors', async () => {
    const mockParams: PageParameters = {
      params: Promise.resolve({}),
      searchParams: Promise.resolve({}),
    };

    const mockRoute = { errors: ['Some error'] };

    mockRetrieveRoute.mockResolvedValue(mockRoute);
    isRouteWithoutErrors.mockReturnValue(false);

    await expect(generateMetadata(mockParams)).rejects.toThrow('NEXT_NOT_FOUND');
    expect(notFound).toHaveBeenCalled();
  });

  it('should handle favicon field', async () => {
    const mockParams: PageParameters = {
      params: Promise.resolve({}),
      searchParams: Promise.resolve({}),
    };

    const mockRoute = {
      compositionApiResponse: {
        composition: {
          pageTitle: 'Test Page',
          favicon: { url: 'https://example.com/favicon.ico' },
        },
      },
    };

    mockRetrieveRoute.mockResolvedValue(mockRoute);
    isRouteWithoutErrors.mockReturnValue(true);
    flattenValues.mockReturnValue(mockRoute.compositionApiResponse.composition);

    const result = await generateMetadata(mockParams);

    expect((result.icons as any).icon).toBe('https://example.com/favicon.ico');
  });

  it('should handle empty parameters', async () => {
    const mockParams: PageParameters = {
      params: Promise.resolve({}),
      searchParams: Promise.resolve({}),
    };

    const mockRoute = {
      compositionApiResponse: {
        composition: {},
      },
    };

    mockRetrieveRoute.mockResolvedValue(mockRoute);
    isRouteWithoutErrors.mockReturnValue(true);
    flattenValues.mockReturnValue({});

    const result = await generateMetadata(mockParams);

    expect(result).toBeDefined();
  });
});
