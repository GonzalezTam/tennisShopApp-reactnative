/* eslint-disable no-case-declarations */
import { ordersTypes } from '../types';

const { GET_ORDERS, REMOVE_ORDER } = ordersTypes;
const initialState = {
  list: [],
  total: 0,
  errors: null,
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS:
      return {
        ...state,
        list: action.orders,
      };
    case REMOVE_ORDER:
      const filteredOrders = state.list.filter((order) => order.id !== action.id);
      return {
        ...state,
        list: filteredOrders,
      };
    default:
      return state;
  }
};

export default ordersReducer;
