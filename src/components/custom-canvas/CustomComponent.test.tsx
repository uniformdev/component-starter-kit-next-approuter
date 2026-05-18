/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CustomComponent from './CustomComponent';
import { ComponentInstance } from '@uniformdev/canvas';
import { CompositionContext, SlotDefinition } from '@uniformdev/canvas-next-rsc-shared';

jest.mock('@uniformdev/canvas-next-rsc/component', () => ({
  UniformText: ({
    parameterId,
    as: As,
    placeholder,
    component,
  }: {
    parameterId: string;
    as: React.ElementType;
    placeholder: string;
    component: ComponentInstance;
  }) => {
    const value = component.parameters?.[parameterId]?.value as string | undefined;
    return <As data-testid="uniform-text">{value || placeholder}</As>;
  },
  UniformSlot: ({ slot }: { slot: SlotDefinition | undefined }) => {
    if (!slot) return null;
    return <div data-testid="uniform-slot">{slot.items}</div>;
  },
}));

describe('CustomComponent', () => {
  const mockComponent: ComponentInstance = {
    _id: 'test-id',
    _name: 'TestComponent',
    type: 'customComponent',
    parameters: {
      displayName: {
        value: 'Test Display Name',
        type: 'text',
      },
    },
  } as ComponentInstance;

  const mockContext: CompositionContext = {
    locale: 'en',
    composition: {
      _id: 'composition-id',
      _name: 'Test Composition',
      type: 'composition',
      components: [],
    },
    path: '/test',
    isDraftMode: false,
    isContextualEditing: false,
    previewMode: undefined,
    searchParams: undefined,
    matchedRoute: '/test',
    type: 'composition',
  } as CompositionContext;

  const mockSlots: Record<string, SlotDefinition> = {
    customComponentContent: {
      name: 'customComponentContent',
      items: [],
    },
  };

  const defaultProps = {
    component: mockComponent,
    context: mockContext,
    slots: mockSlots,
    slotName: undefined,
    slotIndex: undefined,
  };

  it('should render without crashing', () => {
    render(<CustomComponent {...defaultProps} />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('should render UniformText with displayName parameter', () => {
    render(<CustomComponent {...defaultProps} />);
    expect(screen.getByText('Test Display Name')).toBeInTheDocument();
  });

  it('should render with placeholder text when displayName is not provided', () => {
    const componentWithoutDisplayName: ComponentInstance = {
      _id: 'test-id',
      _name: 'TestComponent',
      type: 'customComponent',
    } as ComponentInstance;

    const propsWithoutDisplayName = {
      ...defaultProps,
      component: componentWithoutDisplayName,
    };
    render(<CustomComponent {...propsWithoutDisplayName} />);
    expect(screen.getByText('Text goes here')).toBeInTheDocument();
  });

  it('should render UniformSlot with customComponentContent slot', () => {
    const slotContent = 'Slot Content';
    const propsWithSlot = {
      ...defaultProps,
      slots: {
        customComponentContent: {
          name: 'customComponentContent',
          items: [slotContent],
        },
      },
    };
    render(<CustomComponent {...propsWithSlot} />);
    expect(screen.getByText(slotContent)).toBeInTheDocument();
  });

  it('should render a div as the root element', () => {
    const { container } = render(<CustomComponent {...defaultProps} />);
    expect(container.firstChild?.nodeName).toBe('DIV');
  });

  it('should pass component and context to UniformText', () => {
    render(<CustomComponent {...defaultProps} />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  it('should handle empty slots', () => {
    const propsWithEmptySlots = {
      ...defaultProps,
      slots: {
        customComponentContent: {
          name: 'customComponentContent',
          items: [],
        },
      },
    };
    render(<CustomComponent {...propsWithEmptySlots} />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });
});
