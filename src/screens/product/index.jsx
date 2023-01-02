import React from 'react';
import { Image, Text, View, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import COLORS from '../../constants/themes/colors';
import { addToCart } from '../../store/actions';
import { styles } from './styles';

const Product = ({ navigation }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.selectedProduct);
  const { title, description, price } = product || {};

  const onAddToCart = () => {
    dispatch(addToCart(product));
  };

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
      <Button title="Add to cart" color={COLORS.primary} onPress={onAddToCart} />
    </View>
  );
};

export default Product;
