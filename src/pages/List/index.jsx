import React, { useEffect, useState } from 'react';
import List from './components/List';
import Card from './components/Card';
import styles from './index.module.less';
import store from '@/pages/List/store';

const Seven = () => {
  return (
    <div className={styles.ListContainer}>
      <Card />
      <List />
    </div>
  );
};

export default Seven;
