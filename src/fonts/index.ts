import localFont from 'next/font/local';

const roboto_serif = localFont({
  src: [
    {
      path: './roboto/RobotoSerif-SemiBold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--roboto-serif',
});

const roboto_flex = localFont({
  src: [
    {
      path: './roboto/RobotoFlex-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './roboto/RobotoFlex-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--roboto-flex',
});

export const customFontVariables = [roboto_serif.variable, roboto_flex.variable].join(' ');
