import { Roboto_Flex, Roboto_Serif } from 'next/font/google';

export const roboto_serif = Roboto_Serif({
  subsets: ['latin'],
  variable: '--roboto-serif',
  display: 'swap',
  weight: ['700'],
  style: ['normal'],
  preload: true,
});

export const roboto_flex = Roboto_Flex({
  subsets: ['latin'],
  variable: '--roboto-flex',
  display: 'swap',
  weight: ['400', '700'],
  style: ['normal'],
  preload: true,
});

export const customFontVariables = [roboto_serif.variable, roboto_flex.variable].join(' ');
