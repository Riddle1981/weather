import React, { useEffect, useState } from 'react';
import styles from './index.module.less';
import store from '@/store';
const { Provider } = store;

const Card = () => {
  const [state, stateDispatcher] = store.useModel('list');
  useEffect(() => {
    stateDispatcher.getSeven();
  }, []);
  return (
    <div className={styles.container}>
     
    </div>
  );
};

export default () => {
  return (
    <Provider>
      <Card />
    </Provider>
  );
};
