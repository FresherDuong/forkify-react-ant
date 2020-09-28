import React from 'react';
import { Tabs } from 'antd';
import OrderTable from './../../components/OrderTable/OrderTable';
import HomeBanner from './../../components/UI/HomeBanner/HomeBanner';
import ButtonColored from './../../components/UI/ButtonColored/ButtonColored';
import YourHistory from './../YourHistory/YourHistory';
import OrderForm from './../../components/OrderForm/OrderForm';
import styles from './YourOrder.module.css';

const { TabPane } = Tabs;

const YourOrder = (props) => {
  return (
    <div className={styles.YourOrder}>
      <Tabs defaultActiveKey="1" onChange={() => {}} type="card" centered>
        <TabPane tab="Order your favorite meals now" key="1">
          <OrderTable />
          <HomeBanner>Your total price: 999.9$</HomeBanner>
          <ButtonColored>Continue</ButtonColored>
          <div className={styles.OrderForm}>
            <OrderForm />
          </div>
        </TabPane>
        <TabPane tab="Order history" key="2">
          <YourHistory />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default YourOrder;
