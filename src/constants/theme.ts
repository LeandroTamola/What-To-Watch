import {createTheme, createBox, createText} from '@shopify/restyle';

const palette = {
  purple: '#5A31F4',
  white: '#FFF',
  black: '#111',
  darkestGray: '#333',
  darkGrey: '#7e888e',
  lightGray: '#EEE',
  lightestGray: '#dcdee0',
};

const theme = createTheme({
  colors: {
    mainBackground: palette.lightGray,
    mainForeground: palette.black,
    secondaryForeground: palette.darkGrey,

    primaryCardBackground: palette.purple,
    secondaryCardBackground: palette.white,
    primaryCardText: palette.white,
    secondaryCardText: palette.black,
    buttonPrimaryBackground: palette.purple,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  borderRadii: {
    n: 0,
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  textVariants: {
    hero: {
      fontSize: 36,
      lineHeight: 80,
      fontFamily: 'SFProDisplay-Bold',
      textAlign: 'center',
      color: 'mainForeground',
    },
    title: {
      fontSize: 28,
      fontFamily: 'SFProDisplay-Medium',
      color: 'mainForeground',
    },
    title1: {
      fontSize: 24,
      lineheight: 30,
      fontFamily: 'SFProDisplay-Medium',
      color: 'mainForeground',
    },
    title2: {
      fontSize: 24,
      lineheight: 30,
      fontFamily: 'SFProDisplay-Medium',
      color: 'mainForeground',
    },
    subTitle: {
      fontSize: 20,
      lineheight: 24,
      fontFamily: 'SFProDisplay-Regular',
      color: 'secondaryForeground',
    },
    body: {
      fontSize: 16,
      lineheight: 24,
      fontFamily: 'SFProDisplay-Regular',
      color: 'mainForeground',
    },
    button: {
      fontSize: 15,
      fontFamily: 'SFProDisplay-Regular',
      color: 'mainForeground',
    },
    header: {
      fontSize: 12,
      lineHeight: 24,
      fontFamily: 'SFProDisplay-Bold',
      color: 'mainForeground',
    },
  },
});

export type Theme = typeof theme;
export default theme;

// DarkMode Declaration
export const darkTheme: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
    mainBackground: palette.black,
    mainForeground: palette.white,
    secondaryForeground: palette.lightestGray,

    secondaryCardBackground: palette.darkestGray,
    secondaryCardText: palette.white,
  },
};

// Theme custom Components Creation
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
