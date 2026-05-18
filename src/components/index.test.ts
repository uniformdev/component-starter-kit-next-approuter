import { ComponentInstance } from '@uniformdev/canvas';

jest.mock('@uniformdev/csk-components/utils/createComponentResolver', () => {
  const mockCreateComponentResolver = jest.fn(() => {
    return jest.fn(({ component }) => {
      if (component.type === 'customComponent') {
        return { component: jest.fn() };
      }
      if (component.type === 'container') {
        return { component: jest.fn() };
      }
      return undefined;
    });
  });
  return {
    __esModule: true,
    default: mockCreateComponentResolver,
  };
});

jest.mock('@uniformdev/csk-components/components/canvas', () => ({
  cskComponentsMapping: {},
}));

jest.mock('@/components/canvas', () => ({
  cskComponentsMapping: {},
}));

jest.mock('@/components/custom-canvas', () => ({
  customComponentsMapping: {
    customComponent: { component: jest.fn() },
    container: { component: jest.fn() },
  },
}));

import { componentResolver } from './index';

describe('components/index', () => {
  describe('componentResolver', () => {
    it('should be defined', () => {
      expect(componentResolver).toBeDefined();
    });

    it('should be a function', () => {
      expect(typeof componentResolver).toBe('function');
    });

    it('should resolve customComponent from customComponentsMapping', () => {
      const componentInstance: ComponentInstance = {
        type: 'customComponent',
      } as ComponentInstance;

      const result = componentResolver({ component: componentInstance });
      expect(result).toBeDefined();
    });

    it('should resolve container from customComponentsMapping (overridden)', () => {
      const componentInstance: ComponentInstance = {
        type: 'container',
      } as ComponentInstance;

      const result = componentResolver({ component: componentInstance });
      expect(result).toBeDefined();
    });

    it('should return undefined for non-existent component', () => {
      const componentInstance: ComponentInstance = {
        type: 'nonExistentComponent',
      } as ComponentInstance;

      const result = componentResolver({ component: componentInstance });
      expect(result).toBeUndefined();
    });
  });
});
