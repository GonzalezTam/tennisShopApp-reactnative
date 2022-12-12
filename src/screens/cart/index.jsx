import React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';

import { CartItem } from '../../components';
import { CART } from '../../constants/data/cart';
import { styles } from './styles';

const Cart = ({ navigation }) => {
  const onDelete = (id) => {
    console.log('Delete item with id: ', id);
    //navigation.navigate('Cart');
  };

  const renderItem = ({ item }) => <CartItem item={item} onDelete={onDelete} />;

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={CART}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View style={styles.footer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total: </Text>
          <Text style={styles.totalPrice}>$100</Text>
        </View>
        <TouchableOpacity style={styles.confirmButton} onPress={() => {}}>
          <Text style={styles.confirmButtonText}>Confirm Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;
