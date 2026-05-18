jest.mock('@uniformdev/csk-components/components/canvas', () => ({
  cskComponentsMapping: {
    mockComponent: 'MockComponent',
  },
}));

import { cskComponentsMapping } from './index';

describe('canvas index', () => {
  describe('cskComponentsMapping', () => {
    it('should be defined', () => {
      expect(cskComponentsMapping).toBeDefined();
    });

    it('should be an object', () => {
      expect(typeof cskComponentsMapping).toBe('object');
    });

    it('should not be null', () => {
      expect(cskComponentsMapping).not.toBeNull();
    });
  });
});
