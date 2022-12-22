import { productsTypes } from '../types';

const { SELECT_PRODUCT, FILTER_PRODUCTS } = productsTypes;

export const selectProduct = (productId) => {
  return {
    type: SELECT_PRODUCT,
    productId,
  };
};

export const filterProducts = (categoryId) => {
  return {
    type: FILTER_PRODUCTS,
    categoryId,
  };
};
