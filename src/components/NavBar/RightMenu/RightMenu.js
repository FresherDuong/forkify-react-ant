import React from 'react';
import { Menu, Input, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { LoginOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import * as actionsCreator from './../../../store/actions/index';
import { useSelector } from 'react-redux';

const { Search } = Input;
const SubMenu = Menu.SubMenu;

const RightMenu = (props) => {
  console.log('[RightMenu] rendered');
  const { token, displayName } = useSelector((state) => {
    return {
      token: state.auth.token,
      displayName: state.auth.displayName,
    };
  });
  const dispatch = useDispatch();

  const onSearchMeal = (keyWord) => {
    dispatch(actionsCreator.fetchMeals(keyWord));
  };

  let authState = (
    <Menu.Item key="login">
      <Link to="/auth">
        <LoginOutlined />
        Log in
      </Link>
    </Menu.Item>
  );

  if (token) {
    authState = (
      <SubMenu
        key="logout"
        title={
          <span>
            <Avatar
              style={{ backgroundColor: '#87d068' }}
              icon={<UserOutlined />}
            />{' '}
            {displayName}
          </span>
        }
      >
        <Menu.Item key="5">
          <Link to="/logout">
            <LogoutOutlined />
            Log out
          </Link>
        </Menu.Item>
      </SubMenu>
    );
  }

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
      {authState}
    </Menu>
  );
};

export default RightMenu;
