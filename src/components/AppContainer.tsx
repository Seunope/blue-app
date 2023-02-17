import React from 'react';
import {StatusBar} from 'react-native';
import colors from '../config/utils/colors';
import {ParentContainer} from '../config/utils/types';
import {VStack, Box, ScrollView} from 'native-base';

const AppContainer: React.FC<ParentContainer> = ({children, scrollAble}) => {
  return (
    <Box
      flex={1}
      bgColor="white.100"
      // _dark={{
      //   color: 'black.100',
      // }}
    >
      <StatusBar barStyle="dark-content" backgroundColor={colors.white[100]} />
      <Box
        p={5}
        flex={1}
        bgColor="white.100"
        _dark={{
          color: 'black.100',
        }}>
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
