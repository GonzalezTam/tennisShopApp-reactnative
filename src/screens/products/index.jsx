import React from 'react';
import { FlatList } from 'react-native';

import { ProductItem } from '../../components';
import { PRODUCTS } from '../../constants/data/products';
import { styles } from './styles';

const Products = ({ navigation, route }) => {
  const { categoryId } = route.params;

  const onSelected = (item) =>
    navigation.navigate('Product', { title: item.title, productId: item.id });
  const renderProduct = ({ item }) => <ProductItem item={item} onSelected={onSelected} />;
  const productsByCategory = PRODUCTS.filter((product) => product.categoryId === categoryId);

  return (
    <FlatList
      data={productsByCategory}
      renderItem={renderProduct}
      keyExtractor={(item) => item.id.toString()}
      style={styles.containerList}
    />
  );
};

export default Products;
