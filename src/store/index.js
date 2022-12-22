import { createStore, combineReducers } from 'redux';

import { categoryReducer, productsReducer } from './reducers';

const rootReducer = combineReducers({
  category: categoryReducer,
  products: productsReducer,
});

export default createStore(rootReducer);
