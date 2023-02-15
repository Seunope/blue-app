import React from 'react';
import {Box} from 'native-base';
import BackIcon from '../assets/back';
import {StatusBar} from 'react-native';
import Camera from '../assets/call/camera';
import RoundIconButton from './RoundIconButton';
import {useNavigation} from '@react-navigation/core';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface HeaderProps {
  dark?: boolean;
}

const HeaderContainerr = ({dark}: HeaderProps) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const color = dark ? 'white' : 'white';

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        hidden={false}
        barStyle="light-content"
      />
      <Box
        flexDirection="row"
        alignItems="center"
        // justifyContent="flex-start"
        style={{marginTop: insets.top}}>
        <RoundIconButton
          size={44}
          align="center"
          iconRatio={0.5}
          name={<BackIcon color={color} />}
          children={<BackIcon color={color} />}
          onPress={() => navigation.goBack()}
        />
      </Box>
    </>
  );
};

HeaderContainerr.defaultProps = {dark: false};

export default HeaderContainerr;
