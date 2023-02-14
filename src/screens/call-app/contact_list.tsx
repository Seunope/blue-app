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
} from 'native-base';
import {StyleSheet} from 'react-native';
import AppContainer from '../../components/AppContainer';
import contactListData from '../../config/commons/contact_list_data';

const ContactList = props => {
  const [searchEntry, setSearchEntry] = useState('');
  const [searchedContacts, setSearchedContacts] = useState(contactListData);

  useEffect(() => {
    filterContacts();
  }, [searchEntry]);

  const filterContacts = () => {
    const newContacts = contactListData.filter(contact =>
      contact.fullName.toLowerCase().includes(searchEntry.toLowerCase()),
    );
    setSearchedContacts(newContacts);
  };

  return (
    <AppContainer hasHeader={true} headerTxt="My contacts">
      {/* <Heading fontSize="xl" p="4" pb="3" bgColor="purple">
        Inbox
      </Heading> */}
      <Input
        value={searchEntry}
        placeholderTextColor="purple"
        placeholder="search contacts"
        onChangeText={setSearchEntry}
        style={styles.searchInput}
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
              <VStack borderColor="black.70" borderBottomWidth="1" width="1005">
                <Text
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
      />
    </AppContainer>
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
    padding: 10,
    borderRadius: 10,
  },
});
