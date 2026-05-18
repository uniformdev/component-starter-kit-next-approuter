import retrieveRoute from './retrieveRoute';

jest.mock('@uniformdev/canvas-next-rsc', () => ({
  retrieveRoute: jest.fn(),
}));

jest.mock('@/i18n/locales.json', () => ({
  locales: ['en', 'fr', 'de', 'es'],
}));

describe('retrieveRoute', () => {
  const { retrieveRoute: mockUniformRetrieveRoute } = require('@uniformdev/canvas-next-rsc');

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('when locale is not provided', () => {
    it('should call uniformRetrieveRoute with original props when locale is undefined', async () => {
      const mockProps = {
        params: Promise.resolve({ path: '/test' }),
      };
      const mockResult = { type: 'success' as const, data: 'test-data' };

      mockUniformRetrieveRoute.mockResolvedValue(mockResult);

      const result = await retrieveRoute(mockProps, undefined);

      expect(mockUniformRetrieveRoute).toHaveBeenCalledWith(mockProps);
      expect(mockUniformRetrieveRoute).toHaveBeenCalledTimes(1);
      expect(result).toBe(mockResult);
    });

    it('should call uniformRetrieveRoute with original props when locale is null', async () => {
      const mockProps = {
        params: Promise.resolve({ path: '/test' }),
      };
      const mockResult = { type: 'success' as const, data: 'test-data' };

      mockUniformRetrieveRoute.mockResolvedValue(mockResult);

      const result = await retrieveRoute(mockProps, null);

      expect(mockUniformRetrieveRoute).toHaveBeenCalledWith(mockProps);
      expect(mockUniformRetrieveRoute).toHaveBeenCalledTimes(1);
      expect(result).toBe(mockResult);
    });

    it('should call uniformRetrieveRoute with original props when locale is empty string', async () => {
      const mockProps = {
        params: Promise.resolve({ path: '/test' }),
      };
      const mockResult = { type: 'success' as const, data: 'test-data' };

      mockUniformRetrieveRoute.mockResolvedValue(mockResult);

      const result = await retrieveRoute(mockProps, '');

      expect(mockUniformRetrieveRoute).toHaveBeenCalledWith(mockProps);
      expect(mockUniformRetrieveRoute).toHaveBeenCalledTimes(1);
      expect(result).toBe(mockResult);
    });
  });

  describe('when locale is provided', () => {
    it('should prepend locale to string path', async () => {
      const mockProps = {
        params: Promise.resolve({ path: '/test' }),
      };
      const mockResult = { type: 'success' as const, data: 'test-data' };

      mockUniformRetrieveRoute.mockResolvedValue(mockResult);

      await retrieveRoute(mockProps, 'fr');

      expect(mockUniformRetrieveRoute).toHaveBeenCalledTimes(1);
      const callArgs = mockUniformRetrieveRoute.mock.calls[0][0];
      const resolvedParams = await callArgs.params;
      expect(resolvedParams).toEqual({ path: 'fr//test' });
    });

    it('should prepend locale to array path', async () => {
      const mockProps = {
        params: Promise.resolve({ path: ['test', 'segment'] }),
      };
      const mockResult = { type: 'success' as const, data: 'test-data' };

      mockUniformRetrieveRoute.mockResolvedValue(mockResult);

      await retrieveRoute(mockProps, 'de');

      expect(mockUniformRetrieveRoute).toHaveBeenCalledTimes(1);
      const callArgs = mockUniformRetrieveRoute.mock.calls[0][0];
      const resolvedParams = await callArgs.params;
      expect(resolvedParams).toEqual({ path: ['de', 'test', 'segment'] });
    });

    it('should not modify path that already contains locale as string', async () => {
      const mockProps = {
        params: Promise.resolve({ path: 'en/test' }),
      };
      const mockResult = { type: 'success' as const, data: 'test-data' };

      mockUniformRetrieveRoute.mockResolvedValue(mockResult);

      await retrieveRoute(mockProps, 'fr');

      expect(mockUniformRetrieveRoute).toHaveBeenCalledTimes(1);
      const callArgs = mockUniformRetrieveRoute.mock.calls[0][0];
      const resolvedParams = await callArgs.params;
      expect(resolvedParams).toEqual({ path: 'fr/en/test' });
    });

    it('should not modify path that already contains locale as array', async () => {
      const mockProps = {
        params: Promise.resolve({ path: ['en', 'test'] }),
      };
      const mockResult = { type: 'success' as const, data: 'test-data' };

      mockUniformRetrieveRoute.mockResolvedValue(mockResult);

      await retrieveRoute(mockProps, 'fr');

      expect(mockUniformRetrieveRoute).toHaveBeenCalledTimes(1);
      const callArgs = mockUniformRetrieveRoute.mock.calls[0][0];
      const resolvedParams = await callArgs.params;
      expect(resolvedParams).toEqual({ path: ['en', 'test'] });
    });

    it('should handle undefined path by returning locale only', async () => {
      const mockProps = {
        params: Promise.resolve({}),
      };
      const mockResult = { type: 'success' as const, data: 'test-data' };

      mockUniformRetrieveRoute.mockResolvedValue(mockResult);

      await retrieveRoute(mockProps, 'es');

      expect(mockUniformRetrieveRoute).toHaveBeenCalledTimes(1);
      const callArgs = mockUniformRetrieveRoute.mock.calls[0][0];
      const resolvedParams = await callArgs.params;
      expect(resolvedParams).toEqual({ path: 'es' });
    });

    it('should try fallback without locale when route returns notFound', async () => {
      const mockProps = {
        params: Promise.resolve({ path: '/test' }),
      };
      const notFoundResult = { type: 'notFound' as const };
      const successResult = { type: 'success' as const, data: 'fallback-data' };

      mockUniformRetrieveRoute.mockResolvedValueOnce(notFoundResult);
      mockUniformRetrieveRoute.mockResolvedValueOnce(successResult);

      const result = await retrieveRoute(mockProps, 'fr');

      expect(mockUniformRetrieveRoute).toHaveBeenCalledTimes(2);

      const firstCallArgs = mockUniformRetrieveRoute.mock.calls[0][0];
      const firstResolvedParams = await firstCallArgs.params;
      expect(firstResolvedParams).toEqual({ path: 'fr//test' });
      
      const secondCallArgs = mockUniformRetrieveRoute.mock.calls[1][0];
      const secondResolvedParams = await secondCallArgs.params;
      expect(secondResolvedParams).toEqual({ path: '/test' });
      
      expect(result).toBe(successResult);
    });

    it('should not try fallback when route is successful', async () => {
      const mockProps = {
        params: Promise.resolve({ path: '/test' }),
      };
      const mockResult = { type: 'success' as const, data: 'test-data' };

      mockUniformRetrieveRoute.mockResolvedValue(mockResult);

      const result = await retrieveRoute(mockProps, 'fr');

      expect(mockUniformRetrieveRoute).toHaveBeenCalledTimes(1);
      expect(result).toBe(mockResult);
    });

    it('should return notFound result when fallback also returns notFound', async () => {
      const mockProps = {
        params: Promise.resolve({ path: '/test' }),
      };
      const notFoundResult = { type: 'notFound' as const };

      mockUniformRetrieveRoute.mockResolvedValue(notFoundResult);

      const result = await retrieveRoute(mockProps, 'fr');

      expect(mockUniformRetrieveRoute).toHaveBeenCalledTimes(2);
      expect(result).toBe(notFoundResult);
    });
  });

  describe('isLocaleInPath behavior', () => {
    it('should recognize valid locale in string path and not modify it', async () => {
      const mockProps = {
        params: Promise.resolve({ path: 'en/test' }),
      };
      const mockResult = { type: 'success' as const, data: 'test-data' };

      mockUniformRetrieveRoute.mockResolvedValue(mockResult);

      await retrieveRoute(mockProps, 'fr');

      // Path should remain unchanged since it already contains a valid locale
      const callArgs = mockUniformRetrieveRoute.mock.calls[0][0];
      const resolvedParams = await callArgs.params;
      expect(resolvedParams.path).toBe('fr/en/test');
    });

    it('should recognize valid locale in array path and not modify it', async () => {
      const mockProps = {
        params: Promise.resolve({ path: ['de', 'test'] }),
      };
      const mockResult = { type: 'success' as const, data: 'test-data' };

      mockUniformRetrieveRoute.mockResolvedValue(mockResult);

      await retrieveRoute(mockProps, 'fr');

      // Path should remain unchanged since it already contains a valid locale
      const callArgs = mockUniformRetrieveRoute.mock.calls[0][0];
      const resolvedParams = await callArgs.params;
      expect(resolvedParams.path).toEqual(['de', 'test']);
    });

    it('should add locale when string path does not contain valid locale', async () => {
      const mockProps = {
        params: Promise.resolve({ path: '/invalid-path' }),
      };
      const mockResult = { type: 'success' as const, data: 'test-data' };

      mockUniformRetrieveRoute.mockResolvedValue(mockResult);

      await retrieveRoute(mockProps, 'en');

      const callArgs = mockUniformRetrieveRoute.mock.calls[0][0];
      const resolvedParams = await callArgs.params;
      expect(resolvedParams.path).toBe('en//invalid-path');
    });

    it('should add locale when array path does not contain valid locale', async () => {
      const mockProps = {
        params: Promise.resolve({ path: ['invalid', 'path'] }),
      };
      const mockResult = { type: 'success' as const, data: 'test-data' };

      mockUniformRetrieveRoute.mockResolvedValue(mockResult);

      await retrieveRoute(mockProps, 'es');

      const callArgs = mockUniformRetrieveRoute.mock.calls[0][0];
      const resolvedParams = await callArgs.params;
      expect(resolvedParams.path).toEqual(['es', 'invalid', 'path']);
    });
  });

  describe('formatPath behavior', () => {
    it('should return only locale when path is undefined', async () => {
      const mockProps = {
        params: Promise.resolve({}),
      };
      const mockResult = { type: 'success' as const, data: 'test-data' };

      mockUniformRetrieveRoute.mockResolvedValue(mockResult);

      await retrieveRoute(mockProps, 'en');

      const callArgs = mockUniformRetrieveRoute.mock.calls[0][0];
      const resolvedParams = await callArgs.params;
      expect(resolvedParams.path).toBe('en');
    });

    it('should prepend locale to string path without locale', async () => {
      const mockProps = {
        params: Promise.resolve({ path: '/about' }),
      };
      const mockResult = { type: 'success' as const, data: 'test-data' };

      mockUniformRetrieveRoute.mockResolvedValue(mockResult);

      await retrieveRoute(mockProps, 'fr');

      const callArgs = mockUniformRetrieveRoute.mock.calls[0][0];
      const resolvedParams = await callArgs.params;
      expect(resolvedParams.path).toBe('fr//about');
    });

    it('should prepend locale to array path without locale', async () => {
      const mockProps = {
        params: Promise.resolve({ path: ['products', 'item'] }),
      };
      const mockResult = { type: 'success' as const, data: 'test-data' };

      mockUniformRetrieveRoute.mockResolvedValue(mockResult);

      await retrieveRoute(mockProps, 'de');

      const callArgs = mockUniformRetrieveRoute.mock.calls[0][0];
      const resolvedParams = await callArgs.params;
      expect(resolvedParams.path).toEqual(['de', 'products', 'item']);
    });
  });

  describe('getUpdatedParams behavior', () => {
    it('should preserve other params properties while updating path', async () => {
      const mockProps = {
        params: Promise.resolve({ path: '/test', slug: 'my-slug' }),
      };
      const mockResult = { type: 'success' as const, data: 'test-data' };

      mockUniformRetrieveRoute.mockResolvedValue(mockResult);

      await retrieveRoute(mockProps, 'en');

      const callArgs = mockUniformRetrieveRoute.mock.calls[0][0];
      const resolvedParams = await callArgs.params;
      expect(resolvedParams).toEqual({ path: 'en//test', slug: 'my-slug' });
    });

    it('should handle params without path property', async () => {
      const mockProps = {
        params: Promise.resolve({}),
      };
      const mockResult = { type: 'success' as const, data: 'test-data' };

      mockUniformRetrieveRoute.mockResolvedValue(mockResult);

      await retrieveRoute(mockProps, 'es');

      const callArgs = mockUniformRetrieveRoute.mock.calls[0][0];
      const resolvedParams = await callArgs.params;
      expect(resolvedParams).toEqual({ path: 'es' });
    });
  });
});
