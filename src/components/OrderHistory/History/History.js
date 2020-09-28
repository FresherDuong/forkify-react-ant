import React from 'react';
import { Table, Badge } from 'antd';
import ItemDetails from './../../ItemDetails/ItemDetails';

const { Column } = Table;

const data = [
  {
    key: '1',
    quantity: 5,
  },
  {
    key: '2',
    quantity: 2,
  },
  {
    key: '3',
    quantity: 1,
  },
];

const History = (props) => {
  return (
    <div>
      <Table
        bordered
        dataSource={data}
        pagination={false}
        scroll={{ x: 300 }}
        summary={() => (
          <Table.Summary.Row>
            <Table.Summary.Cell index={0}>Total price</Table.Summary.Cell>
            <Table.Summary.Cell index={1}>
              <Badge count="999.99 $" style={{ backgroundColor: '#f6b585' }} />
            </Table.Summary.Cell>
          </Table.Summary.Row>
        )}
      >
        <Column
          title="Your orders"
          render={() => <ItemDetails />}
          key="yourMeals"
        />
        <Column title="Quantity" key="quantity" dataIndex="quantity" />
      </Table>
    </div>
  );
};

export default History;
