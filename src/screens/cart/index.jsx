import React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { CartItem } from '../../components';
import { removeFromCart, confirmCart } from '../../store/actions';
import { styles } from './styles';

const Cart = ({ navigation }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.total);
  const onDelete = (id) => {
    dispatch(removeFromCart(id));
  };
  const onConfirmOrder = () => {
    dispatch(confirmCart(cart, totalAmount));
  };

  const renderItem = ({ item }) => <CartItem item={item} onDelete={onDelete} />;

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={cart}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View style={styles.footer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total: </Text>
          <Text style={styles.totalPrice}>${totalAmount}</Text>
        </View>
        <TouchableOpacity
          style={cart.length === 0 ? styles.confirmButtonDisabled : styles.confirmButtonEnabled}
          onPress={onConfirmOrder}
          disabled={cart.length === 0}>
          <Text style={styles.confirmButtonText}>Confirm Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;
