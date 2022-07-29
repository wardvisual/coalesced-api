export interface IColorTheme {
  colorWhitePrimary?: string;
  colorWhiteSecondary?: string;
  colorBlackPrimary?: string;
  colorBlackSecondary?: string;
  colorBluePrimary?: string;
  colorBlueSecondary?: string;
}

export interface IDeviceTheme {
  MobileSmall: string;
  MobileMedium: string;
  MobileLarge: string;
  Tablet: string;
  Laptop: string;
  LaptopLarge: string;
  Desktop: string;
}

export interface ITheme {
  color: IColorTheme;
  device: IDeviceTheme;
}
