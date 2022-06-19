import React, { useEffect, useState } from 'react';
import styles from './index.module.less';
import store from '@/pages/List/store';

const Card = () => {
  const [state, stateDispatcher] = store.useModel('list');
  useEffect(() => {
    console.log('hello')
    stateDispatcher.getSeven();
  }, []);
  return (
    <div className={styles.container}>
     
    </div>
  );
};

export default Card;
