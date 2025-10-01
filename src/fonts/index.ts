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

const tiempos_text = localFont({
  src: [
    {
      path: './tiempos/TiemposText-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './tiempos/TiemposText-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--tiempos-text',
});

const tiempos_headline = localFont({
  src: [
    {
      path: './tiempos/TiemposHeadline-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--tiempos-headline',
});

export const customFontVariables = [
  roboto_serif.variable,
  roboto_flex.variable,
  inter.variable,
  tiempos_text.variable,
  tiempos_headline.variable,
].join(' ');
