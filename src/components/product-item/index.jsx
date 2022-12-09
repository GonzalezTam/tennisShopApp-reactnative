import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

const ProductItem = ({ item, onSelected }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.itemContainer} onPress={() => onSelected(item)}>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>Price: ${item.price}</Text>
          <Text style={styles.brand}>Brand: {item.brand}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductItem;
