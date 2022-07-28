export interface IColorTheme {
  colorWhitePrimary?: string;
  colorWhiteSecondary?: string;
  colorBlackPrimary?: string;
  colorBlackSecondary?: string;
  colorBluePrimary?: string;
  colorBlueSecondary?: string;
}

export interface IScreenTheme {
  xSmall: number;
  small: number;
  medium: number;
  large: number;
  xLarge: number;
}

export interface ITheme {
  colors: IColorTheme;
  screens: IScreenTheme;
}
