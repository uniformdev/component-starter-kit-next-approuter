import { dm_sans, space_mono, customFontVariables } from './index';

jest.mock('next/font/google', () => ({
  DM_Sans: (options: { variable: string }) => ({
    variable: options.variable,
  }),
  Space_Mono: (options: { variable: string }) => ({
    variable: options.variable,
  }),
}));

describe('fonts', () => {
  describe('dm_sans', () => {
    it('should be defined', () => {
      expect(dm_sans).toBeDefined();
    });

    it('should have variable property', () => {
      expect(dm_sans.variable).toBeDefined();
    });

    it('should have correct variable name', () => {
      expect(dm_sans.variable).toBe('--dm-sans');
    });
  });

  describe('space_mono', () => {
    it('should be defined', () => {
      expect(space_mono).toBeDefined();
    });

    it('should have variable property', () => {
      expect(space_mono.variable).toBeDefined();
    });

    it('should have correct variable name', () => {
      expect(space_mono.variable).toBe('--space-mono');
    });
  });

  describe('customFontVariables', () => {
    it('should be defined', () => {
      expect(customFontVariables).toBeDefined();
    });

    it('should contain both font variables', () => {
      expect(customFontVariables).toContain('--dm-sans');
      expect(customFontVariables).toContain('--space-mono');
    });

    it('should be a space-separated string of both variables', () => {
      expect(customFontVariables).toBe('--dm-sans --space-mono');
    });
  });
});
