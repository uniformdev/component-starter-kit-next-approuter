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

const inter = localFont({
  src: [
    {
      path: './inter/Inter-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './inter/Inter-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './inter/Inter-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--inter',
});

const tiempos = localFont({
  src: [
    // {
    //   path: './inter/TiemposText-RegularItalic.woff2',
    //   weight: '400',
    //   style: 'italic',
    // },
    {
      path: './inter/TiemposText-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './inter/TiemposText-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    // {
    //   path: './inter/TiemposText-SemiboldItalic.woff2',
    //   weight: '600',
    //   style: 'italic',
    // },
    {
      path: './inter/TiemposHeadline-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--tiempos',
});

export const customFontVariables = [roboto_serif.variable, roboto_flex.variable, inter.variable, tiempos.variable].join(
  ' '
);
