import React from 'react';
import colors from '../config/utils/colors';
import CallAndReceive from '../screens/call-app/call_receive';
import AudioCall from '../screens/call-app/audio_call';
import ContactList from '../screens/call-app/contact_list';
import {createStackNavigator} from '@react-navigation/stack';

export type MoreStackParams = {
  ContactList: undefined;
};

const MoreStack = createStackNavigator<MoreStackParams>();
export default () => (
  <MoreStack.Navigator
    initialRouteName="AudioCall"
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
    <MoreStack.Screen
      name="CallAndReceive"
      component={CallAndReceive}
      options={{
        headerTitle: '',
        headerTransparent: true,
        // headerTintColor: colors.black,
      }}
    />

    <MoreStack.Screen
      name="AudioCall"
      component={AudioCall}
      options={{
        headerTitle: '',
        headerTransparent: true,
        // headerTintColor: colors.black,
      }}
    />
  </MoreStack.Navigator>
);
