import React from 'react';
import CallStack from './call';
import Wordle from '../screens/wordle/wordle';
import Dashboard from '../screens/dashboard';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ThemeProvider} from '../config/utils/context/ThemeManager';
import {AppStateProvider} from '../config/utils/context/app_state';

const RootStack = createStackNavigator();
const RootStackScreen = () => {
  return (
    <RootStack.Navigator initialRouteName="Dashboard">
      <RootStack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
        }}
      />

      <RootStack.Screen
        name="Wordle"
        component={Wordle}
        options={{
          headerShown: false,
        }}
      />

      <RootStack.Screen
        name="CallStack"
        component={CallStack}
        options={{
          headerShown: false,
        }}
      />
    </RootStack.Navigator>
  );
};

export default () => {
  return (
    <AppStateProvider>
      <ThemeProvider>
        <NavigationContainer>
          <RootStackScreen />
        </NavigationContainer>
      </ThemeProvider>
    </AppStateProvider>
  );
};
