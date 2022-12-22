import { PRODUCTS } from '../../constants/data/products';
import { productsTypes } from '../types';
const { SELECT_PRODUCT, FILTER_PRODUCTS } = productsTypes;

const initialState = {
  products: PRODUCTS,
  filteredProducts: [],
  selectedProduct: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PRODUCT:
      return {
        ...state,
        selectedProduct: state.products.find((product) => product.id === action.productId),
      };
    case FILTER_PRODUCTS:
      return {
        ...state,
        filteredProducts: state.products.filter(
          (product) => product.categoryId === action.categoryId
        ),
      };
    default:
      return state;
  }
};

export default productsReducer;
