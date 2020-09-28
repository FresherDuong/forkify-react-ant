import React from 'react';
import { Layout, BackTop } from 'antd';
import NavBar from './../../components/NavBar/NavBar';
import AppFooter from './../../components/AppFooter/AppFooter';

const { Content } = Layout;

const LayoutPage = (props) => {
  return (
    <React.Fragment>
      <Layout>
        <NavBar />
        <Content>{props.children}</Content>
        <AppFooter />
      </Layout>
      <BackTop />
    </React.Fragment>
  );
};

export default LayoutPage;
