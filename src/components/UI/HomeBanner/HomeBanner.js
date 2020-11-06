import React from 'react';
import styles from './HomeBanner.module.css';

const HomeBanner = React.memo((props) => {
  console.log('[HomeBanner] rendered');
  return (
    <h1 className={styles.recipe__title}>
      <span>{props.children}</span>
    </h1>
  );
});

export default HomeBanner;
