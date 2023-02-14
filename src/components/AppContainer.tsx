import React from 'react';
import {StatusBar} from 'react-native';
import colors from '../config/utils/colors';
import {useNavigation} from '@react-navigation/core';
import HeaderContainer from './HeaderContainer';
import {ParentContainer} from '../config/utils/types';
import {Heading, VStack, Box, ScrollView} from 'native-base';

const AppContainer: React.FC<ParentContainer> = ({
  children,
  headerTxt,
  scrollAble,
  hasHeader = true,
  isDashboard = false,
  showNotify = true,
}) => {
  return (
    <Box flex={1} bgColor="white.100">
      {isDashboard ? null : <HeaderContainer showNotification={showNotify} />}

      <StatusBar barStyle="dark-content" backgroundColor={colors.white[100]} />
      <Box p={5} flex={1} bgColor="white.100">
        {hasHeader ? (
          <Heading
            size="lg"
            fontWeight={300}
            fontFamily="heading"
            fontStyle="normal">
            {headerTxt}
          </Heading>
        ) : null}
        {scrollAble ? (
          <ScrollView showsVerticalScrollIndicator={false}>
            <VStack space={5}>{children}</VStack>
          </ScrollView>
        ) : (
          <VStack space={5}>{children}</VStack>
        )}
      </Box>
    </Box>
  );
};
export default AppContainer;
