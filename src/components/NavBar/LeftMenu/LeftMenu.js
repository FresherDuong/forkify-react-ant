import React from 'react';
import { Menu, Badge, Button } from 'antd';
import { Link } from 'react-router-dom';
import { HeartTwoTone, ShoppingTwoTone, HomeTwoTone } from '@ant-design/icons';
import YourFavorite from './../../../components/YourFavorite/YourFavorite';
import styles from './LeftMenu.module.css';
import { useSelector, useDispatch } from 'react-redux';
import * as actionsCreator from './../../../store/actions/index';

const SubMenu = Menu.SubMenu;

const LeftMenu = React.memo((props) => {
  console.log('[LeftMenu] rendered');

  const myFavorites = useSelector((state) => {
    return state.favorites.myFavorites;
  });
  const dispatch = useDispatch();

  const onDeleteFavorite = (favId) => {
    dispatch(actionsCreator.removeFromFavorites(favId));
  };

  const onOpenIngredients = (favId) => {
    dispatch(actionsCreator.openIngredientModal(favId));
  };

  const myFavoriteMeals =
    myFavorites.length === 0 ? null : (
      <div className={styles.Favorites}>
        {myFavorites.map((el) => (
          <YourFavorite
            key={el.favId}
            favId={el.favId}
            favImg={el.mealImage}
            favTitle={el.mealTitle}
            favPrice={el.mealPrice}
            favPublisher={el.mealPublisher}
            onDeleteFav={() => onDeleteFavorite(el.favId)}
            onShowIng={() => onOpenIngredients(el.favId)}
          />
        ))}
        <div className={styles.OrderAll}>
          <Link to="/your-orders">
            <Button type="default" danger>
              Order all favorites
            </Button>
          </Link>
        </div>
      </div>
    );

  return (
    <Menu mode={props.openMode} defaultSelectedKeys={[props.currentMenu]}>
      <Menu.Item key="home">
        <Link to="/">
          <HomeTwoTone />
          Home
        </Link>
      </Menu.Item>
      <Menu.Item key="orders">
        <Badge dot={myFavorites.length === 0 ? false : true}>
          <Link to="/your-orders">
            <ShoppingTwoTone />
            Your orders
          </Link>
        </Badge>
      </Menu.Item>
      <SubMenu
        title={
          <span>
            <HeartTwoTone />
            <Badge
              count={myFavorites.length === 0 ? 'Empty' : myFavorites.length}
              offset={[25, 0]}
              style={{ backgroundColor: '#f6b585' }}
            >
              Your favorite meals
            </Badge>
          </span>
        }
      >
        {myFavoriteMeals}
      </SubMenu>
    </Menu>
  );
});

export default LeftMenu;
