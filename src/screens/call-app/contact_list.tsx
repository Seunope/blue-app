import {
  Box,
  Text,
  Icon,
  Input,
  HStack,
  Spacer,
  VStack,
  Avatar,
  FlatList,
} from 'native-base';
import {Pressable} from 'react-native';
import SearchIc from '../../assets/call/search';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/core';
import contactListData from '../../config/data/contact_list_data';
import HeaderContainerr from '../../components/HeaderContainer';

const ContactList = () => {
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
        <HeaderContainerr
          dark={false}
          hasHeader={true}
          headerTxt="My contacts"
        />

        <Input
          value={searchEntry}
          mt="2"
          borderRadius="10"
          bgColor="white.100"
          placeholder="Search contacts"
          onChangeText={itemValue => setSearchEntry(itemValue)}
          InputRightElement={
            <Pressable onPress={() => filterContacts()}>
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
