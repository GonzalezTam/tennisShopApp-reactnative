import React from 'react';
import { Text, View, Button } from 'react-native';

import colors from '../../constants/colors';
import { styles } from './styles';

const Products = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Products</Text>
      <View style={styles.buttonContainer}>
        <Button
          color={colors.primary}
          title="Go to Product"
          onPress={() => navigation.navigate('Product')}
        />
      </View>
    </View>
  );
};

export default Products;
