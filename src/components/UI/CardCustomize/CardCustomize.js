import React, { useState } from 'react';
import {
  Card,
  Col,
  Image,
  Modal,
  Button,
  Tooltip,
  Badge,
  Timeline,
} from 'antd';
import { HeartTwoTone, ProfileTwoTone } from '@ant-design/icons';
import styles from './CardCustomize.module.css';
import ButtonColored from './../ButtonColored/ButtonColored';

const { Meta } = Card;

const CardCustomize = (props) => {
  const [modalEnable, setModalEnable] = useState(false);

  const openModal = () => {
    setModalEnable(true);
  };

  const closeModal = () => {
    setModalEnable(false);
  };

  return (
    <Col xs={24} sm={24} md={12} lg={12} xl={8}>
      <Card
        title="PATTY MELTS"
        className={styles.Card}
        style={{ width: 300 }}
        hoverable={true}
        bordered={true}
        cover={
          <Image
            alt="example"
            src="https://f2fapi.herokuapp.com/image-crawled/387114468_aafd1be3404a2f.jpg"
          />
        }
        actions={[
          <Tooltip title="Add to your favorites">
            <Button
              type="link"
              icon={<HeartTwoTone twoToneColor="#eb2f96" />}
            />
          </Tooltip>,
          <ButtonColored onBtnClick={props.onOrderClicked}>
            Order
          </ButtonColored>,
          <Tooltip title="Show all ingredients">
            <Button type="link" icon={<ProfileTwoTone />} onClick={openModal} />
          </Tooltip>,
        ]}
        extra={<Badge count="9.99 $" style={{ backgroundColor: '#52c41a' }} />}
      >
        <Meta description="From: Closet Cooking" />
      </Card>
      <Modal
        title="PATTY MELTS DETAIL"
        centered
        visible={modalEnable}
        onOk={closeModal}
        onCancel={closeModal}
      >
        <Timeline>
          <Timeline.Item>2 Tablespoons Butter"</Timeline.Item>
          <Timeline.Item>
            2 whole Large Onions, Halved And Sliced Thin
          </Timeline.Item>
          <Timeline.Item>1/4 cup Beef Broth</Timeline.Item>
          <Timeline.Item>7 dashes Worcestershire Sauce</Timeline.Item>
          <Timeline.Item>Splash Of Red Or White Wine</Timeline.Item>
          <Timeline.Item>
            1/2 cup Grated Gruyere Cheese (can Use Swiss)
          </Timeline.Item>
          <Timeline.Item>Kosher Salt</Timeline.Item>
          <Timeline.Item>
            24 whole White Or Crimini Mushrooms, Washed And Stems Removed
          </Timeline.Item>
        </Timeline>
        <Badge
          count="Top 100 cuisines in Forkify"
          style={{ backgroundColor: '#f6b585' }}
        />
        <Badge count="ID: 47078" style={{ backgroundColor: '#87d068' }} />
      </Modal>
    </Col>
  );
};

export default CardCustomize;
