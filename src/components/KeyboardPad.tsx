import colors from '../config/utils/colors';
import {KeyboardScreen} from '../config/utils/types';
import {keys, ENTER, DELETE} from '../config/utils/utils';
import {View, Text, Pressable, StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const keyWidth = (screenWidth - 10) / keys[0].length;
const keyHeight = keyWidth * 1.3;

const KeyboardPad = (props: KeyboardScreen) => {
  const isLongButton = (key: string) => {
    return key === ENTER || key === DELETE;
  };

  const getKeyBGColor = (key: string) => {
    if (props.greenCaps.includes(key)) {
      return colors.green;
    }
    if (props.yellowCaps.includes(key)) {
      return colors.orange;
    }
    if (props.greyCaps.includes(key)) {
      return colors.gray[100];
    }
    return colors.white[90];
  };

  return (
    <View style={styles.keyboard}>
      {keys.map((keyRow, i) => (
        <View style={styles.row} key={`row-${i}`}>
          {keyRow.map(key => (
            <Pressable
              onPress={() => props.onKeyPressed(key)}
              disabled={props.greyCaps.includes(key)}
              key={key}
              style={[
                styles.key,
                isLongButton(key) ? {width: keyWidth * 1.4} : {},
              ]}>
              <Text style={[styles.keyText, {color: getKeyBGColor(key)}]}>
                {key.toUpperCase()}
              </Text>
            </Pressable>
          ))}
        </View>
      ))}
    </View>
  );
};

export default KeyboardPad;

const styles = StyleSheet.create({
  keyboard: {
    backgroundColor: colors.gray[60],
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
    // backgroundColor: colors.gray[100],
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyText: {
    color: colors.gray[60],
    fontWeight: 'bold',
  },
});
