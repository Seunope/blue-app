import React from 'react';
import {Box, VStack, Text, Heading, Center} from 'native-base';
import BackIcon from '../assets/back';
import {StatusBar} from 'react-native';
import Camera from '../assets/call/camera';
import RoundIconButton from './RoundIconButton';
import {useNavigation} from '@react-navigation/core';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface HeaderProps {
  dark?: boolean;
  headerTxt?: string;
  hasHeader?: boolean;
}

const HeaderContainer = ({dark, hasHeader, headerTxt}: HeaderProps) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const color = dark ? 'black' : 'white';
  const barStyle = dark ? 'dark-content' : 'light-content';

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        hidden={false}
        barStyle={barStyle}
      />
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        style={{marginTop: insets.top}}>
        <RoundIconButton
          size={44}
          align="center"
          iconRatio={0.5}
          name={<BackIcon color={color} />}
          children={<BackIcon color={color} />}
          onPress={() => navigation.goBack()}
        />

        {hasHeader ? (
          <Center alignItems="center">
            <Heading
              size="lg"
              color="white.100"
              fontWeight={200}
              fontFamily="heading"
              fontStyle="normal">
              {headerTxt}
            </Heading>
          </Center>
        ) : null}

        <Text />
      </Box>
    </>
  );
};

HeaderContainer.defaultProps = {dark: true};

export default HeaderContainer;
