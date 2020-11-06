import React, { useState } from 'react';
import LeftMenu from './LeftMenu/LeftMenu';
import RightMenu from './RightMenu/RightMenu';
import { Drawer, Button, Affix } from 'antd';
import logo from './../../assets/img/logo.png';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  console.log('[NavBar] rendered');
  const [visible, setVisible] = useState(false);

  const location = useLocation();

  let selectedMenu = 'home';
  if (location.pathname === '/') {
    selectedMenu = 'home';
  }
  if (location.pathname === '/your-orders') {
    selectedMenu = 'orders';
  }
  if (location.pathname === '/auth') {
    selectedMenu = 'login';
  }

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <Affix offsetTop={0}>
      <nav className="menuBar">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="logo-img" />
          </a>
        </div>
        <div className="menuCon">
          <div className="leftMenu">
            <LeftMenu openMode="horizontal" currentMenu={selectedMenu} />
          </div>
          <div className="rightMenu">
            <RightMenu openMode="horizontal" currentMenu={selectedMenu} />
          </div>
          <Button
            className="barsMenu"
            type="primary"
            onClick={showDrawer}
            style={{ borderColor: '#f6b585', backgroundColor: '#fff' }}
          >
            <span className="barsBtn"></span>
          </Button>
          <Drawer
            title="Forkify"
            placement="right"
            closable={true}
            onClose={onClose}
            visible={visible}
          >
            <RightMenu openMode="vertical" currentMenu={selectedMenu} />
            <LeftMenu openMode="vertical" currentMenu={selectedMenu} />
          </Drawer>
        </div>
      </nav>
    </Affix>
  );
};

export default Navbar;
