import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchHomeMealsStart = () => {
  return {
    type: actionTypes.FETCH_HOME_MEALS_START,
  };
};

export const fetchHomeMealsSuccess = (fetchedMeals, keyWord) => {
  return {
    type: actionTypes.FETCH_HOME_MEALS_SUCCESS,
    meals: fetchedMeals,
    keyWord: keyWord,
  };
};

export const fetchHomeMealsFails = (err, keyWord) => {
  return {
    type: actionTypes.FETCH_HOME_MEALS_FAIL,
    error: err,
    keyWord: keyWord,
  };
};

export const setHomeTotalResult = (totalResult) => {
  return {
    type: actionTypes.SET_HOME_TOTAL_PAGE,
    totalResult: totalResult,
  };
};

export const setHomeCurrentPage = (currentPage) => {
  return {
    type: actionTypes.SET_HOME_CURRENT_PAGE,
    currentPage: currentPage,
  };
};

export const fetchMeals = (keyWord) => {
  return (dispatch) => {
    dispatch(fetchHomeMealsStart());
    axios
      .get(`https://f2fapi.herokuapp.com/api/v1/search/${keyWord}`)
      .then((res) => {
        dispatch(fetchHomeMealsSuccess(res.data.recipes, keyWord));
        dispatch(setHomeTotalResult(res.data.count));
        if (res.data.count > 0) {
          dispatch(setHomeCurrentPage(1));
        }
      })
      .catch((err) => {
        dispatch(fetchHomeMealsFails(err, keyWord));
      });
  };
};
