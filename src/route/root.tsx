import React from 'react';
import Home from '../screens/dashbaord';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ThemeProvider} from '../config/utils/context/ThemeManager';
import {AppStateProvider} from '../config/utils/context/app_state';

const RootStack = createStackNavigator();
const RootStackScreen = () => {
  return (
    <RootStack.Navigator initialRouteName="Splash">
      <RootStack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />

      {/* <RootStack.Screen
        name="AuthStack"
        component={AuthStack}
        options={{
          headerShown: false,
        }}
      /> */}
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
