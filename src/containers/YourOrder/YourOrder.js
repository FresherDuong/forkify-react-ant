import React from 'react';
import { Tabs } from 'antd';
import OrderTable from './../../components/OrderTable/OrderTable';
import HomeBanner from './../../components/UI/HomeBanner/HomeBanner';
import ButtonColored from './../../components/UI/ButtonColored/ButtonColored';
import YourHistory from './../YourHistory/YourHistory';
import OrderForm from './../../components/OrderForm/OrderForm';
import { useSelector, useDispatch } from 'react-redux';
import styles from './YourOrder.module.css';
import * as actionsCreator from './../../store/actions/index';
import IngredientModal from './../../components/IngredientModal/IngredientModal';

const { TabPane } = Tabs;

const YourOrder = (props) => {
  console.log('[YourOrder] render');
  const { myFavorites, modalEnable } = useSelector((state) => {
    return {
      myFavorites: state.favorites.myFavorites,
      modalEnable: state.ingredients.modalEnable,
    };
  });
  const dispatch = useDispatch();

  const onDeleteFavorite = (favId) => {
    dispatch(actionsCreator.removeFromFavorites(favId));
  };

  const openModal = (recipeId) => {
    dispatch(actionsCreator.openIngredientModal(recipeId));
  };

  const closeModal = () => {
    dispatch(actionsCreator.closeIngredientModal());
  };

  const onIncreaseMealQuantity = (idMeal, value) => {
    dispatch(actionsCreator.increaseMealQuantity(idMeal, value));
  };

  const tableData = [];
  myFavorites.forEach((fav) => {
    tableData.push({ ...fav, key: fav.favId });
  });

  let totalPrice = 0;

  if (myFavorites) {
    totalPrice = myFavorites
      .reduce((accumulator, fav) => {
        return accumulator + fav.mealPrice * fav.quantity;
      }, 0)
      .toFixed(2);
  }

  return (
    <React.Fragment>
      <IngredientModal modalEnable={modalEnable} closeModal={closeModal} />
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
            <ButtonColored>Continue</ButtonColored>
            <div className={styles.OrderForm}>
              <OrderForm />
            </div>
          </TabPane>
          <TabPane tab="Your order history" key="2">
            <YourHistory />
          </TabPane>
        </Tabs>
      </div>
    </React.Fragment>
  );
};

export default YourOrder;
