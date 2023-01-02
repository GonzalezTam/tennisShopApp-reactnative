import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import {
  categoryReducer,
  productsReducer,
  cartReducer,
  orderReducer,
  authReducer,
} from './reducers';

const rootReducer = combineReducers({
  category: categoryReducer,
  products: productsReducer,
  cart: cartReducer,
  orders: orderReducer,
  auth: authReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
