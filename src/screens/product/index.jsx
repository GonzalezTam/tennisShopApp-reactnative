import React from 'react';
import { Text, View, Button } from 'react-native';

import colors from '../../constants/colors';
import { styles } from './styles';

const Product = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Product</Text>
      <View style={styles.buttonContainer}>
        <Button
          color={colors.primary}
          title="Go Back"
          onPress={() => navigation.navigate('Products')}
        />
      </View>
    </View>
  );
};

export default Product;
