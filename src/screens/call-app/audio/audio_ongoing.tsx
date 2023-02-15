import React from 'react';
import Add from '../../../assets/call/add';
import Mute from '../../../assets/call/mute';
import Record from '../../../assets/call/record';
import Video from '../../../assets/call/video';
import Speaker from '../../../assets/call/speaker';
import Message from '../../../assets/call/message';
import EndCall from '../../../assets/call/end_call';
import SoundWave from '../../../assets/call/sound';
import {
  HStack,
  Center,
  VStack,
  Avatar,
  Text,
  FlatList,
  Pressable,
} from 'native-base';
import {ImageBackground, StyleSheet, StatusBar, View} from 'react-native';
import contactListData from '../../../config/commons/contact_list_data';
import {useNavigation} from '@react-navigation/core';

// import CallBackground from '../../assets/call/call_background';

const imagePath =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU';

const CallAndReceive = props => {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground
        source={require('../../../assets/call/call_background.png')}
        resizeMode="cover"
        style={styles.image}>
        {/* <View
          style={{
            // flexGrow: 0,
            flexShrink: 2,
            // flexBasis: 'auto',
          }}> */}
        <Center flex="1">
          <Text color="white.100" fontWeight="300" fontSize="xl" mt="2">
            William Johns
          </Text>
          <Text color="white.70" mt="2" mb="10">
            calling
          </Text>

          <FlatList
            // horizontal={true}
            numColumns={4}
            data={contactListData}
            renderItem={({item}) => (
              <Center mb="4" mr="4">
                <Text fontSize="2xs" color="white.90">
                  You
                </Text>
                <Avatar
                  size="45px"
                  borderWidth="1"
                  borderColor="white.100"
                  source={{
                    uri: item.avatarUrl,
                  }}
                />
                <SoundWave type="small" />
              </Center>
            )}
            keyExtractor={item => item.id}
          />

          <HStack space={6} mt="10">
            <VStack space={3}>
              <Center>
                <Record isActive={false} />
                <Text color="white.60" fontSize="xs">
                  Record
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
              <Center>
                <Add isActive={false} />
                <Text color="white.60" fontSize="xs">
                  Add Call
                </Text>
              </Center>
            </VStack>
          </HStack>

          <HStack space={6} mt="10">
            <VStack space={3}>
              <Center>
                <Speaker isActive={false} />
                <Text color="white.60" fontSize="xs">
                  Speaker
                </Text>
              </Center>
            </VStack>

            <VStack space={3}>
              <Center>
                <Message isActive={false} />
                <Text color="white.60" fontSize="xs">
                  Message
                </Text>
              </Center>
            </VStack>

            <VStack space={3}>
              <Center>
                <Video isActive={true} />
                <Text color="white.60" fontSize="xs">
                  Video
                </Text>
              </Center>
            </VStack>
          </HStack>

          <Center mt="8">
            <Pressable onPress={() => navigation.goBack()}>
              <EndCall isActive={true} />
              <Text color="white.60" fontSize="xs">
                End call
              </Text>
            </Pressable>
          </Center>
        </Center>
        {/* </View> */}
      </ImageBackground>
    </>
  );
};
export default CallAndReceive;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
