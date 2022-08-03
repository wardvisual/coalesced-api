import defaultStyled, {
  ThemedStyledInterface,
  ThemeProvider as SThemeProvider,
} from 'styled-components';

/* Constants */
import { ScreenSize } from '@/shared/constants';

/* Types */
import { IColorTheme, IDeviceTheme, ITheme } from '@/shared/types';

export const IColors: IColorTheme = {
  colorWhitePrimary: '#EEFAFF',
  colorWhiteSecondary: '#D7DBDC',
  colorBlackPrimary: '#0D0D0D',
  colorBlackSecondary: '#1F1E1E',
};

export const IDeviceScreen: IDeviceTheme = {
  MobileSmall: `(min-width: ${ScreenSize.MobileSmall})`,
  MobileMedium: `(min-width: ${ScreenSize.MobileMedium})`,
  MobileLarge: `(min-width: ${ScreenSize.MobileLarge})`,
  Tablet: `(min-width: ${ScreenSize.Tablet})`,
  Laptop: `(min-width: ${ScreenSize.Laptop})`,
  LaptopLarge: `(min-width: ${ScreenSize.LaptopLarge})`,
  Desktop: `(min-width: ${ScreenSize.Desktop})`,
};

export const ThemeProvider = SThemeProvider;

export const styled: ThemedStyledInterface<ITheme> = defaultStyled;

export const theme = (): ITheme => ({
  color: IColors,
  device: IDeviceScreen,
});
