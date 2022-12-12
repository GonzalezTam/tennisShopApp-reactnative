/* eslint-disable prettier/prettier */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import COLORS from '../constants/themes/colors';
import { Orders } from '../screens';

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Orders" screenOptions={{ headerStyle: { backgroundColor: COLORS.header }, headerTintColor: COLORS.white }}>
      {/*<Stack.Screen name="Orders" component={Orders} options={{ headerShown: false }} />*/}
      <Stack.Screen name="Orders" component={Orders} options={{ headerTitleAlign: 'center' }} />
    </Stack.Navigator>
  );
};

export default OrdersNavigator;
