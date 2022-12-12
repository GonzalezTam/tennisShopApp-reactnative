import React from 'react';
import { View, FlatList } from 'react-native';

import { OrderItem } from '../../components';
import { ORDERS } from '../../constants/data/orders';
import { styles } from './styles';

const Orders = ({ navigation }) => {
  const onDelete = (id) => {
    console.log('Delete order with id: ', id);
    //navigation.navigate('Cart');
  };

  const renderItem = ({ item }) => <OrderItem item={item} onDelete={onDelete} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={ORDERS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Orders;
