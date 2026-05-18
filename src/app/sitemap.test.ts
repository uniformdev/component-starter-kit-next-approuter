import type { MetadataRoute } from 'next';

// Mock @uniformdev/project-map
jest.mock('@uniformdev/project-map', () => {
  const mockGetNodes = jest.fn();
  const mockGetNodeActiveCompositionEdition = jest.fn();

  return {
    ProjectMapClient: jest.fn().mockImplementation(() => ({
      getNodes: mockGetNodes,
    })),
    getNodeActiveCompositionEdition: mockGetNodeActiveCompositionEdition,
    __mocks: {
      mockGetNodes,
      mockGetNodeActiveCompositionEdition,
    },
  };
});

describe('sitemap', () => {
  let sitemap: () => Promise<MetadataRoute.Sitemap>;
  let mockGetNodes: jest.Mock;
  let mockGetNodeActiveCompositionEdition: jest.Mock;

  beforeEach(async () => {
    jest.clearAllMocks();
    jest.resetModules();
    
    delete process.env.BASE_URL;
    delete process.env.UNIFORM_CLI_BASE_URL;
    delete process.env.UNIFORM_API_KEY;
    delete process.env.UNIFORM_PROJECT_ID;

    // Mock locales config before importing sitemap
    jest.mock('@/i18n/locales.json', () => ({
      locales: ['en'],
      localeNames: { en: 'English' },
      defaultLocale: 'en',
    }));

    const module = await import('./sitemap');
    sitemap = module.default;
    
    const mocks = require('@uniformdev/project-map').__mocks;
    mockGetNodes = mocks.mockGetNodes;
    mockGetNodeActiveCompositionEdition = mocks.mockGetNodeActiveCompositionEdition;
  });

  it('should return empty array when nodes is null', async () => {
    mockGetNodes.mockResolvedValue({ nodes: null });

    const result = await sitemap();

    expect(result).toEqual([]);
    expect(mockGetNodes).toHaveBeenCalledWith({ withCompositionData: true });
  });

  it('should return empty array when nodes is undefined', async () => {
    mockGetNodes.mockResolvedValue({ nodes: undefined });

    const result = await sitemap();

    expect(result).toEqual([]);
  });

  it('should generate sitemap for non-localized node', async () => {
    const mockNodes = [
      {
        path: '/home',
        composition: {},
      },
    ];
    mockGetNodes.mockResolvedValue({ nodes: mockNodes });
    mockGetNodeActiveCompositionEdition.mockReturnValue({ modified: '2024-01-01T00:00:00.000Z' });

    const result = await sitemap();

    expect(result).toEqual([
      {
        url: 'http://localhost:3000/home',
        lastModified: '2024-01-01T00:00:00.000Z',
        changeFrequency: 'daily',
        priority: 1,
      },
    ]);
  });

  it('should use BASE_URL environment variable when set', async () => {
    // Set env var before importing the module
    process.env.BASE_URL = 'example.com';
    
    jest.resetModules();
    jest.mock('@/i18n/locales.json', () => ({
      locales: ['en'],
      localeNames: { en: 'English' },
      defaultLocale: 'en',
    }));

    const module = await import('./sitemap');
    const sitemapWithBaseUrl = module.default;
    
    const mocks = require('@uniformdev/project-map').__mocks;
    const mockGetNodesLocal = mocks.mockGetNodes;
    const mockGetNodeActiveCompositionEditionLocal = mocks.mockGetNodeActiveCompositionEdition;

    const mockNodes = [
      {
        path: '/about',
        composition: {},
      },
    ];
    mockGetNodesLocal.mockResolvedValue({ nodes: mockNodes });
    mockGetNodeActiveCompositionEditionLocal.mockReturnValue({ modified: '2024-01-01T00:00:00.000Z' });

    const result = await sitemapWithBaseUrl();

    expect(result).toEqual([
      {
        url: 'https://example.com/about',
        lastModified: '2024-01-01T00:00:00.000Z',
        changeFrequency: 'daily',
        priority: 1,
      },
    ]);
  });

  it('should use UNIFORM_CLI_BASE_URL environment variable', async () => {
    // Set env var before importing the module
    process.env.UNIFORM_CLI_BASE_URL = 'https://custom.uniform.app';
    process.env.UNIFORM_API_KEY = 'test-api-key';
    process.env.UNIFORM_PROJECT_ID = 'test-project-id';
    
    jest.resetModules();
    jest.mock('@/i18n/locales.json', () => ({
      locales: ['en'],
      localeNames: { en: 'English' },
      defaultLocale: 'en',
    }));

    const module = await import('./sitemap');
    const sitemapWithCustomUrl = module.default;
    
    const mocks = require('@uniformdev/project-map').__mocks;
    const mockGetNodesLocal = mocks.mockGetNodes;
    const mockGetNodeActiveCompositionEditionLocal = mocks.mockGetNodeActiveCompositionEdition;

    const mockNodes = [
      {
        path: '/contact',
        composition: {},
      },
    ];
    mockGetNodesLocal.mockResolvedValue({ nodes: mockNodes });
    mockGetNodeActiveCompositionEditionLocal.mockReturnValue({ modified: '2024-01-01T00:00:00.000Z' });

    await sitemapWithCustomUrl();

    const { ProjectMapClient } = require('@uniformdev/project-map');
    expect(ProjectMapClient).toHaveBeenCalledWith(
      expect.objectContaining({
        apiHost: 'https://custom.uniform.app',
      })
    );
  });

  it('should generate sitemap for localized node', async () => {
    const mockNodes = [
      {
        path: '/:locale/products',
        composition: {},
      },
    ];
    mockGetNodes.mockResolvedValue({ nodes: mockNodes });
    mockGetNodeActiveCompositionEdition.mockReturnValue({ modified: '2024-01-01T00:00:00.000Z' });

    const result = await sitemap();

    expect(result).toEqual([
      {
        url: 'http://localhost:3000/en/products',
        lastModified: '2024-01-01T00:00:00.000Z',
        changeFrequency: 'daily',
        priority: 1,
      },
    ]);
    expect(mockGetNodeActiveCompositionEdition).toHaveBeenCalledWith({
      node: mockNodes[0],
      targetLocale: 'en',
    });
  });

  it('should handle multiple locales', async () => {
    jest.resetModules();
    jest.mock('@/i18n/locales.json', () => ({
      locales: ['en', 'es', 'fr'],
      localeNames: { en: 'English', es: 'Spanish', fr: 'French' },
      defaultLocale: 'en',
    }));

    const module = await import('./sitemap');
    const sitemapWithMultipleLocales = module.default;
    
    const mocks = require('@uniformdev/project-map').__mocks;
    const mockGetNodesLocal = mocks.mockGetNodes;
    const mockGetNodeActiveCompositionEditionLocal = mocks.mockGetNodeActiveCompositionEdition;

    const mockNodes = [
      {
        path: '/:locale/page',
        composition: {},
      },
    ];
    mockGetNodesLocal.mockResolvedValue({ nodes: mockNodes });
    mockGetNodeActiveCompositionEditionLocal.mockReturnValue({ modified: '2024-01-01T00:00:00.000Z' });

    const result = await sitemapWithMultipleLocales();

    expect(result).toEqual([
      {
        url: 'http://localhost:3000/en/page',
        lastModified: '2024-01-01T00:00:00.000Z',
        changeFrequency: 'daily',
        priority: 1,
      },
      {
        url: 'http://localhost:3000/es/page',
        lastModified: '2024-01-01T00:00:00.000Z',
        changeFrequency: 'daily',
        priority: 1,
      },
      {
        url: 'http://localhost:3000/fr/page',
        lastModified: '2024-01-01T00:00:00.000Z',
        changeFrequency: 'daily',
        priority: 1,
      },
    ]);
  });

  it('should handle node without lastModified when edition is undefined', async () => {
    const mockNodes = [
      {
        path: '/page',
        composition: {},
      },
    ];
    mockGetNodes.mockResolvedValue({ nodes: mockNodes });
    mockGetNodeActiveCompositionEdition.mockReturnValue(undefined);

    const result = await sitemap();

    expect(result).toEqual([
      {
        url: 'http://localhost:3000/page',
        lastModified: undefined,
        changeFrequency: 'daily',
        priority: 1,
      },
    ]);
  });

  it('should handle multiple nodes with mixed localized and non-localized paths', async () => {
    const mockNodes = [
      {
        path: '/static',
        composition: {},
      },
      {
        path: '/:locale/dynamic',
        composition: {},
      },
    ];
    mockGetNodes.mockResolvedValue({ nodes: mockNodes });
    mockGetNodeActiveCompositionEdition.mockReturnValue({ modified: '2024-01-01T00:00:00.000Z' });

    const result = await sitemap();

    expect(result).toEqual([
      {
        url: 'http://localhost:3000/static',
        lastModified: '2024-01-01T00:00:00.000Z',
        changeFrequency: 'daily',
        priority: 1,
      },
      {
        url: 'http://localhost:3000/en/dynamic',
        lastModified: '2024-01-01T00:00:00.000Z',
        changeFrequency: 'daily',
        priority: 1,
      },
    ]);
  });

  it('should handle empty nodes array', async () => {
    mockGetNodes.mockResolvedValue({ nodes: [] });

    const result = await sitemap();

    expect(result).toEqual([]);
  });
});
