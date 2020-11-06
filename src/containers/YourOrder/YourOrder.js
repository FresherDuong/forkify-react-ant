import React, { useState, useCallback, useEffect } from 'react';
import { Tabs, Result, Button } from 'antd';
import OrderTable from './../../components/OrderTable/OrderTable';
import HomeBanner from './../../components/UI/HomeBanner/HomeBanner';
import ButtonColored from './../../components/UI/ButtonColored/ButtonColored';
import YourHistory from './../YourHistory/YourHistory';
import OrderForm from './../../components/OrderForm/OrderForm';
import { useSelector, useDispatch } from 'react-redux';
import styles from './YourOrder.module.css';
import * as actionsCreator from './../../store/actions/index';
import { Link } from 'react-router-dom';
import { createSelector } from 'reselect';

const selectMyFavorites = createSelector(
  (state) => state.favorites.myFavorites,
  (myFavorites) => myFavorites
);

const tableDataSelector = createSelector(
  (state) => state,
  (myFavorites) => {
    return myFavorites.map((fav) => {
      return { ...fav, key: fav.favId };
    });
  }
);

const { TabPane } = Tabs;

const YourOrder = (props) => {
  console.log('[YourOrder] render');
  const [isContinue, setIsContinue] = useState(false);
  // const myFavorites = useSelector((state) => state.favorites.myFavorites);
  const myFavorites = useSelector(selectMyFavorites);
  const isAuth = useSelector((state) => state.auth.token !== null);

  const dispatch = useDispatch();

  useEffect(() => {
    document.title = 'Forkify | Your orders';
  }, []);

  const onOpenCloseForm = () => {
    setIsContinue(!isContinue);
  };

  const onDeleteFavorite = useCallback(
    (favId) => {
      dispatch(actionsCreator.removeFromFavorites(favId));
    },
    [dispatch]
  );

  const openModal = useCallback(
    (recipeId) => {
      dispatch(actionsCreator.openIngredientModal(recipeId));
    },
    [dispatch]
  );

  const onIncreaseMealQuantity = useCallback(
    (idMeal, value) => {
      dispatch(actionsCreator.increaseMealQuantity(idMeal, value));
    },
    [dispatch]
  );

  // // With useMemo
  // const tableData = useMemo(
  //   () =>
  //     myFavorites.map((fav) => {
  //       return { ...fav, key: fav.favId };
  //     }),
  //   [myFavorites]
  // );

  // With reselect
  const tableData = tableDataSelector(myFavorites);

  let totalPrice = 0;

  if (myFavorites) {
    totalPrice = myFavorites
      .reduce((accumulator, fav) => {
        return accumulator + fav.mealPrice * fav.quantity;
      }, 0)
      .toFixed(2);
  }

  const notLogin = (
    <Result
      title="Please login to order your meal !"
      extra={
        <Link to="/auth">
          <Button type="primary" key="console">
            Log in now
          </Button>
        </Link>
      }
    />
  );

  let orderForm = null;
  if (isContinue && myFavorites.length > 0) {
    const meals = [];
    myFavorites.forEach((fav) => {
      meals.push({
        mealId: fav.favId,
        quantity: fav.quantity,
        price: fav.mealPrice,
      });
    });

    if (isAuth) {
      orderForm = (
        <div className={styles.OrderForm}>
          <OrderForm totalPrice={totalPrice} meals={meals} orderType="more" />
        </div>
      );
    } else {
      orderForm = notLogin;
    }
  }

  return (
    <React.Fragment>
      <div className={styles.YourOrder}>
        <Tabs defaultActiveKey="1" onChange={() => {}} type="card" centered>
          <TabPane tab="Order your favorite meals now" key="1">
            <OrderTable
              tableData={tableData}
              onDeleteFav={onDeleteFavorite}
              onOpenModal={openModal}
              onIncMealQuantity={onIncreaseMealQuantity}
            />
            <HomeBanner>{`Your total price: ${totalPrice} $`}</HomeBanner>
            {myFavorites.length > 0 ? (
              <ButtonColored onBtnClick={onOpenCloseForm}>
                Continue
              </ButtonColored>
            ) : null}
            {orderForm}
          </TabPane>
          <TabPane tab="Your order history" key="2">
            {isAuth ? <YourHistory /> : notLogin}
          </TabPane>
        </Tabs>
      </div>
    </React.Fragment>
  );
};

export default YourOrder;
