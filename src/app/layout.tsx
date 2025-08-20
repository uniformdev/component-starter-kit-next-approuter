import { ReactNode, Suspense } from 'react';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { UniformContext } from '@uniformdev/canvas-next-rsc-v2';
import '@/styles/globals.css';
import '@/styles/colors.css';
import '@/styles/dimensions.css';
import '@/styles/fonts.css';
import '@/styles/borders.css';
import { customFontVariables } from '@/fonts';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={customFontVariables}>
      <body>
        <NextThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </NextThemeProvider>
        <Suspense>
          <UniformContext />
        </Suspense>
      </body>
    </html>
  );
}
