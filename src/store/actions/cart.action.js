import { URL_BASE } from '../../constants/firebase';
import { cartTypes } from '../types';
const { ADD_TO_CART, REMOVE_FROM_CART, CONFIRM_ORDER } = cartTypes;

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    item,
  };
};

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    id,
  };
};

export const confirmOrder = (order) => {
  return {
    type: CONFIRM_ORDER,
    order,
  };
};

export const confirmCart = (items, total) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_BASE}/orders.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date: Date.now(),
          items,
          total,
        }),
      });

      const data = await response.json();
      dispatch({
        type: CONFIRM_ORDER,
        data,
      });
    } catch (error) {
      dispatch({
        type: CONFIRM_ORDER,
        error,
      });
    }
  };
};
