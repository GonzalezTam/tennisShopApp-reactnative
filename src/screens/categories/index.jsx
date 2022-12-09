import React from 'react';
import { FlatList } from 'react-native';

import { CategoryItem } from '../../components';
import { CATEGORIES } from '../../constants/data/categories';
import { styles } from './styles';

const Categories = ({ navigation }) => {
  const onSelected = (item) => {
    navigation.navigate('Products', { categoryId: item.id, title: item.name });
  };
  const renderCategory = ({ item }) => <CategoryItem item={item} onSelected={onSelected} />;

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderCategory}
      keyExtractor={(item) => item.id.toString()}
      style={styles.containerList}
    />
  );
};

export default Categories;
