import React, { useState, useCallback, useMemo } from 'react';
import LeftMenu from './LeftMenu/LeftMenu';
import RightMenu from './RightMenu/RightMenu';
import { Drawer, Button, Affix } from 'antd';
import logo from './../../assets/img/logo.png';
import { useLocation } from 'react-router-dom';

const navBarMenuItems = {
  '/': ['home'],
  '/your-orders': ['orders'],
  '/auth': ['login'],
};

const Navbar = () => {
  // console.log('[NavBar] rendered');
  const [visible, setVisible] = useState(false);

  const location = useLocation();

  let selectedMenu = useMemo(
    () => navBarMenuItems[location.pathname] || ['home'],
    [location.pathname]
  );

  const showDrawer = useCallback(() => {
    setVisible(true);
  }, []);

  const onClose = useCallback(() => {
    setVisible(false);
  }, []);

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
            <LeftMenu
              openMode="horizontal"
              currentMenu={selectedMenu}
              onCloseDrawer={onClose}
            />
          </div>
          <div className="rightMenu">
            <RightMenu
              openMode="horizontal"
              currentMenu={selectedMenu}
              onCloseDrawer={onClose}
            />
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
            <RightMenu
              openMode="vertical"
              currentMenu={selectedMenu}
              onCloseDrawer={onClose}
            />
            <LeftMenu
              openMode="vertical"
              currentMenu={selectedMenu}
              onCloseDrawer={onClose}
            />
          </Drawer>
        </div>
      </nav>
    </Affix>
  );
};

export default Navbar;
