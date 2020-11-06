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

export const fetchMeals = (keyWord, page = 1) => {
  return (dispatch) => {
    dispatch(fetchHomeMealsStart());
    axios
      .get(`https://f2fapi.herokuapp.com/api/v1/search/${keyWord}`)
      .then((res) => {
        dispatch(fetchHomeMealsSuccess(res.data.recipes, keyWord));
        dispatch(setHomeTotalResult(res.data.count));
        if (res.data.count > 0) {
          dispatch(setHomeCurrentPage(page));
        }
      })
      .catch((err) => {
        dispatch(fetchHomeMealsFails(err, keyWord));
      });
  };
};

export const fetchHomeTopSearchStart = () => {
  return {
    type: actionTypes.FETCH_HOME_TOP_SEARCH_START,
  };
};

export const fetchHomeTopSearchSuccess = (keyWords) => {
  return {
    type: actionTypes.FETCH_HOME_TOP_SEARCH_SUCCESS,
    totalKeyWord: keyWords,
  };
};

export const fetchHomeTopSearchFail = (err) => {
  return {
    type: actionTypes.FETCH_HOME_TOP_SEARCH_FAIL,
    error: err,
  };
};

export const fetchTopSearch = () => {
  return (dispatch) => {
    dispatch(fetchHomeTopSearchStart());
    axios
      .get('https://forkify-d9124.firebaseio.com/keyWords.json')
      .then((res) => {
        const fetchedKeyWords = [];
        for (let key in res.data) {
          fetchedKeyWords.push({ ...res.data[key], id: res.data[key].name });
        }
        dispatch(fetchHomeTopSearchSuccess(fetchedKeyWords));
      })
      .catch((err) => {
        dispatch(fetchHomeTopSearchFail(err.message));
      });
  };
};
