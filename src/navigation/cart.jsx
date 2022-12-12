/* eslint-disable prettier/prettier */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import COLORS from '../constants/themes/colors';
import { Cart } from '../screens';

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Cart" screenOptions={{ headerStyle: { backgroundColor: COLORS.header }, headerTintColor: COLORS.white }}>
      {/*<Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }} />*/}
      <Stack.Screen name="Cart" component={Cart} options={{ headerTitleAlign: 'center' }} />
    </Stack.Navigator>
  );
};

export default CartNavigator;
