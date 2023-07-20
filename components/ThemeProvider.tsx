import classNames from 'classnames';
import { appFonts } from '@/fonts';
import { generateCustomTheme } from '@/utils/theme';
import { getGlobalComponent } from '@/utils/global';

type ThemeValue = {
  themeName: Types.SupportedThemes;
  colors: Types.ThemeColors[];
};

const ThemeProvider = async ({
  children
}: {
  children: React.ReactNode;
}) => {
  const data = await getGlobalComponent();

  const font = data?.parameters?.font?.value as Types.SupportedFonts;
  const currentFont = appFonts[font];

  const themeName = (data?.parameters?.theme?.value as ThemeValue)?.themeName;
  const colors = (data?.parameters?.theme?.value as ThemeValue)?.colors;

  const generatedTheme = generateCustomTheme(themeName, colors);

  return (
    // The way how we can set current theme
    <div
      className={classNames('min-h-screen overflow-x-hidden flex flex-col', currentFont?.className)}
      data-theme={(data?.parameters?.theme?.value as ThemeValue)?.themeName}
    >
      <div dangerouslySetInnerHTML={{ __html: generatedTheme }} />
      {children}
    </div>
  );
};

export default ThemeProvider;
