import React, { useState } from 'react';
import CardCustomize from './../../components/UI/CardCustomize/CardCustomize';
import { Row, Pagination, Layout, Menu, Affix } from 'antd';
import styles from './Home.module.css';
import OrderDrawer from './../../components/OrderDrawer/OrderDrawer';
import HomeBanner from './../../components/UI/HomeBanner/HomeBanner';
import { FireTwoTone, StarTwoTone } from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu } = Menu;

const Home = (props) => {
  const [visibleDrawer, setVisibleDrawer] = useState(false);

  const showDrawer = () => {
    setVisibleDrawer(true);
  };

  const onClose = () => {
    setVisibleDrawer(false);
  };

  return (
    <React.Fragment>
      <div className={styles.HomeBanner}>
        <HomeBanner>Your search results of "Beef"</HomeBanner>
        <OrderDrawer onCloseDrawer={onClose} visibleDrawer={visibleDrawer} />
      </div>

      <Layout>
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
                <Menu.Item
                  key="1"
                  icon={<StarTwoTone twoToneColor="#f0a500" />}
                >
                  Beef
                </Menu.Item>
                <Menu.Item
                  key="2"
                  icon={<StarTwoTone twoToneColor="#f0a500" />}
                >
                  Tomato
                </Menu.Item>
                <Menu.Item
                  key="3"
                  icon={<StarTwoTone twoToneColor="#f0a500" />}
                >
                  Pho
                </Menu.Item>
                <Menu.Item
                  key="4"
                  icon={<StarTwoTone twoToneColor="#f0a500" />}
                >
                  Chicken
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
        </Affix>
        <div className={styles.Home}>
          <Row gutter={[40, 40]}>
            <CardCustomize onOrderClicked={showDrawer} />
            <CardCustomize onOrderClicked={showDrawer} />
            <CardCustomize onOrderClicked={showDrawer} />
            <CardCustomize onOrderClicked={showDrawer} />
            <CardCustomize onOrderClicked={showDrawer} />
            <CardCustomize onOrderClicked={showDrawer} />
            <CardCustomize onOrderClicked={showDrawer} />
            <CardCustomize onOrderClicked={showDrawer} />
          </Row>
          <Pagination defaultCurrent={1} total={50} responsive={true} />
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default Home;
