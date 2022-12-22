import { CATEGORIES } from '../../constants/data/categories';
import { categoryTypes } from '../types';

const { SELECT_CATEGORY } = categoryTypes;
const initialState = {
  categories: CATEGORIES,
  selectedCategory: null,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CATEGORY:
      // eslint-disable-next-line no-case-declarations
      const indexCategory = state.categories.findIndex(
        (category) => category.id === action.categoryId
      );
      if (indexCategory < 0) return state;
      return {
        ...state,
        selectedCategory: state.categories[indexCategory],
      };
    default:
      return state;
  }
};

export default categoryReducer;
