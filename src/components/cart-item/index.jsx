import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import COLORS from '../../constants/themes/colors';
import { styles } from './styles';

const CartItem = ({ item, onDelete }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{item.title}</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.content}>
          <Text style={styles.price}>${item.price}</Text>
          <Text style={styles.quantity}>x {item.quantity}</Text>
        </View>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <FontAwesome name="trash-o" size={22} color={COLORS.black} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;
