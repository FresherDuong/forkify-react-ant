import React from 'react';
import { Table, InputNumber } from 'antd';
import YourFavorite from './../../components/YourFavorite/YourFavorite';

const { Column } = Table;
const data = [
  {
    key: '1',
  },
  {
    key: '2',
  },
  {
    key: '3',
  },
];

const OrderTable = (props) => {
  return (
    <div>
      <Table dataSource={data} pagination={false} scroll={{ x: 300 }}>
        <Column
          title="Your favorites"
          render={() => <YourFavorite />}
          key="yourFavorites"
        />
        <Column
          title="Quantity"
          key="quantity"
          render={() => (
            <InputNumber
              min={1}
              max={10}
              defaultValue={1}
              onChange={() => {}}
            />
          )}
        />
      </Table>
    </div>
  );
};

export default OrderTable;
