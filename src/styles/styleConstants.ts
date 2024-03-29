export enum FontSize {
  XS = 'xs',
  SM = 'sm',
  BASE = 'base',
  LG = 'lg',
  XL = 'xl',
  '2XL' = '2xl',
}

export const FONT_SIZE_MAPS = {
  [FontSize.XS]: 'text-xs',
  [FontSize.SM]: 'text-sm',
  [FontSize.BASE]: 'text-base',
  [FontSize.LG]: 'text-lg',
  [FontSize.XL]: 'text-xl',
  [FontSize['2XL']]: 'text-2xl',
};

export enum FontWeight {
  LIGHT = 'font-light',
  NORMAL = 'font-medium',
  BOLD = 'font-bold',
}

export const FONT_WEIGHT_MAPS = {
  [FontWeight.LIGHT]: 'font-light',
  [FontWeight.NORMAL]: 'font-medium',
  [FontWeight.BOLD]: 'font-bold',
};

export enum TextColor {
  BLACK = 'black',
  WHITE = 'white',
  RED = 'red',
  LIGHTGRAY = 'lightgray',
  DARKGRAY = 'darkgray',
  PRIMARY = 'primary',
}

export const TEXT_COLOR_MAPS = {
  [TextColor.BLACK]: 'text-black',
  [TextColor.WHITE]: 'text-white',
  [TextColor.RED]: 'text-error',
  [TextColor.LIGHTGRAY]: 'text-gray-light',
  [TextColor.DARKGRAY]: 'text-gray-dark',
  [TextColor.PRIMARY]: 'text-primary',
};

export const CALENDAR_ICON_SIZE = {
  sm: 18,
  md: 30,
  lg: 36,
};

export const CALENDAR_DAY_MIN_SIZE = {
  monthly: 100,
  // TODO: weekly 사이즈 지정
  weekly: 100,
};
