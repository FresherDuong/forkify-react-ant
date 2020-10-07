import React from 'react';
import styles from './ItemDetail.module.css';
import { Badge } from 'antd';

function truncate(str, n) {
  return str.length > n ? str.substr(0, n - 1) + '...' : str;
}

const ItemDetails = (props) => {
  return (
    <div className={styles.YourFavorite}>
      <a className={styles.likes__link} href="#your-favorites">
        <figure className={styles.likes__fig}>
          <img src={props.favImg} alt="favorite-meal" />
        </figure>
        <div className={styles.likes__data}>
          <h4 className={styles.likes__name}>{truncate(props.favTitle, 15)}</h4>
          <p className={styles.likes__author}>{props.favPublisher}</p>
          <Badge
            count={`${props.favPrice} $`}
            style={{ backgroundColor: '#52c41a' }}
          />
        </div>
        {props.children}
      </a>
    </div>
  );
};

export default ItemDetails;
