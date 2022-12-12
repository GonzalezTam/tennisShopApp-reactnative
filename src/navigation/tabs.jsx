import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import COLORS from '../constants/themes/colors';
import CartNavigator from './cart';
import OrdersNavigator from './orders';
import ShopNavigator from './shop';

const BottomTab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="ShopTab"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.black,
        tabBarInactiveTintColor: COLORS.darkGray,
        tabBarStyle: { backgroundColor: COLORS.white },
        tabBarLabelStyle: { fontSize: 12, fontFamily: 'Lato-Regular', marginBottom: 5 },
      }}>
      <BottomTab.Screen
        name="Shop"
        component={ShopNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="home"
              size={24}
              color={focused ? COLORS.darkGray : COLORS.lightGray}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Orders"
        component={OrdersNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="list"
              size={20}
              color={focused ? COLORS.darkGray : COLORS.lightGray}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Cart"
        component={CartNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="shopping-cart"
              size={24}
              color={focused ? COLORS.darkGray : COLORS.lightGray}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default Tabs;
