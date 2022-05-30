import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  primary: '#194868',
  secondary: '#FF615F',

  black: '#1E1F20',
  white: '#FFFFFF',
  lightGray: '#F5F7F9',
  lightGray2: '#FAFBFD',
  gray: '#BEC1D2',
  blue: '#42B0FF',
  darkGray: '#898C95',
  yellow: '#FFD573',
  lightBlue: '#95A9B8',
  darkGreen: '#008159',
  peach: '#FF614F',
  purple: '#8e44ad',
  red: '#FF0000',
};

export const SIZES = {
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,
  padding2: 36,

  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,

  width,
  height,
};

const appTheme = {COLORS, SIZES};
export default appTheme;
