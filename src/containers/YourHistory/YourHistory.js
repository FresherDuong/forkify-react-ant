import React from 'react';
import { Collapse } from 'antd';
import History from './../../components/History/History';

const { Panel } = Collapse;

const YourHistory = (props) => {
  return (
    <Collapse defaultActiveKey={['1']} onChange={() => {}}>
      <Panel header="Order ID: #67226 at 29/9/2020" key="1">
        <History />
      </Panel>
      <Panel header="Order ID: #67299 at 29/9/2020" key="2">
        <History />
      </Panel>
    </Collapse>
  );
};

export default YourHistory;
