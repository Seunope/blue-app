// 1. Import the extendTheme function
import {extendTheme, NativeBaseProvider} from 'native-base';
// 2. Extend the theme to include custom colors, fonts, etc
export default {
  white: {
    100: '#FFFFFF',
    90: '#F0FAFE',
    80: '#E5E5E5',
    70: 'rgba(255, 255, 255, 0.6)',
    60: 'rgba(255, 255, 255, 1)',
  },
  black: {
    100: '#000000',
    90: 'rgba(0, 0, 0, 0.1)',
    80: 'rgba(0, 0, 0, 0.4)',
    70: 'rgba(14, 14, 44, 0.1)',
  },

  gray: {
    100: '#B8B8B8',
    90: '#EDEDED',
    80: '#F6F6F6',
    70: '#818384',
  },

  red: '#F70032',
  blue: '#4A00FF',
  green: '#93D75C',
  purple: '#927FF2',
  orange: '#FABC2E',

  wordle: {
    black: '#121214',
    darkgrey: '#3A3A3D',
    grey: '#818384',
    lightgrey: '#D7DADC',
    primary: '#538D4E',
    secondary: '#B59F3B',
  },
};
