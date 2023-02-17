import React from 'react';
import {RectButton} from 'react-native-gesture-handler';
import RoundedIcon, {RoundedIconProps} from './RoundedIcon';

interface RoundIconButtonProps extends RoundedIconProps {
  onPress: () => void;
}

const RoundIconButton = ({onPress, ...props}: RoundIconButtonProps) => {
  return (
    <RectButton {...{onPress}}>
      <RoundedIcon {...props} />
    </RectButton>
  );
};

RoundIconButton.defaultProps = {
  ...RoundedIcon.defaultProps,
};

export default RoundIconButton;
