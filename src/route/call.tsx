import React from 'react';
import ContactList from '../screens/call-app/contact_list';
import {createStackNavigator} from '@react-navigation/stack';
import VideoCall from '../screens/call-app/video/video_ongoing';
import AudioCall from '../screens/call-app/audio/audio_ongoing';
import CallAndReceive from '../screens/call-app/audio/audio_call_receive';
import VideoCallAndReceive from '../screens/call-app/video/video_call_receive';

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
      name="VideoCallAndReceive"
      component={VideoCallAndReceive}
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
    <MoreStack.Screen
      name="VideoCall"
      component={VideoCall}
      options={{
        headerTitle: '',
        headerTransparent: true,
        // headerTintColor: colors.black,
      }}
    />
  </MoreStack.Navigator>
);
