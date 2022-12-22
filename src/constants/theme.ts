export const COLORS = {
  black: '#000000',
  white: '#FFFFFF',
  lightGray: '#F2F2F2',
  gray: '#9F9F9F',
  lightPink: '#FF4B3A',
  orange: '#FA4A0C',
};

export const FONTS = {
  black: 'RobotoBlack',
  bold: 'RobotoBold',
  medium: 'RobotoMedium',
  regular: 'RobotoRegular',
};

export const SIZES = {
  base: 8,
  small: 12,
  font: 14,
  medium: 16,
  large: 18,
  extraLarge: 24,
};

export const SHADOWS = {
  light: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  medium: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  dark: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 10,
  },
};
