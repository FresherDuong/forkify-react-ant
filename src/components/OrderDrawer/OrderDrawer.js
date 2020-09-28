import React from 'react';
import { Drawer } from 'antd';
import OrderForm from './../OrderForm/OrderForm';
import styles from './OrderDrawer.module.css';

const OrderDrawer = (props) => {
  return (
    <Drawer
      title="You has ordered PATTY MELTS !"
      placement="top"
      closable={true}
      onClose={props.onCloseDrawer}
      visible={props.visibleDrawer}
      key="top"
      height="auto"
    >
      <div className={styles.OrderForm}>
        <OrderForm />
      </div>
    </Drawer>
  );
};

export default OrderDrawer;
