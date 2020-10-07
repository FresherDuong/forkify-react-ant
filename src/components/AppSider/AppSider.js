import React from 'react';
import { FireTwoTone, StarTwoTone } from '@ant-design/icons';
import { Layout, Menu, Affix } from 'antd';

const { Sider } = Layout;
const { SubMenu } = Menu;

const AppSider = () => {
  return (
    <Affix offsetTop={63.75}>
      <Sider
        style={{ backgroundColor: '#ffffff', height: '100%' }}
        breakpoint="md"
        collapsedWidth="0"
        onBreakpoint={() => {}}
        onCollapse={() => {}}
      >
        <div className="logo" />
        <Menu theme="light" mode="inline" defaultOpenKeys={['hotKeyWord']}>
          <SubMenu
            key="hotKeyWord"
            title={
              <span>
                <FireTwoTone twoToneColor="#eb2f96" />
                <span>
                  <strong>Top searches</strong>
                </span>
              </span>
            }
          >
            <Menu.Item key="1" icon={<StarTwoTone twoToneColor="#f0a500" />}>
              Beef
            </Menu.Item>
            <Menu.Item key="2" icon={<StarTwoTone twoToneColor="#f0a500" />}>
              Tomato
            </Menu.Item>
            <Menu.Item key="3" icon={<StarTwoTone twoToneColor="#f0a500" />}>
              Pho
            </Menu.Item>
            <Menu.Item key="4" icon={<StarTwoTone twoToneColor="#f0a500" />}>
              Chicken
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    </Affix>
  );
};

export default AppSider;
