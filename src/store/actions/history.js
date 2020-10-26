import * as actionTypes from './actionTypes';
import axios from 'axios';

export const startFetchHistory = () => {
  return {
    type: actionTypes.FETCH_ORDER_HISTORY_START,
  };
};

export const successFetchHistory = (histories) => {
  return {
    type: actionTypes.FETCH_ORDER_HISTORY_SUCCESS,
    historyData: histories,
  };
};

export const failFetchHistory = (err) => {
  return {
    type: actionTypes.FETCH_ORDER_HISTORY_FAIL,
    error: err,
  };
};

export const fetchHistoryData = (token, userId) => {
  return async (dispatch) => {
    dispatch(startFetchHistory());
    const historyData = await axios.get(
      `https://forkify-d9124.firebaseio.com/orders.json?auth=${token}&orderBy="userId"&equalTo="${userId}"`
    );

    // Convert obj to arr of key-value
    const historyDataArr = [];
    for (let key in historyData.data) {
      historyDataArr.push({ ...historyData.data[key], id: key });
    }

    const histories = historyDataArr.map(async (his) => {
      const mealDetailPromises = his.meals.map(async (meal) => {
        const mealDetail = await axios.get(
          `https://f2fapi.herokuapp.com/api/v1/recipe/${meal.mealId}`
        );

        return {
          ...meal,
          detail: mealDetail.data.recipe,
        };
      });

      const mealDetails = await Promise.all(mealDetailPromises);

      return {
        ...his,
        meals: mealDetails,
      };
    });

    const processedHistory = await Promise.all(histories);

    dispatch(successFetchHistory(processedHistory));
  };
};
