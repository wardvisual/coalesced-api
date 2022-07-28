export interface IColorTheme {
  colorWhitePrimary?: string;
  colorWhiteSecondary?: string;
  colorBlackPrimary?: string;
  colorBlackSecondary?: string;
  colorBluePrimary?: string;
  colorBlueSecondary?: string;
}

export interface IScreenTheme {
  extraSmallMediaMedia: string;
  smallMedia: string;
  mediumMedia: string;
  largeMedia: string;
  extraLargeMediaMedia: string;
}

export interface ITheme {
  colors: IColorTheme;
  screens: IScreenTheme;
}
