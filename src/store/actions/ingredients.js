import * as actionTypes from './actionTypes';
import axios from 'axios';

export const openIngredientModal = (greId) => {
  return {
    type: actionTypes.OPEN_INGREDIENT_MODAL,
    currentIngID: greId,
  };
};

export const closeIngredientModal = () => {
  return {
    type: actionTypes.CLOSE_INGREDIENT_MODAL,
  };
};

export const fetchIngredientsStart = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_START,
  };
};

export const fetchIngredientsSuccess = (ingredients) => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_SUCCESS,
    ingredients: ingredients,
  };
};

export const fetchIngredientsFail = (err) => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAIL,
    error: err,
  };
};

export const fetchIngredients = (ingId) => {
  return (dispatch) => {
    dispatch(fetchIngredientsStart());
    axios
      .get(`https://f2fapi.herokuapp.com/api/v1/recipe/${ingId}`)
      .then((res) => {
        dispatch(fetchIngredientsSuccess(res.data.recipe));
      })
      .catch((err) => {
        dispatch(fetchIngredientsFail(err));
      });
  };
};
