/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Container from './Container';
import { ContainerProps as CSKContainerProps } from '@uniformdev/csk-components/components/canvas';

jest.mock('@uniformdev/csk-components/components/canvas', () => ({
  Container: ({
    className,
    displayName,
    anchor,
    backgroundColor,
    spacing,
    border,
    fluidContent,
    fullHeight,
    fitHeight,
    height,
    slots,
  }: CSKContainerProps) => {
    const TestComponent = (
      <div
        data-testid="container"
        className={className}
        title={displayName}
        data-anchor={anchor}
        data-testid-background={backgroundColor}
        role="region"
      >
        {slots?.containerContent?.items}
      </div>
    );
    return TestComponent;
  },
}));

const mockComponent: CSKContainerProps['component'] = {
  type: 'test-type',
  parameters: {},
  _id: 'test-component-id',
};

const mockContext: CSKContainerProps['context'] = {
  matchedRoute: '/test',
  type: 'composition',
  compositionApiResponse: {
    state: 1,
    projectId: 'test-project',
    created: '2024-01-01T00:00:00Z',
    modified: '2024-01-01T00:00:00Z',
    pattern: false,
    composition: {
      type: 'root',
      parameters: {},
      _id: 'root-id',
      _name: 'Root',
      slots: {},
    },
  },
  composition: {
    type: 'root',
    parameters: {},
    _id: 'root-id',
    _name: 'Root',
    slots: {},
  },
  path: '/test',
  searchParams: {},
  isDraftMode: false,
  isContextualEditing: false,
  previewMode: undefined,
  state: 1,
} as unknown as CSKContainerProps['context'];

const mockSlots: CSKContainerProps['slots'] = {
  containerContent: {
    name: 'containerContent',
    items: [],
  },
};

const defaultProps: CSKContainerProps = {
  component: mockComponent,
  context: mockContext,
  slots: mockSlots,
  slotName: undefined,
  slotIndex: undefined,
};

describe('Container', () => {
  it('renders with default props', () => {
    render(<Container {...defaultProps} />);

    expect(screen.getByRole('region')).toBeInTheDocument();
  });

  it('renders with className prop', () => {
    render(
      <Container
        {...defaultProps}
        className="custom-class"
      />
    );

    const container = screen.getByRole('region');
    expect(container).toHaveClass('custom-class');
  });

  it('renders with displayName as title', () => {
    render(
      <Container
        {...defaultProps}
        displayName="Test Container"
      />
    );

    expect(screen.getByTitle('Test Container')).toBeInTheDocument();
  });

  it('renders with anchor id', () => {
    render(
      <Container
        {...defaultProps}
        anchor="test-anchor"
      />
    );

    const container = screen.getByTestId('container');
    expect(container).toHaveAttribute('data-anchor', 'test-anchor');
  });

  it('renders with backgroundColor prop', () => {
    render(
      <Container
        {...defaultProps}
        backgroundColor="bg-blue-500"
      />
    );

    const container = screen.getByTestId('container');
    expect(container).toHaveAttribute('data-testid-background', 'bg-blue-500');
  });

  it('passes all props correctly to CSKContainer', () => {
    render(
      <Container
        {...defaultProps}
        className="test-class"
        displayName="Test Display"
        backgroundColor="bg-red-500"
      />
    );

    const container = screen.getByTestId('container');
    expect(container).toHaveClass('test-class');
    expect(container).toHaveAttribute('data-testid-background', 'bg-red-500');
    expect(screen.getByTitle('Test Display')).toBeInTheDocument();
  });

  it('renders container content slot with items', () => {
    const slotsWithContent: CSKContainerProps['slots'] = {
      containerContent: {
        name: 'containerContent',
        items: [
          <div key="child-1">Child Component</div>,
        ],
      },
    };

    render(
      <Container
        {...defaultProps}
        slots={slotsWithContent}
      />
    );

    expect(screen.getByText('Child Component')).toBeInTheDocument();
  });
});
