import * as actionTypes from './actionTypes';
import * as actionsCreator from './index';
import axios from 'axios';

export const startOrder = () => {
  return {
    type: actionTypes.ORDER_START,
  };
};

export const successOrder = (orderId) => {
  return {
    type: actionTypes.ORDER_SUCCESS,
    orderId: orderId,
  };
};

export const failOrder = (err) => {
  return {
    type: actionTypes.ORDER_FAIL,
    error: err,
  };
};

export const resetOrderData = () => {
  return {
    type: actionTypes.ORDER_RESET_DATA,
  };
};

export const orderNow = (orders, token, type) => {
  return (dispatch) => {
    dispatch(startOrder());
    axios
      .post(
        `https://forkify-d9124.firebaseio.com/orders.json?auth=${token}`,
        orders
      )
      .then((res) => {
        dispatch(successOrder(res.data.name));
        if (type === 'more') {
          dispatch(actionsCreator.deleteAllFavorites());
          dispatch(actionsCreator.resetOrderData());
        }
      })
      .catch((err) => {
        dispatch(failOrder(err.message));
      });
  };
};
