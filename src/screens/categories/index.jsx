import React from 'react';
import { FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { CategoryItem } from '../../components';
import { selectCategory } from '../../store/actions';
import { styles } from './styles';

const Categories = ({ navigation }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);
  const onSelected = (item) => {
    dispatch(selectCategory(item.id));
    navigation.navigate('Products', { categoryId: item.id, title: item.name });
  };
  const renderCategory = ({ item }) => <CategoryItem item={item} onSelected={onSelected} />;

  return (
    <FlatList
      data={categories}
      renderItem={renderCategory}
      keyExtractor={(item) => item.id.toString()}
      style={styles.containerList}
    />
  );
};

export default Categories;
