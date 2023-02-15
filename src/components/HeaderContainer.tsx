import React from 'react';
import {Box, VStack, Heading} from 'native-base';
import BackIcon from '../assets/back';
import BellIcon from '../assets/bell';
import RoundIconButton from './RoundIconButton';
import {useNavigation} from '@react-navigation/core';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface HeaderProps {
  title?: string;
  dark?: boolean;
  hasHeader?: boolean;
  headerTxt?: string;
  showBackIcon?: boolean;
  showNotification?: boolean;
}

const HeaderTitleContainer = ({
  dark,
  headerTxt,
  hasHeader,
  showBackIcon = true,
  showNotification = true,
}: HeaderProps) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const color = dark ? 'white' : 'white';

  return (
    <Box
      mx="1"
      //mt="6"
      flexDirection="row"
      alignItems="center"
      backgroundColor="white"
      justifyContent="space-between"
      style={{marginTop: insets.top}}>
      {showBackIcon ? (
        <RoundIconButton
          size={44}
          {...{color}}
          align="center"
          iconRatio={0.5}
          name={<BackIcon color={color} />}
          children={<BackIcon color={color} />}
          onPress={() => navigation.goBack()}
        />
      ) : null}

      {hasHeader ? (
        <VStack alignItems="center">
          <Heading
            size="lg"
            fontWeight={200}
            fontFamily="heading"
            fontStyle="normal">
            {headerTxt}
          </Heading>
        </VStack>
      ) : null}

      {showNotification ? (
        <RoundIconButton
          size={44}
          {...{color}}
          align="center"
          iconRatio={0.5}
          name={<BellIcon />}
          children={<BellIcon />}
          onPress={() =>
            navigation.navigate('MoreStack', {
              screen: 'Notification',
            })
          }
        />
      ) : null}
    </Box>
  );
};

HeaderTitleContainer.defaultProps = {dark: false};

export default HeaderTitleContainer;
