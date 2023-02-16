import {StyleSheet, Dimensions} from 'react-native';
import {keys} from '../../config/utils/utils';
import colors from '../../config/utils/colors';

const screenWidth = Dimensions.get('window').width;
export const keyWidth = (screenWidth - 10) / keys[0].length;
const keyHeight = keyWidth * 1.3;

export default StyleSheet.create({
  keyboard: {
    backgroundColor: colors.gray[70],
    alignSelf: 'stretch',
    marginTop: 'auto',
  },
  row: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  key: {
    width: keyWidth - 4,
    height: keyHeight - 4,
    margin: 2,
    backgroundColor: colors.gray[100],
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyText: {
    color: colors.gray[90],
    fontWeight: 'bold',
  },
});
