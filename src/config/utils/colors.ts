// 1. Import the extendTheme function
import {extendTheme, NativeBaseProvider} from 'native-base';
// 2. Extend the theme to include custom colors, fonts, etc
export default {
  white: {
    100: '#FFFFFF',
    90: '#F0FAFE',
    80: '#E5E5E5',
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
  },

  red: '#F70032',
  blue: '#4A00FF',
  green: '#93D75C',
  purple: '#927FF2',
  orange: '#FABC2E',
};
