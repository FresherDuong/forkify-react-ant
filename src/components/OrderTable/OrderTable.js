import React from 'react';
import { Table, InputNumber } from 'antd';
import YourFavorite from './../../components/YourFavorite/YourFavorite';

const { Column } = Table;

const OrderTable = React.memo((props) => {
  console.log('[OrderTable] rendered');
  return (
    <div>
      <Table dataSource={props.tableData} pagination={true} scroll={{ x: 300 }}>
        <Column
          title="Your favorites"
          render={(fav) => (
            <YourFavorite
              favId={fav.favId}
              favImg={fav.mealImage}
              favTitle={fav.mealTitle}
              favPrice={fav.mealPrice}
              favPublisher={fav.mealPublisher}
              onDeleteFav={() => props.onDeleteFav(fav.favId)}
              onShowIng={() => props.onOpenModal(fav.favId)}
            />
          )}
          key="yourFavorites"
        />
        <Column
          title="Quantity"
          render={(fav) => (
            <InputNumber
              min={1}
              max={10}
              defaultValue={fav.quantity}
              onChange={(value) => props.onIncMealQuantity(fav.favId, value)}
            />
          )}
          key="quantity"
        />
      </Table>
    </div>
  );
});

export default OrderTable;
