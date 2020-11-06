import React, { useState, useEffect, useCallback } from 'react';
import { Row, Pagination, Layout, Spin, message } from 'antd';
import styles from './Home.module.css';
import OrderDrawer from './../../components/OrderDrawer/OrderDrawer';
import HomeBanner from './../../components/UI/HomeBanner/HomeBanner';
import CardSkeleton from './../../components/UI/CardSkeleton/CardSkeleton';
import AppSider from './../../components/AppSider/AppSider';
import { useSelector, useDispatch } from 'react-redux';
import HomeMeals from './HomeMeals/HomeMeals';
import * as actionCreator from './../../store/actions/index';
import { createSelector } from 'reselect';

const searchQuerySelect = createSelector(
  (state) => state.q,
  (q) => q
);

const Home = React.memo((props) => {
  // console.log('[Home.js] rendered');

  const [visibleDrawer, setVisibleDrawer] = useState(false);
  const [chosenMeal, setChosenMeal] = useState(null);

  const meals = useSelector((state) => state.home.meals);
  const loading = useSelector((state) => state.home.loading);
  const totalResult = useSelector((state) => state.home.totalResult);
  const currentPage = useSelector((state) => state.home.currentPage);
  const searchKeyWord = useSelector((state) => state.home.searchKeyWord);
  const myFavorites = useSelector((state) => state.favorites.myFavorites);
  const queryForSearchMeal = searchQuerySelect(
    Object.fromEntries(new URLSearchParams(props.location.search))
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const queryObj = Object.fromEntries(
      new URLSearchParams(props.location.search)
    );

    const mealToSearch = queryForSearchMeal ? queryForSearchMeal : 'beef';
    const pageOfMeal = queryObj.page ? queryObj.page : 1;
    document.title = 'Forkify | Order your nice meals';
    dispatch(actionCreator.fetchMeals(mealToSearch, pageOfMeal));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, queryForSearchMeal]);

  const openModal = useCallback(
    (recipeId) => {
      dispatch(actionCreator.openIngredientModal(recipeId));
    },
    [dispatch]
  );

  const showDrawer = useCallback((id, title, price) => {
    setChosenMeal({ id: id, title: title, price: price });
    setVisibleDrawer(true);
  }, []);

  const onClose = useCallback(() => {
    setChosenMeal(null);
    setVisibleDrawer(false);
    dispatch(actionCreator.resetOrderData());
  }, [dispatch]);

  const changePage = (page, pageSize) => {
    dispatch(actionCreator.setHomeCurrentPage(page));
    props.history.push({
      pathname: props.location.pathname,
      // eslint-disable-next-line no-useless-escape
      search: props.location.search.replace(/(page=)[^\&]+/, '$1' + page),
    });
    window.scrollTo(0, 0);
  };

  const addToFavorite = useCallback(
    (meal) => {
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
    },
    [dispatch, myFavorites]
  );

  const allMeals = meals ? (
    <HomeMeals
      meals={meals}
      showDrawer={showDrawer}
      openModal={openModal}
      addToFavorite={addToFavorite}
    />
  ) : (
    <CardSkeleton />
  );

  const banner = loading ? (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Spin size="large" />
    </div>
  ) : (
    <HomeBanner>{searchKeyWord}</HomeBanner>
  );

  return (
    <React.Fragment>
      <div className={styles.HomeBanner}>
        {banner}
        <OrderDrawer
          onCloseDrawer={onClose}
          visibleDrawer={visibleDrawer}
          drawerData={chosenMeal}
        />
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
});

export default Home;
