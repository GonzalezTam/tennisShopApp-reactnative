/* eslint-disable prettier/prettier */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import COLORS from '../constants/themes/colors';
import { Categories, Products, Product } from '../screens';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Categories" screenOptions={{ headerStyle: { backgroundColor: COLORS.header }, headerTintColor: COLORS.white }}>
      <Stack.Screen name="Categories" component={Categories} options={{ headerShown: false }} />
      <Stack.Screen name="Products" component={Products} options={({ route }) => ({ title: route.params.title, headerTitleAlign: 'center' })} />
      <Stack.Screen name="Product" component={Product} options={{ headerTitleAlign: 'center', title: '' }} />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
