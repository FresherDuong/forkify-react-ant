import React from 'react';
import { Card, Col, Button, Tooltip, Badge } from 'antd';
import { HeartTwoTone, ProfileTwoTone } from '@ant-design/icons';
import styles from './CardCustomize.module.css';
import ButtonColored from './../ButtonColored/ButtonColored';

const { Meta } = Card;

const CardCustomize = (props) => {
  return (
    <Col xs={24} sm={24} md={12} lg={12} xl={8}>
      <Card
        title={props.mealTitle}
        className={styles.Card}
        style={{ width: 300 }}
        hoverable={true}
        bordered={true}
        cover={
          <img
            alt="meal-img"
            src={props.mealImage}
            style={{ height: '250px', width: '300px', objectFit: 'cover' }}
          />
        }
        actions={[
          <Tooltip title="Add to your favorites">
            <Button
              type="link"
              icon={<HeartTwoTone twoToneColor="#eb2f96" />}
              onClick={props.onAddToFav}
            />
          </Tooltip>,
          <ButtonColored onBtnClick={props.onOrderClicked}>
            Order
          </ButtonColored>,
          <Tooltip title="Show all ingredients">
            <Button
              type="link"
              icon={<ProfileTwoTone />}
              onClick={props.openModal}
            />
          </Tooltip>,
        ]}
        extra={
          <Badge
            count={`${props.mealPrice} $`}
            style={{ backgroundColor: '#52c41a' }}
          />
        }
      >
        <Meta
          title={`From: ${props.mealPublisher}`}
          description={`${props.publisherUrl}`}
        />
      </Card>
    </Col>
  );
};

export default CardCustomize;
