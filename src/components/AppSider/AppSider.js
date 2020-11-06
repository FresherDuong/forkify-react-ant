import React, { useEffect } from 'react';
import { FireTwoTone, StarTwoTone } from '@ant-design/icons';
import { Layout, Menu, Affix, Spin } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import * as actionsCreator from './../../store/actions/index';
import { createSelector } from 'reselect';
import { useHistory } from 'react-router-dom';

const { Sider } = Layout;
const { SubMenu } = Menu;

// Create outside of component
const selectData = createSelector(
  (state) => state.home.topSearch,
  (state) => state.home.topSearchLoading,
  (state) => state.home.topSearchError,
  (topSearch, topSearchLoading, topSearchError) => ({
    topSearch,
    topSearchLoading,
    topSearchError,
  })
);

const AppSider = React.memo(() => {
  console.log('[AppSider] rendered');
  const { topSearch, topSearchLoading, topSearchError } = useSelector(
    selectData
  );
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(actionsCreator.fetchTopSearch());
  }, [dispatch]);

  let keyWordData = (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '10px 10px',
      }}
    >
      <Spin size="large" />
    </div>
  );

  if (!topSearchLoading && topSearch) {
    keyWordData = topSearch.slice(60, 70).map((word, index) => {
      return (
        <Menu.Item key={word.id} icon={<StarTwoTone twoToneColor="#f0a500" />}>
          {word.name}
        </Menu.Item>
      );
    });
  } else {
    keyWordData = <h1>{topSearchError}</h1>;
  }

  const onMenuSelected = (menu) => {
    window.scrollTo(0, 0);
    history.push({
      pathname: '/',
      search: `?q=${menu.key}&page=1`,
    });
  };

  return (
    <Affix offsetTop={63.75}>
      <Sider
        style={{ backgroundColor: '#ffffff', height: '100%' }}
        breakpoint="md"
        collapsedWidth="0"
        onBreakpoint={() => {}}
        onCollapse={() => {}}
      >
        <Menu
          theme="light"
          mode="inline"
          defaultOpenKeys={['hotKeyWord']}
          onClick={onMenuSelected}
        >
          <SubMenu
            key="hotKeyWord"
            title={
              <span>
                <FireTwoTone twoToneColor="#eb2f96" />
                <span>
                  <strong>Top 10 searches</strong>
                </span>
              </span>
            }
          >
            {keyWordData}
          </SubMenu>
        </Menu>
      </Sider>
    </Affix>
  );
});

export default AppSider;
