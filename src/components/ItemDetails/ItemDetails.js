import React from 'react';
import styles from './ItemDetail.module.css';
import { Badge } from 'antd';

const ItemDetails = (props) => {
  return (
    <div className={styles.YourFavorite}>
      <a className={styles.likes__link} href="#35169">
        <figure className={styles.likes__fig}>
          <img
            src="https://f2fapi.herokuapp.com/image-crawled/Buffalo2BChicken2BChowder2B5002B0075c131caa8.jpg"
            alt="Buffalo Chicken..."
          />
        </figure>
        <div className={styles.likes__data}>
          <h4 className={styles.likes__name}>Buffalo Chicken...</h4>
          <p className={styles.likes__author}>Closet Cooking</p>
          <Badge count="9.99 $" style={{ backgroundColor: '#52c41a' }} />
        </div>
        {props.children}
      </a>
    </div>
  );
};

export default ItemDetails;
