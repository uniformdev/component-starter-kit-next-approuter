import type {
  createPreviewGETRouteHandler,
  createPreviewPOSTRouteHandler,
  createPreviewOPTIONSRouteHandler,
} from '@uniformdev/canvas-next-rsc/handler';

describe('preview route', () => {
  const mockGetHandler = jest.fn();
  const mockPostHandler = jest.fn();
  const mockOptionsHandler = jest.fn();

  const createPreviewGETRouteHandlerMock = jest.fn<
    ReturnType<typeof createPreviewGETRouteHandler>,
    Parameters<typeof createPreviewGETRouteHandler>
  >(() => mockGetHandler);

  const createPreviewPOSTRouteHandlerMock = jest.fn<
    ReturnType<typeof createPreviewPOSTRouteHandler>,
    Parameters<typeof createPreviewPOSTRouteHandler>
  >(() => mockPostHandler);

  const createPreviewOPTIONSRouteHandlerMock = jest.fn<
    ReturnType<typeof createPreviewOPTIONSRouteHandler>,
    Parameters<typeof createPreviewOPTIONSRouteHandler>
  >(() => mockOptionsHandler);

  beforeAll(() => {
    jest.mock('@uniformdev/canvas-next-rsc/handler', () => ({
      createPreviewGETRouteHandler: createPreviewGETRouteHandlerMock,
      createPreviewPOSTRouteHandler: createPreviewPOSTRouteHandlerMock,
      createPreviewOPTIONSRouteHandler: createPreviewOPTIONSRouteHandlerMock,
    }));
  });

  beforeEach(() => {
    jest.clearAllMocks();
    // Clear module cache to ensure fresh require
    jest.resetModules();
  });

  describe('GET handler', () => {
    it('should be created with correct configuration', () => {
      const { GET } = require('./route');

      expect(createPreviewGETRouteHandlerMock).toHaveBeenCalledWith({
        playgroundPath: '/playground',
        resolveFullPath: expect.any(Function),
      });
    });

    it('should have resolveFullPath that returns path when provided', () => {
      const { GET } = require('./route');

      const callArgs = createPreviewGETRouteHandlerMock.mock.calls[0]?.[0];
      expect(callArgs).toBeDefined();
      const resolveFullPath = callArgs!.resolveFullPath;

      const result = resolveFullPath!({ path: '/test-path' }) as string;

      expect(result).toBe('/test-path');
    });

    it('should have resolveFullPath that returns /playground when path is empty', () => {
      const { GET } = require('./route');

      const callArgs = createPreviewGETRouteHandlerMock.mock.calls[0]?.[0];
      expect(callArgs).toBeDefined();
      const resolveFullPath = callArgs!.resolveFullPath;

      const result = resolveFullPath!({ path: '' }) as string;

      expect(result).toBe('/playground');
    });

    it('should have resolveFullPath that returns /playground when path is undefined', () => {
      const { GET } = require('./route');

      const callArgs = createPreviewGETRouteHandlerMock.mock.calls[0]?.[0];
      expect(callArgs).toBeDefined();
      const resolveFullPath = callArgs!.resolveFullPath;

      const result = resolveFullPath!({ path: undefined }) as string;

      expect(result).toBe('/playground');
    });

    it('should export GET as the handler returned by createPreviewGETRouteHandler', () => {
      const { GET } = require('./route');

      expect(GET).toBe(mockGetHandler);
    });
  });

  describe('POST handler', () => {
    it('should be created without arguments', () => {
      const { POST } = require('./route');

      expect(createPreviewPOSTRouteHandlerMock).toHaveBeenCalledWith();
    });

    it('should export POST as the handler returned by createPreviewPOSTRouteHandler', () => {
      const { POST } = require('./route');

      expect(POST).toBe(mockPostHandler);
    });
  });

  describe('OPTIONS handler', () => {
    it('should be created without arguments', () => {
      const { OPTIONS } = require('./route');

      expect(createPreviewOPTIONSRouteHandlerMock).toHaveBeenCalledWith();
    });

    it('should export OPTIONS as the handler returned by createPreviewOPTIONSRouteHandler', () => {
      const { OPTIONS } = require('./route');

      expect(OPTIONS).toBe(mockOptionsHandler);
    });
  });

  describe('module exports', () => {
    it('should export GET, POST, and OPTIONS handlers', () => {
      const { GET, POST, OPTIONS } = require('./route');

      expect(GET).toBeDefined();
      expect(POST).toBeDefined();
      expect(OPTIONS).toBeDefined();
    });
  });
});
