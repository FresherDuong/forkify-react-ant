import * as actionTypes from './../actions/actionTypes';
import { updateObject } from './../../shared/utils/utility';

const initialState = {
  modalEnable: false,
  currentIngID: null,
  ingredients: null,
  ingredientsLoading: false,
  ingredientsError: null,
};

const openIngredientModal = (state, action) => {
  return updateObject(state, {
    modalEnable: true,
    currentIngID: action.currentIngID,
  });
};

const closeIngredientModal = (state, action) => {
  return updateObject(state, { modalEnable: false });
};

const fetchIngredientsStart = (state, action) => {
  return updateObject(state, {
    ingredients: null,
    ingredientsError: null,
    ingredientsLoading: true,
  });
};

const fetchIngredientsSuccess = (state, action) => {
  return updateObject(state, {
    ingredients: action.ingredients,
    ingredientsLoading: false,
  });
};

const fetchIngredientsFail = (state, action) => {
  return updateObject(state, {
    ingredientsError: action.error.message,
    ingredientsLoading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.OPEN_INGREDIENT_MODAL:
      return openIngredientModal(state, action);

    case actionTypes.CLOSE_INGREDIENT_MODAL:
      return closeIngredientModal(state, action);

    case actionTypes.FETCH_INGREDIENTS_START:
      return fetchIngredientsStart(state, action);

    case actionTypes.FETCH_INGREDIENTS_SUCCESS:
      return fetchIngredientsSuccess(state, action);

    case actionTypes.FETCH_INGREDIENTS_FAIL:
      return fetchIngredientsFail(state, action);

    default:
      return state;
  }
};

export default reducer;
