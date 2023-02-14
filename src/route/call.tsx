import React from 'react';
import Faq from '../screens/more/faqs';
import colors from '../config/utils/colors';
import Profile from '../screens/more/profile';
import TermOfUse from '../screens/more/term_of_use';
import DebitCards from '../screens/more/debit_cards';
import Notification from '../screens/more/notification';
import {createStackNavigator} from '@react-navigation/stack';
import ChangePassword from '../screens/more/change_password';
import Beneficiary from '../screens/more/beneficiary/beneficiary';
import AddBeneficiary from '../screens/more/beneficiary/add_beneficiary';
import TransactionDetails from '../screens/dashboard/transactions/transaction_details';

export type MoreStackParams = {
  Faq: undefined;
  Profile: undefined;
  TermOfUse: undefined;
  DebitCards: undefined;
  Beneficiary: undefined;
  AddBeneficiary: undefined;
  ChangePassword: undefined;
  Notification: undefined;
};

const MoreStack = createStackNavigator<MoreStackParams>();
export default () => (
  <MoreStack.Navigator
    initialRouteName="DebitCards"
    screenOptions={{
      headerShown: false,
      gestureEnabled: false,
      cardOverlayEnabled: true,
      cardStyle: {backgroundColor: 'transparent'},
    }}>
    <MoreStack.Screen
      name="Profile"
      component={Profile}
      options={{
        headerTitle: '',
        headerTransparent: true,
        headerTintColor: colors.black,
      }}
    />

    <MoreStack.Screen
      name="ChangePassword"
      component={ChangePassword}
      options={{
        headerTitle: '',
        headerTransparent: true,
        headerTintColor: colors.white,
      }}
    />
    <MoreStack.Screen
      name="Faq"
      component={Faq}
      options={{
        headerTitle: '',
        headerTransparent: true,
        headerTintColor: colors.black,
      }}
    />

    <MoreStack.Screen
      name="DebitCards"
      component={DebitCards}
      options={{
        headerTitle: '',
        headerTransparent: true,
        headerTintColor: colors.black,
      }}
    />
    <MoreStack.Screen
      name="TermOfUse"
      component={TermOfUse}
      options={{
        headerTitle: '',
        headerTransparent: true,
        headerTintColor: colors.black,
      }}
    />

    <MoreStack.Screen
      name="Beneficiary"
      component={Beneficiary}
      options={{
        headerTitle: '',
        headerTransparent: true,
        headerTintColor: colors.black,
      }}
    />

    <MoreStack.Screen
      name="AddBeneficiary"
      component={AddBeneficiary}
      options={{
        headerTitle: '',
        headerTransparent: true,
        headerTintColor: colors.black,
      }}
    />
    <MoreStack.Screen
      name="Notification"
      component={Notification}
      options={{
        headerTitle: '',
        headerTransparent: true,
        headerTintColor: colors.black,
      }}
    />
    <MoreStack.Screen
      name="TransactionDetails"
      component={TransactionDetails}
      options={{
        headerTitle: '',
        headerTransparent: true,
        headerTintColor: colors.black,
      }}
    />
  </MoreStack.Navigator>
);
