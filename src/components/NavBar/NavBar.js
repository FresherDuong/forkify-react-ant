import React, { useState } from 'react';
import LeftMenu from './LeftMenu/LeftMenu';
import RightMenu from './RightMenu/RightMenu';
import { Drawer, Button, Affix } from 'antd';
import logo from './../../assets/img/logo.png';

const Navbar = (props) => {
  const [visible, setVisible] = useState(false);

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
            <LeftMenu openMode="horizontal" />
          </div>
          <div className="rightMenu">
            <RightMenu openMode="horizontal" />
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
            <RightMenu openMode="vertical" />
            <LeftMenu openMode="vertical" />
          </Drawer>
        </div>
      </nav>
    </Affix>
  );
};

export default Navbar;
