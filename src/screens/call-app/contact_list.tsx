import React, {useState, useEffect} from 'react';
import {
  Box,
  Text,
  Heading,
  HStack,
  Input,
  FlatList,
  VStack,
  Avatar,
  Spacer,
  Icon,
  SearchIcon,
} from 'native-base';
import {Pressable, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import AppContainer from '../../components/AppContainer';
import contactListData from '../../config/commons/contact_list_data';
import HeaderContainerr from '../../components/HeaderContainerr';
import SearchIc from '../../assets/call/search';

const ContactList = props => {
  const navigation = useNavigation();
  const [searchEntry, setSearchEntry] = useState('');
  const [searchedContacts, setSearchedContacts] = useState(contactListData);

  useEffect(() => {
    filterContacts();
  }, []);

  const filterContacts = () => {
    const newContacts = contactListData.filter(contact =>
      contact.fullName.toLowerCase().includes(searchEntry.toLowerCase()),
    );
    setSearchedContacts(newContacts);
  };

  const renderFooter = () => {
    return <Box mt="20" />;
  };

  return (
    <>
      <Box bgColor="purple" p="7" pl="2">
        <HeaderContainerr />
        <Input
          value={searchEntry}
          // placeholderTextColor="purple"
          placeholder="search contacts"
          onChangeText={setSearchEntry}
          style={styles.searchInput}
        />

        <Input
          value={searchEntry}
          // label="Phone Number"
          // borderRadius="8"
          placeholder="Mobile number"
          onChangeText={itemValue => setSearchEntry(itemValue)}
          InputRightElement={
            <Pressable>
              <Icon as={<SearchIc />} size={5} mr="2" color="muted.400" />
            </Pressable>
          }
        />
      </Box>
      <Box
        p={5}
        flex={1}
        bgColor="white.100"
        // _dark={{
        //   color: 'black.100',
        // }}
      >
        <Input
          value={searchEntry}
          // label="Phone Number"
          // borderRadius="8"
          placeholder="Mobile number"
          onChangeText={itemValue => setSearchEntry(itemValue)}
          InputRightElement={
            <Pressable>
              <Icon as={<SearchIcon />} size={5} mr="2" color="muted.400" />
            </Pressable>
          }
        />
        <FlatList
          data={searchedContacts}
          renderItem={({item}) => (
            <Box pl={['0', '4']} pr={['0', '5']} py="2" mb="2">
              <HStack space={[2, 3]} justifyContent="space-between">
                <Avatar
                  size="54px"
                  source={{
                    uri: item.avatarUrl,
                  }}
                />

                <VStack
                  borderColor="black.70"
                  borderBottomWidth="1"
                  width="1005">
                  <Text
                    onPress={() =>
                      navigation.navigate('CallStack', {
                        screen: 'CallAndReceive',
                      })
                    }
                    _dark={{
                      color: 'white.90',
                    }}
                    color="black.100"
                    fontWeight="300">
                    {item.fullName}
                  </Text>
                  <Text
                    fontSize="xs"
                    color="coolGray.600"
                    _dark={{
                      fontSize: 'xs',
                      color: 'warmGray.200',
                    }}>
                    {item.recentText}
                  </Text>
                </VStack>
                <Spacer />
              </HStack>
            </Box>
          )}
          keyExtractor={item => item.id}
          ListFooterComponent={renderFooter}
        />
      </Box>
    </>
  );
};
export default ContactList;
const styles = StyleSheet.create({
  page: {
    padding: 15,
    backgroundColor: 'white',
    flex: 1,
  },
  contactName: {
    fontSize: 16,
    marginVertical: 10,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#f0f0f0',
  },
  searchInput: {
    backgroundColor: '#f0f0f0',
    // padding: 10,
    borderRadius: 10,
  },
});
