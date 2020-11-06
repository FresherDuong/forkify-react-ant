import React from 'react';
import { Menu, Input, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { LoginOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const { Search } = Input;
const SubMenu = Menu.SubMenu;

const RightMenu = React.memo((props) => {
  // console.log('[RightMenu] rendered');

  const token = useSelector((state) => state.auth.token);
  const displayName = useSelector((state) => state.auth.displayName);

  const history = useHistory();

  const onSearchMeal = (keyWord) => {
    if (keyWord === '') {
      return;
    }
    window.scrollTo(0, 0);
    history.push({
      pathname: '/',
      search: `?q=${keyWord}&page=1`,
    });
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
    <Menu mode={props.openMode} defaultSelectedKeys={[props.currentMenu]}>
      <SubMenu
        key="search"
        title={
          <Search
            placeholder="Search your meals now..."
            style={{ width: 'auto' }}
            loading={false}
            allowClear={true}
            onSearch={onSearchMeal}
          />
        }
      ></SubMenu>
      {authState}
    </Menu>
  );
});

export default RightMenu;
