import React from 'react';
import { Menu, Input } from 'antd';
import { Link } from 'react-router-dom';
import { LoginOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import * as actionsCreator from './../../../store/actions/index';

const { Search } = Input;

const RightMenu = (props) => {
  console.log('[RightMenu] rendered');
  const dispatch = useDispatch();

  const onSearchMeal = (keyWord) => {
    dispatch(actionsCreator.fetchMeals(keyWord));
  };

  return (
    <Menu mode={props.openMode}>
      <Menu.Item key="search">
        <Search
          placeholder="Search your meals now..."
          style={{ width: 'auto' }}
          loading={false}
          allowClear={true}
          onSearch={onSearchMeal}
        />
      </Menu.Item>
      <Menu.Item key="login">
        <Link to="/auth">
          <LoginOutlined />
          Log in
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default RightMenu;
