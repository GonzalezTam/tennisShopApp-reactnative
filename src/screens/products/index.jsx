import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { ProductItem } from '../../components';
import { filterProducts, selectProduct } from '../../store/actions';
import { styles } from './styles';

const Products = ({ navigation }) => {
  const selectedCategory = useSelector((state) => state.category.selectedCategory);
  const filteredProducts = useSelector((state) => state.products.filteredProducts);
  const dispatch = useDispatch();

  const onSelected = (item) => {
    dispatch(selectProduct(item.id));
    navigation.navigate('Product', { title: item.title, productId: item.id });
  };
  const renderProduct = ({ item }) => <ProductItem item={item} onSelected={onSelected} />;

  useEffect(() => {
    dispatch(filterProducts(selectedCategory.id));
  }, []);

  return (
    <FlatList
      data={filteredProducts}
      renderItem={renderProduct}
      keyExtractor={(item) => item.id.toString()}
      style={styles.containerList}
    />
  );
};

export default Products;
