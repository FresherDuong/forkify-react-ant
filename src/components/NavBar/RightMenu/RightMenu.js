import React from 'react';
import { Menu, Input } from 'antd';
import { Link } from 'react-router-dom';
import { LoginOutlined } from '@ant-design/icons';

const { Search } = Input;

const RightMenu = (props) => {
  return (
    <Menu mode={props.openMode}>
      <Menu.Item key="search">
        <Search
          placeholder="Search your meals now..."
          style={{ width: 'auto' }}
          loading={false}
          allowClear={true}
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
