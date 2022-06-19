import React, { useEffect, useState } from 'react';
import styles from './index.module.less';
import store from '@/store';
const { Provider } = store;

const List = () => {
  const [state, stateDispatcher] = store.useModel('list');
  function renderWeek() {
    return state?.weekList?.map((x) => {
      return (
        <div className={styles.weekBox}>
          <div className={styles.week}>{x.week}</div>
          <div className={styles.wea}>
            <img src={`https://riddle1981.github.io/weather/build/icon/${state.wea_img}l.png`} alt="" />
          </div>
          <div className={styles.tem}>
            <span>{x.tem}</span>
            <span className={styles.grey}>{x.tem1}</span>
          </div>
        </div>
      );
    })
  }

  return (
    <div className={styles.weekList}>
      {renderWeek()}
    </div>
  );
};

export default () => {
  return (
    <Provider>
      <List />
    </Provider>
  );
};
