/* eslint-disable prettier/prettier */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import colors from '../constants/colors';
import { Categories, Products, Product } from '../screens';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Categories" screenOptions={{ headerStyle: { backgroundColor: colors.header }, headerTintColor: colors.black }}>
      <Stack.Screen name="Categories" component={Categories} options={{ headerTitleAlign: 'center' }} />
      <Stack.Screen name="Products" component={Products} options={{ headerTitleAlign: 'center' }} />
      <Stack.Screen name="Product" component={Product} options={{ headerTitleAlign: 'center' }} />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
