import {
  Box,
  Text,
  HStack,
  Center,
  VStack,
  Avatar,
  Pressable,
} from 'native-base';
import React from 'react';
import Add from '../../../assets/call/add';
import Mute from '../../../assets/call/mute';
import EndCall from '../../../assets/call/end_call';
import {useNavigation} from '@react-navigation/core';
import MuteVideo from '../../../assets/call/mute_video';
import {ImageBackground, StyleSheet, StatusBar} from 'react-native';
import VideoHeaderContainer from '../../../components/VideoContainer';

const image = {
  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
};

const CallAndReceive = () => {
  const navigation = useNavigation();

  return (
    // <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <ImageBackground
      source={require('../../../assets/call/dd.jpg')}
      resizeMode="cover"
      style={styles.image}>
      <Box flex="1" mt="4">
        <VideoHeaderContainer />

        <Center
          mb="10"
          p="3"
          bg={{
            linearGradient: {
              colors: ['rgba(255,255,255,0)', 'rgba(255,255,255,0.1)'],
              // start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }
              // start: [0, 0],
              // end: [1, 0],
            },
          }}>
          <VStack height="100%">
            <Box height="75%">
              <Text color="white.100" fontWeight="300" fontSize="xl" mt="2">
                William John
              </Text>
              <Text color="white.70" mt="2" mb="10">
                calling
              </Text>
            </Box>

            <HStack space={6} mt="10" height="20%">
              <VStack space={3}>
                <Center>
                  <MuteVideo isActive={false} />
                  <Text color="white.60" fontSize="xs">
                    Mute Video
                  </Text>
                </Center>
              </VStack>

              <VStack space={3}>
                <Center>
                  <Mute isActive={false} />
                  <Text color="white.60" fontSize="xs">
                    Mute
                  </Text>
                </Center>
              </VStack>

              <VStack space={3}>
                <Pressable
                  onPress={() =>
                    navigation.navigate('CallStack', {
                      screen: 'VideoCall',
                    })
                  }>
                  <Center>
                    <Add isActive={false} />
                    <Text color="white.60" fontSize="xs">
                      Add Call
                    </Text>
                  </Center>
                </Pressable>
              </VStack>

              <VStack space={3}>
                <Pressable onPress={() => navigation.goBack()}>
                  <Center>
                    <EndCall isActive={true} />
                    <Text color="white.60" fontSize="xs">
                      End call
                    </Text>
                  </Center>
                </Pressable>
              </VStack>
            </HStack>
          </VStack>
        </Center>
      </Box>
    </ImageBackground>
  );
};
export default CallAndReceive;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
