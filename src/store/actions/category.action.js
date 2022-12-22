import { categoryTypes } from '../types';

const { SELECT_CATEGORY } = categoryTypes;

export const selectCategory = (categoryId) => {
  return {
    type: SELECT_CATEGORY,
    categoryId,
  };
};
