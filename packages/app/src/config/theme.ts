import { DefaultTheme } from 'styled-components';

const namedColors = {
  transparent: 'transparent',

  black: '#2c313b',
  greyDarkest: '#3d4852',
  greyDarker: '#606f7b',
  greyDark: '#8795a1',
  grey: '#b8c2cc',
  greyLight: '#dae1e7',
  greyLighter: '#f1f5f8',
  greyLightest: '#f8fafc',
  white: '#ffffff',

  redDarkest: '#3b0d0c',
  redDarker: '#621b18',
  redDark: '#cc1f1a',
  red: '#e3342f',
  redLight: '#ef5753',
  redLighter: '#f9acaa',
  redLightest: '#fcebea',

  orangeDarkest: '#462a16',
  orangeDarker: '#613b1f',
  orangeDark: '#de751f',
  orange: '#f6993f',
  orangeLight: '#faad63',
  orangeLighter: '#fcd9b6',
  orangeLightest: '#fff5eb',

  yellowDarkest: '#453411',
  yellowDarker: '#684f1d',
  yellowDark: '#f2d024',
  yellow: '#ffed4a',
  yellowLight: '#fff382',
  yellowLighter: '#fff9c2',
  yellowLightest: '#fcfbeb',

  greenDarkest: '#0f2f21',
  greenDarker: '#1a4731',
  greenDark: '#1f9d55',
  green: '#38c172',
  greenLight: '#51d88a',
  greenLighter: '#a2f5bf',
  greenLightest: '#e3fcec',

  tealDarkest: '#0d3331',
  tealDarker: '#20504f',
  tealDark: '#38a89d',
  teal: '#4dc0b5',
  tealLight: '#64d5ca',
  tealLighter: '#a0f0ed',
  tealLightest: '#e8fffe',

  blueDarkest: '#12283a',
  blueDarker: '#1c3d5a',
  blueDark: '#2779bd',
  blue: '#3490dc',
  blueLight: '#6cb2eb',
  blueLighter: '#bcdefa',
  blueLightest: '#eff8ff',

  indigoDarkest: '#191e38',
  indigoDarker: '#2f365f',
  indigoDark: '#5661b3',
  indigo: '#6574cd',
  indigoLight: '#7886d7',
  indigoLighter: '#b2b7ff',
  indigoLightest: '#e6e8ff',

  purpleDarkest: '#21183c',
  purpleDarker: '#382b5f',
  purpleDark: '#794acf',
  purple: '#9561e2',
  purpleLight: '#a779e9',
  purpleLighter: '#d6bbfc',
  purpleLightest: '#f3ebff',

  pinkDarkest: '#451225',
  pinkDarker: '#6f213f',
  pinkDark: '#eb5286',
  pink: '#f66d9b',
  pinkLight: '#fa7ea8',
  pinkLighter: '#ffbbca',
  pinkLightest: '#ffebef',
};

const colors = {
  ...namedColors,
  primary: namedColors.blue,
  text: {
    primary: namedColors.black,
    secondary: namedColors.greyDarker,
    tertiary: namedColors.greyDark,
  },
  editor: {
    text: '#424242',
  },
};

export type ThemeColor = keyof typeof colors;

export const theme = {
  colors,
  fonts: {
    sansSerif: 'Roboto, sans-serif',
  },
  fontSizes: {
    xxs: '.625rem', // 10px
    xs: '.75rem', // 12px
    sm: '.875rem', // 14px
    base: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    '2xl': '1.5rem', // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem', // 48px
  },
  space: {
    auto: 'auto',
    px: '1px',
    '0': '0',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '20': '5rem',
    '24': '6rem',
    '32': '8rem',
  },
  shadows: {
    default: '0 2px 4px 0 rgba(0,0,0,0.10)',
    sm: '0px 1px 2px 0px rgba(60, 64, 67, 0.3)',
    md: '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
    lg: '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
    inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
    outline: '0 0 0 3px rgba(52,144,220,0.5)',
    none: 'none',
  },
  zIndices: {},
};
export type Theme = typeof theme;
