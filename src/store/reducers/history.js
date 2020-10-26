import * as actionTypes from './../actions/actionTypes';
import { updateObject } from './../../shared/utils/utility';

const initialState = {
  history: null,
  loading: false,
  error: null,
};

const startFetchHistory = (state, action) => {
  return updateObject(state, {
    loading: true,
    error: null,
  });
};

const successFetchHistory = (state, action) => {
  return updateObject(state, {
    loading: false,
    history: action.historyData,
  });
};

const failFetchHistory = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.error,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ORDER_HISTORY_START:
      return startFetchHistory(state, action);

    case actionTypes.FETCH_ORDER_HISTORY_SUCCESS:
      return successFetchHistory(state, action);

    case actionTypes.FETCH_ORDER_HISTORY_FAIL:
      return failFetchHistory(state, action);
    default:
      return state;
  }
};

export default reducer;
