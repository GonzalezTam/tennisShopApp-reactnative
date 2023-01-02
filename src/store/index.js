import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { categoryReducer, productsReducer, cartReducer, orderReducer } from './reducers';

const rootReducer = combineReducers({
  category: categoryReducer,
  products: productsReducer,
  cart: cartReducer,
  orders: orderReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
