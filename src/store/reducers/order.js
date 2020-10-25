import * as actionTypes from './../actions/actionTypes';
import { updateObject } from './../../shared/utils/utility';

const initialState = {
  loading: false,
  error: null,
  ordered: null,
};

const startOrder = (state, action) => {
  return updateObject(state, {
    loading: true,
    error: null,
    ordered: null,
  });
};

const successOrder = (state, action) => {
  return updateObject(state, {
    loading: false,
    ordered: action.orderId,
  });
};

const failOrder = (state, action) => {
  return updateObject(state, {
    loading: false,
    ordered: null,
    error: action.error,
  });
};

const resetOrderData = (state, action) => {
  return updateObject(state, {
    ordered: null,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ORDER_START:
      return startOrder(state, action);

    case actionTypes.ORDER_SUCCESS:
      return successOrder(state, action);

    case actionTypes.ORDER_FAIL:
      return failOrder(state, action);

    case actionTypes.ORDER_RESET_DATA:
      return resetOrderData(state, action);

    default:
      return state;
  }
};

export default reducer;
