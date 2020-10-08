import * as actionTypes from './../actions/actionTypes';
import { updateObject } from './../../shared/utils/utility';

const initialState = {
  meals: null,
  error: null,
  loading: false,
  totalResult: 0,
  currentPage: 0,
  searchKeyWord: null,
  topSearch: null,
  topSearchLoading: false,
  topSearchError: null,
};

const fetchHomeMealsStart = (state, action) => {
  return updateObject(state, { meals: null, error: null, loading: true });
};

const fetchHomeMealsSuccess = (state, action) => {
  return updateObject(state, {
    meals: action.meals,
    loading: false,
    searchKeyWord:
      action.keyWord !== ''
        ? `Search results of "${action.keyWord}". Search yours now 🍥`
        : 'Search your meal now 🍥',
  });
};

const fetchHomeMealsFail = (state, action) => {
  return updateObject(state, {
    error: action.error.message,
    loading: false,
    searchKeyWord: `Can not find meal with "${action.keyWord}". Try another meal !`,
  });
};

const setHomeTotalResult = (state, action) => {
  return updateObject(state, {
    totalResult: action.totalResult,
  });
};

const setHomeCurrentPage = (state, action) => {
  return updateObject(state, {
    currentPage: action.currentPage,
  });
};

const fetchHomeTopSearchStart = (state, action) => {
  return updateObject(state, {
    topSearchLoading: true,
  });
};

const fetchHomeTopSearchSuccess = (state, action) => {
  return updateObject(state, {
    topSearch: action.totalKeyWord,
    topSearchLoading: false,
  });
};

const fetchHomeTopSearchFail = (state, action) => {
  return updateObject(state, {
    topSearchError: action.error,
    topSearchLoading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_HOME_MEALS_START:
      return fetchHomeMealsStart(state, action);

    case actionTypes.FETCH_HOME_MEALS_SUCCESS:
      return fetchHomeMealsSuccess(state, action);

    case actionTypes.FETCH_HOME_MEALS_FAIL:
      return fetchHomeMealsFail(state, action);

    case actionTypes.SET_HOME_TOTAL_PAGE:
      return setHomeTotalResult(state, action);

    case actionTypes.SET_HOME_CURRENT_PAGE:
      return setHomeCurrentPage(state, action);

    case actionTypes.FETCH_HOME_TOP_SEARCH_START:
      return fetchHomeTopSearchStart(state, action);

    case actionTypes.FETCH_HOME_TOP_SEARCH_SUCCESS:
      return fetchHomeTopSearchSuccess(state, action);

    case actionTypes.FETCH_HOME_TOP_SEARCH_FAIL:
      return fetchHomeTopSearchFail(state, action);

    default:
      return state;
  }
};

export default reducer;
