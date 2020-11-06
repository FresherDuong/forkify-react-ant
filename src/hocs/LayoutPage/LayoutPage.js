import React from 'react';
import { Layout, BackTop } from 'antd';
import NavBar from './../../components/NavBar/NavBar';
import AppFooter from './../../components/AppFooter/AppFooter';
import ScrollToTop from './../../components/ScrollToTop/ScrollToTop';
import IngredientModal from './../../components/IngredientModal/IngredientModal';

const { Content } = Layout;

const LayoutPage = (props) => {
  console.log('[LayoutPage] rendered');
  return (
    <React.Fragment>
      <Layout>
        <ScrollToTop />
        <IngredientModal />
        <NavBar />
        <Content>{props.children}</Content>
        <AppFooter />
      </Layout>
      <BackTop />
    </React.Fragment>
  );
};

export default LayoutPage;
