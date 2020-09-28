import React from 'react';
import { Menu, Badge, Button } from 'antd';
import { Link } from 'react-router-dom';
import { HeartTwoTone, ShoppingTwoTone, HomeTwoTone } from '@ant-design/icons';
import YourFavorite from './../../../components/YourFavorite/YourFavorite';
import styles from './LeftMenu.module.css';

const SubMenu = Menu.SubMenu;

const LeftMenu = (props) => {
  return (
    <Menu mode={props.openMode}>
      <Menu.Item key="home">
        <Link to="/">
          <HomeTwoTone />
          Home
        </Link>
      </Menu.Item>
      <Menu.Item key="orders">
        <Link to="/your-orders">
          <ShoppingTwoTone />
          Your orders
        </Link>
      </Menu.Item>
      <SubMenu
        title={
          <span>
            <HeartTwoTone />
            <Badge
              count={25}
              offset={[15, 0]}
              style={{ backgroundColor: '#f6b585' }}
            >
              Your favorite meals
            </Badge>
          </span>
        }
      >
        <YourFavorite />
        <YourFavorite />
        <YourFavorite />
        <Menu.Item key="orderAll" disabled>
          <div className={styles.OrderAll}>
            <Button type="default" danger>
              Order all favorites
            </Button>
          </div>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default LeftMenu;
