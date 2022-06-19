import React, { useEffect, useState } from 'react';
import { ResponsiveGrid } from '@alifd/next';
import Card from './components/Card';
import styles from './index.module.less';
import store from '@/store';
const { Provider } = store;

const Home = () => {
  const [state, stateDispatcher] = store.useModel('list');
  useEffect(() => {
    stateDispatcher.getSeven();
  }, []);
  return (
    <div className={styles.homeContainer}>
      <div className={styles.logo}>
        <img src="/public/icon/logo.png" alt="" />
      </div>
      <Card />
    </div>
  );
};

export default () => {
  return (
    <Provider>
      <Home />
    </Provider>
  );
};
