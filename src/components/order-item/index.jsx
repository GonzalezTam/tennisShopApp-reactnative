import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import COLORS from '../../constants/themes/colors';
import { styles } from './styles';

const formatDateTime = (date) => {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString();
};

const OrderItem = ({ item, onDelete }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.date}>{formatDateTime(item.date)}</Text>
      </View>
      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.total}>Total: ${item.total}</Text>
        </View>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <FontAwesome name="trash-o" size={22} color={COLORS.black} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderItem;
