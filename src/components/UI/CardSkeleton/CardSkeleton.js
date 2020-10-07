import React from 'react';
import { Col, Card } from 'antd';
// import styles from './CardSkeleton.module.css';

const CardSkeleton = () => {
  return (
    <React.Fragment>
      <Col xs={24} sm={24} md={12} lg={12} xl={8}>
        <Card style={{ width: 300, margin: '0px auto' }} loading={true}></Card>
      </Col>
      <Col xs={24} sm={24} md={12} lg={12} xl={8}>
        <Card style={{ width: 300, margin: '0px auto' }} loading={true}></Card>
      </Col>
      <Col xs={24} sm={24} md={12} lg={12} xl={8}>
        <Card style={{ width: 300, margin: '0px auto' }} loading={true}></Card>
      </Col>
    </React.Fragment>
  );
};

export default CardSkeleton;
