import React from 'react';
import {View} from 'react-native';
import MoonIcon from '../assets/moon';
import {Text, Center, useColorMode, Pressable} from 'native-base';
import {StyleSheet} from 'react-native';
import AppContainer from '../components/AppContainer';
import {StackScreenProps} from '@react-navigation/stack';
import colors from '../config/utils/colors';
import {useNavigation} from '@react-navigation/core';
// type Props = StackScreenProps<AuthStackParams, 'SignUp'>;

const Dashboard: React.FC<Props> = props => {
  const navigation = useNavigation();
  const {toggleColorMode, colorMode} = useColorMode();

  return (
    <AppContainer hasHeader={false} isDashboard={true}>
      <Pressable style={styles.containerRight} onPress={toggleColorMode}>
        <MoonIcon />
      </Pressable>

      <Text
        fontSize="3xl"
        fontWeight={400}
        textAlign="center"
        color="purple"
        mt="8"
        mb="20">
        Blue<Text color="black.100">Apps</Text>
      </Text>
      {/* <Text>{colorMode}</Text> */}
      <Pressable
        style={styles.containerMain}
        onPress={() => navigation.navigate('Wordle')}>
        <View style={styles.containerSub}>
          <View style={styles.containerRight}>
            <View style={styles.boxRight} />
          </View>
          <Center bg="gray.80">
            <Text fontWeight="300" color="black.90" fontSize="3xl" p="4">
              WO
            </Text>
            <Text fontWeight="100" color="black.80" fontSize="xs" pb="2">
              Wordle
            </Text>
          </Center>
        </View>

        <Pressable
          style={styles.containerSub}
          onPress={() => navigation.navigate('CallStack')}>
          <View style={styles.containerRight}>
            <View style={[styles.boxRight, {backgroundColor: colors.orange}]} />
          </View>
          <Center bg="gray.80">
            <Text fontWeight="300" color="black.90" fontSize="3xl" p="4">
              VC
            </Text>
            <Text fontWeight="100" color="black.80" fontSize="xs" pb="2">
              Video Call
            </Text>
          </Center>
        </Pressable>
      </Pressable>

      <View style={styles.containerMain}>
        <View style={[styles.containerSub, {marginTop: 0}]}>
          <View style={styles.containerRight}>
            <View
              style={[styles.boxRight, {backgroundColor: colors.gray[80]}]}
            />
          </View>
          <Center bg="gray.80">
            <Text fontWeight="300" color="black.90" fontSize="3xl" p="4" />
            <Text fontWeight="100" color="black.80" fontSize="xs" pb="2" />
          </Center>
        </View>

        <View style={[styles.containerSub, {marginTop: 0}]}>
          <View style={styles.containerRight}>
            <View
              style={[styles.boxRight, {backgroundColor: colors.gray[80]}]}
            />
          </View>
          <Center bg="gray.80">
            <Text fontWeight="300" color="black.90" fontSize="3xl" p="4" />
            <Text fontWeight="100" color="black.80" fontSize="xs" pb="2" />
          </Center>
        </View>
      </View>
    </AppContainer>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  containerMain: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  containerSub: {
    flex: 1,
    margin: 10,
    padding: 5,
    borderRadius: 10,
    marginBottom: 0,
    backgroundColor: colors.gray[80],
  },
  containerRight: {
    alignItems: 'flex-end',
  },
  boxRight: {
    flex: 1,
    backgroundColor: colors.green,
    padding: 6,
  },
});
