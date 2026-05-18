jest.mock('./Container', () => {
  const ContainerMock = () => null;
  ContainerMock.displayName = 'Container';
  return ContainerMock;
});

jest.mock('./CustomComponent', () => {
  const CustomComponentMock = () => null;
  CustomComponentMock.displayName = 'CustomComponent';
  return CustomComponentMock;
});

import { customComponentsMapping } from './index';
import Container from './Container';
import CustomComponent from './CustomComponent';

describe('customComponentsMapping', () => {
  it('should export customComponentsMapping object', () => {
    expect(customComponentsMapping).toBeDefined();
    expect(typeof customComponentsMapping).toBe('object');
  });

  it('should have customComponent mapping', () => {
    expect(customComponentsMapping.customComponent).toBeDefined();
    expect(customComponentsMapping.customComponent?.component).toBe(CustomComponent);
  });

  it('should have container mapping', () => {
    expect(customComponentsMapping.container).toBeDefined();
    expect(customComponentsMapping.container?.component).toBe(Container);
  });

  it('should have exactly two mappings', () => {
    const keys = Object.keys(customComponentsMapping);
    expect(keys).toHaveLength(2);
    expect(keys).toContain('customComponent');
    expect(keys).toContain('container');
  });
});
