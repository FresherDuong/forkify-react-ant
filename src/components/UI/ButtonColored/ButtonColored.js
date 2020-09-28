import React from 'react';
import styles from './ButtonColored.module.css';

const ButtonColored = (props) => {
  return (
    <button className={styles.btn} onClick={props.onBtnClick}>
      <span>{props.children}</span>
    </button>
  );
};

export default ButtonColored;
