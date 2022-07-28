import { ThemeProvider } from 'styled-components';

import { IColorTheme, IScreenTheme, ITheme } from '@/shared/types';

const IColors: IColorTheme = {
  colorWhitePrimary: '#F5F5F5',
  colorBlackPrimary: '#0D0D0D',
};

const IScreen: IScreenTheme = {
  xSmall: 375,
  small: 576,
  medium: 768,
  large: 992,
  xLarge: 1200,
};

const theme = (): ITheme => ({ colors: IColors, screens: IScreen });

export { theme, ThemeProvider };
