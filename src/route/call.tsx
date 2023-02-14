import React from 'react';
import colors from '../config/utils/colors';
import ContactList from '../screens/call-app/contact_list';
import {createStackNavigator} from '@react-navigation/stack';

export type MoreStackParams = {
  ContactList: undefined;
};

const MoreStack = createStackNavigator<MoreStackParams>();
export default () => (
  <MoreStack.Navigator
    initialRouteName="ContactList"
    screenOptions={{
      headerShown: false,
      gestureEnabled: false,
      cardOverlayEnabled: true,
      cardStyle: {backgroundColor: 'transparent'},
    }}>
    <MoreStack.Screen
      name="ContactList"
      component={ContactList}
      options={{
        headerTitle: '',
        headerTransparent: true,
        // headerTintColor: colors.black,
      }}
    />
  </MoreStack.Navigator>
);
