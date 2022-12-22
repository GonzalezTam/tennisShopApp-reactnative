import React from 'react';
import { Image, Text, View, Button } from 'react-native';
import { useSelector } from 'react-redux';

import COLORS from '../../constants/themes/colors';
import { styles } from './styles';

const Product = ({ navigation }) => {
  const product = useSelector((state) => state.products.selectedProduct);
  const { title, description, price } = product || {};

  return (
    <View style={styles.container}>
      <View style={styles.productCard}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://placeimg.com/580/480/any',
            }}
          />
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>Price: ${price}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <Button
        title="Add to cart"
        color={COLORS.primary}
        onPress={() => console.warn('Add to cart')}
        //onPress={() => navigation.navigate('Cart')}
      />
    </View>
  );
};

export default Product;
