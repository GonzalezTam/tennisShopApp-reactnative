import React from 'react';
import { Text, TouchableOpacity, SafeAreaView } from 'react-native';

import { styles } from './styles';

const CategoryItem = ({ item, onSelected }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.categoryContainer} onPress={() => onSelected(item)}>
        <Text style={styles.categoryItemText}>{item.name}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CategoryItem;
