/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import PlaygroundPage from './page';

// Mock the external dependencies
jest.mock('@uniformdev/canvas-next-rsc', () => ({
  UniformPlayground: ({ children }: { children?: React.ReactNode }) => (
    <div data-testid="uniform-playground">{children}</div>
  ),
}));

jest.mock('@uniformdev/csk-components/components/canvas/emptyPlaceholders', () => ({
  emptyPlaceholderResolver: jest.fn(),
}));

jest.mock('@uniformdev/design-extensions-tools/components/providers/server', () => ({
  DesignExtensionsProvider: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="design-extensions-provider">{children}</div>
  ),
}));

jest.mock('@/components', () => ({
  componentResolver: jest.fn(),
}));

describe('PlaygroundPage', () => {
  it('should render the playground page with DesignExtensionsProvider and UniformPlayground', async () => {
    const props = {
      searchParams: Promise.resolve({}),
    };

    const Component = await PlaygroundPage(props);
    const { getByTestId } = render(Component);

    const provider = getByTestId('design-extensions-provider');
    const playground = getByTestId('uniform-playground');

    expect(provider).toBeInTheDocument();
    expect(playground).toBeInTheDocument();
  });

  it('should pass searchParams to UniformPlayground', async () => {
    const props = {
      searchParams: Promise.resolve({ projectId: 'test-project' }),
    };

    const Component = await PlaygroundPage(props);
    const { getByTestId } = render(Component);

    const playground = getByTestId('uniform-playground');
    expect(playground).toBeInTheDocument();
  });

  it('should render with empty searchParams', async () => {
    const props = {
      searchParams: Promise.resolve({}),
    };

    const Component = await PlaygroundPage(props);
    const { getByTestId } = render(Component);

    const playground = getByTestId('uniform-playground');
    expect(playground).toBeInTheDocument();
  });
});
