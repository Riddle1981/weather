import React, { useEffect, useState } from 'react';
import { ResponsiveGrid } from '@alifd/next';
import List from './components/List';
import styles from './index.module.less';
import store from '@/pages/List/store';

const Seven = () => {
  return (
    <div className={styles.homeContainer}>
      <List />
    </div>
  );
};

export default Seven;
