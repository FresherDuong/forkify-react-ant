import React, { useState, useEffect } from 'react';
import CardCustomize from './../../components/UI/CardCustomize/CardCustomize';
import { Row, Pagination, Layout, Spin, message } from 'antd';
import styles from './Home.module.css';
import OrderDrawer from './../../components/OrderDrawer/OrderDrawer';
import HomeBanner from './../../components/UI/HomeBanner/HomeBanner';
import CardSkeleton from './../../components/UI/CardSkeleton/CardSkeleton';
import AppSider from './../../components/AppSider/AppSider';
import { useSelector, useDispatch } from 'react-redux';
import IngredientModal from './../../components/IngredientModal/IngredientModal';
import * as actionCreator from './../../store/actions/index';

message.config({
  duration: 1,
});

const Home = () => {
  console.log('[Home.js] rendered');
  const [visibleDrawer, setVisibleDrawer] = useState(false);

  const {
    meals,
    loading,
    totalResult,
    currentPage,
    myFavorites,
    modalEnable,
    searchKeyWord,
  } = useSelector((state) => {
    return {
      meals: state.home.meals,
      loading: state.home.loading,
      totalResult: state.home.totalResult,
      currentPage: state.home.currentPage,
      myFavorites: state.favorites.myFavorites,
      modalEnable: state.ingredients.modalEnable,
      searchKeyWord: state.home.searchKeyWord,
    };
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionCreator.fetchMeals('beef'));
  }, [dispatch]);

  const openModal = (recipeId) => {
    dispatch(actionCreator.openIngredientModal(recipeId));
  };

  const closeModal = () => {
    dispatch(actionCreator.closeIngredientModal());
  };

  const showDrawer = () => {
    setVisibleDrawer(true);
  };

  const onClose = () => {
    setVisibleDrawer(false);
  };

  const changePage = (page, pageSize) => {
    dispatch(actionCreator.setHomeCurrentPage(page));
    window.scrollTo(0, 0);
  };

  const addToFavorite = (meal) => {
    let isReadyToAdd = true;
    myFavorites.forEach((el) => {
      if (meal.recipe_id === el.favId) {
        message.error('This meal has already added to your favorites');
        isReadyToAdd = false;
      }
    });

    if (isReadyToAdd) {
      const newFavorite = {
        favId: meal.recipe_id,
        mealImage: meal.image_url,
        mealTitle: meal.title,
        mealPublisher: meal.publisher,
        mealPrice: 9.99,
        quantity: 1,
      };

      dispatch(actionCreator.addToFavorites(newFavorite));
      message.success('This meal was added to your favorites');
    }
  };

  let allMeals = <CardSkeleton />;

  if (meals) {
    allMeals = meals
      .slice((currentPage - 1) * 9, (currentPage - 1) * 9 + 9)
      .map((meal) => {
        return (
          <CardCustomize
            key={meal.recipe_id}
            mealTitle={meal.title}
            mealImage={meal.image_url}
            mealPrice={9.99}
            mealPublisher={meal.publisher}
            publisherUrl={meal.publisher_url}
            onOrderClicked={showDrawer}
            openModal={() => openModal(meal.recipe_id)}
            onAddToFavorites={() => addToFavorite(meal)}
          />
        );
      });
  }

  let banner = (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Spin size="large" />
    </div>
  );
  if (!loading) {
    banner = <HomeBanner>{searchKeyWord}</HomeBanner>;
  }

  return (
    <React.Fragment>
      <IngredientModal modalEnable={modalEnable} closeModal={closeModal} />

      <div className={styles.HomeBanner}>
        {banner}
        <OrderDrawer onCloseDrawer={onClose} visibleDrawer={visibleDrawer} />
      </div>

      <Layout>
        <AppSider />
        <div className={styles.Home}>
          <Row gutter={[40, 40]}>{allMeals}</Row>
          {meals ? (
            <div className={styles.Pagination}>
              <Pagination
                current={currentPage}
                pageSize={9}
                total={totalResult}
                responsive={true}
                showSizeChanger={false}
                onChange={changePage}
              />
            </div>
          ) : null}
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default Home;
