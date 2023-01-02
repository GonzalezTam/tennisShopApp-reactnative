import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { View, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { OrderItem } from '../../components';
import { getOrders, removeOrder } from '../../store/actions';
import { styles } from './styles';

const Orders = ({ navigation }) => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.list);
  const onDelete = (id) => {
    dispatch(removeOrder(id));
  };

  const renderItem = ({ item }) => <OrderItem item={item} onDelete={onDelete} />;

  useFocusEffect(
    useCallback(() => {
      dispatch(getOrders());
    }, [dispatch])
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Orders;
