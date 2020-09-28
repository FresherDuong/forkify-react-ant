import React from 'react';
import { Row, Col } from 'antd';
import {
  FacebookFilled,
  InstagramFilled,
  GithubFilled,
} from '@ant-design/icons';
import styles from './AppFooter.module.css';
import logo from './../../assets/img/logo.png';

const AppFooter = (props) => {
  return (
    <footer>
      <Row>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <ul className={styles.footer_nav}>
            <li>
              <a href="/">Kien An District, Hai Phong</a>
            </li>
            <li>
              <a href="/">iOS App</a>
            </li>
            <li>
              <a href="/"> Android App</a>
            </li>
          </ul>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <ul className={styles.social_links}>
            <li>
              <a href="/">duongyolo@gmail.com</a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/duong.dudinh/"
                className={styles.logo_facebook}
              >
                <FacebookFilled />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/dudinhduong/"
                className={styles.logo_facebook}
              >
                <GithubFilled />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/FresherDuong"
                className={styles.logo_facebook}
              >
                <InstagramFilled />
              </a>
            </li>
          </ul>
        </Col>
      </Row>

      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <img src={logo} alt="app-logo" />
          <p>
            Copyright &copy; 2020 by Duong Dinh using ReactJS and Ant design.
            All rights reserved.
          </p>
        </Col>
      </Row>
    </footer>
  );
};

export default AppFooter;
