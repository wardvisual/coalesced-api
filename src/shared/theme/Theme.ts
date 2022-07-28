import defaultStyled, {
  ThemedStyledInterface,
  ThemeProvider as SThemeProvider,
} from 'styled-components';

/* Constants */
import { ScreenSize } from '@/shared/constants';

/* Types */
import { IColorTheme, IScreenTheme, ITheme } from '@/shared/types';

export const IColors: IColorTheme = {
  colorWhitePrimary: '#F5F5F5',
  colorBlackPrimary: '#0D0D0D',
};

export const IScreen: IScreenTheme = {
  extraSmallMediaMedia: `@media (min-width: ${ScreenSize.extraSmallMedia})`,
  smallMedia: `@media (min-width: ${ScreenSize.smallMedia})`,
  mediumMedia: `@media (min-width: ${ScreenSize.mediumMedia})`,
  largeMedia: `@media (min-width: ${ScreenSize.largeMedia})`,
  extraLargeMediaMedia: `@media (min-width: ${ScreenSize.EXTRA_largeMedia})`,
};

export const ThemeProvider = SThemeProvider;

export const styled: ThemedStyledInterface<ITheme> = defaultStyled;

export const theme = (): ITheme => ({ colors: IColors, screens: IScreen });
