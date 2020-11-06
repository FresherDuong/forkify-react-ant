import React from 'react';
import { Drawer } from 'antd';
import OrderForm from './../OrderForm/OrderForm';
import styles from './OrderDrawer.module.css';

const OrderDrawer = React.memo((props) => {
  console.log('[OrderDrawer] rendered');

  let mealTitle = '';
  let mealId = '';
  let mealPrice = 0;
  if (props.drawerData) {
    mealTitle = props.drawerData.title;
    mealId = props.drawerData.id;
    mealPrice = props.drawerData.price;
  }

  return (
    <Drawer
      title={`You has chosen "${mealTitle}" - Price: ${mealPrice} $`}
      placement="top"
      closable={false}
      onClose={props.onCloseDrawer}
      visible={props.visibleDrawer}
      key="top"
      height="auto"
    >
      <div className={styles.OrderForm}>
        <OrderForm
          meals={[
            {
              mealId: mealId,
              quantity: 1,
              price: mealPrice,
            },
          ]}
          mealTitle={mealTitle}
          totalPrice={mealPrice}
          onCloseForm={props.onCloseDrawer}
          orderType="one"
        />
      </div>
    </Drawer>
  );
});

export default OrderDrawer;
