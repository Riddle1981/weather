import React, { useEffect, useState } from 'react';
import List from './components/List';
import Card from './components/Card';
import Temp from './components/Temp';
import styles from './index.module.less';
import store from '@/store';
const { Provider } = store;

const Seven = () => {
  const [state, stateDispatcher] = store.useModel('list');
  useEffect(() => {
    stateDispatcher.getSeven();
  }, []);
  return (
    <div className={styles.ListContainer}>
      <Card />
      <Temp />
      <List />
    </div>
  );
};
export default () => {
  return (
    <Provider>
      <Seven />
    </Provider>
  );
};
