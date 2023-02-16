import {View, Text, Pressable} from 'react-native';
import {keys, ENTER, DELETE} from '../../config/utils/utils';
import styles, {keyWidth} from './Keyboard.styles';
import colors from '../../config/utils/colors';

const Keyboard = ({
  onKeyPressed = () => {},
  greenCaps = [],
  yellowCaps = [],
  greyCaps = [],
}) => {
  const isLongButton = key => {
    return key === ENTER || key === DELETE;
  };

  const getKeyBGColor = key => {
    if (greenCaps.includes(key)) {
      return colors.green;
    }
    if (yellowCaps.includes(key)) {
      return colors.orange;
    }
    if (greyCaps.includes(key)) {
      return colors.gray[100];
    }
    return colors.gray[70];
  };

  return (
    <View style={styles.keyboard}>
      {keys.map((keyRow, i) => (
        <View style={styles.row} key={`row-${i}`}>
          {keyRow.map(key => (
            <Pressable
              onPress={() => onKeyPressed(key)}
              disabled={greyCaps.includes(key)}
              key={key}
              style={[
                styles.key,
                isLongButton(key) ? {width: keyWidth * 1.4} : {},
                {backgroundColor: getKeyBGColor(key)},
              ]}>
              <Text style={styles.keyText}>{key.toUpperCase()}</Text>
            </Pressable>
          ))}
        </View>
      ))}
    </View>
  );
};

export default Keyboard;
