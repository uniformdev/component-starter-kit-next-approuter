/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RootLayout from './layout';

jest.mock('next-themes', () => ({
  ThemeProvider: ({ children, attribute, defaultTheme, enableSystem }: {
    children: React.ReactNode;
    attribute?: string;
    defaultTheme?: string;
    enableSystem?: boolean;
  }) => (
    <div data-testid="theme-provider" data-attribute={attribute} data-default-theme={defaultTheme} data-enable-system={enableSystem}>
      <div className="mock-font-variables">{children}</div>
    </div>
  ),
}));

jest.mock('@uniformdev/canvas-next-rsc', () => ({
  UniformContext: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="uniform-context">{children}</div>
  ),
}));

jest.mock('@/styles/globals.css', () => ({}));
jest.mock('@/styles/colors.css', () => ({}));
jest.mock('@/styles/dimensions.css', () => ({}));
jest.mock('@/styles/fonts.css', () => ({}));
jest.mock('@/styles/borders.css', () => ({}));
jest.mock('@/fonts', () => ({
  customFontVariables: 'mock-font-variables',
}));

describe('RootLayout', () => {
  it('renders children correctly', () => {
    render(<RootLayout>Test Content</RootLayout>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('renders ThemeProvider with correct attributes', () => {
    render(<RootLayout>Test Content</RootLayout>);
    const themeProvider = screen.getByTestId('theme-provider');
    expect(themeProvider).toHaveAttribute('data-attribute', 'class');
    expect(themeProvider).toHaveAttribute('data-default-theme', 'light');
    expect(themeProvider).toHaveAttribute('data-enable-system', 'true');
  });

  it('renders body element with font variables class', () => {
    const { container } = render(<RootLayout>Test Content</RootLayout>);
    expect(container.innerHTML).toContain('mock-font-variables');
  });

  it('renders UniformContext wrapper', () => {
    render(<RootLayout>Test Content</RootLayout>);
    expect(screen.getByTestId('uniform-context')).toBeInTheDocument();
  });

  it('wraps children in correct component hierarchy', () => {
    render(<RootLayout><span>Child Content</span></RootLayout>);
    const uniformContext = screen.getByTestId('uniform-context');
    const themeProvider = screen.getByTestId('theme-provider');
    expect(uniformContext).toContainElement(screen.getByText('Child Content'));
    expect(themeProvider).toContainElement(uniformContext);
  });
});
