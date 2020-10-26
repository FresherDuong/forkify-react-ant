import React, { useEffect } from 'react';
import { Collapse, Spin, Empty } from 'antd';
import History from './../../components/History/History';
import { useSelector, useDispatch } from 'react-redux';
import * as actionsCreator from './../../store/actions/index';

const { Panel } = Collapse;

const YourHistory = (props) => {
  const { loading, history, token, userId } = useSelector((state) => {
    return {
      loading: state.history.loading,
      history: state.history.history,
      token: state.auth.token,
      userId: state.auth.userId,
    };
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionsCreator.fetchHistoryData(token, userId));
  }, [dispatch, token, userId]);

  let historyData = (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '200px',
      }}
    >
      <Spin size="large" />
    </div>
  );

  if (!loading && history !== null) {
    if (history.length === 0) {
      historyData = (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '200px',
          }}
        >
          <Empty />
        </div>
      );
    } else {
      historyData = history.map((his) => {
        const hisData = his.meals.map((meal) => {
          return {
            key: meal.mealId,
            quantity: meal.quantity,
            mealInfo: {
              favImg: meal.detail.image_url,
              favTitle: meal.detail.title,
              favPublisher: meal.detail.publisher,
              favPrice: meal.price,
            },
          };
        });

        return (
          <Panel
            key={his.id}
            header={`Order ID: "${his.id}" \n - Ordered at: ${his.orderAt}`}
          >
            <History totalPrice={his.totalPrice} hisData={hisData} />
          </Panel>
        );
      });
    }
  }

  return (
    <Collapse defaultActiveKey={['1']} onChange={() => {}}>
      {historyData}
    </Collapse>
  );
};

export default YourHistory;
