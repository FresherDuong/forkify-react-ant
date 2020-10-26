import React from 'react';
import { Table, Badge } from 'antd';
import ItemDetails from './../ItemDetails/ItemDetails';

const { Column } = Table;

const History = (props) => {
  return (
    <div>
      <Table
        bordered
        dataSource={props.hisData}
        pagination={false}
        scroll={{ x: 300 }}
        summary={() => (
          <Table.Summary.Row>
            <Table.Summary.Cell index={0}>Total price</Table.Summary.Cell>
            <Table.Summary.Cell index={1}>
              <Badge
                count={`${props.totalPrice} $`}
                style={{ backgroundColor: '#f6b585' }}
              />
            </Table.Summary.Cell>
          </Table.Summary.Row>
        )}
      >
        <Column
          title="Your orders"
          dataIndex="mealInfo"
          render={(mealInfo) => (
            <ItemDetails
              favImg={mealInfo.favImg}
              favTitle={mealInfo.favTitle}
              favPublisher={mealInfo.favPublisher}
              favPrice={mealInfo.favPrice}
            />
          )}
          key="yourMeals"
        />
        <Column title="Quantity" key="quantity-col" dataIndex="quantity" />
      </Table>
    </div>
  );
};

export default History;
