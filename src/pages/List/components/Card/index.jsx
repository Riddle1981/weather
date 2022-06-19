import React, { useEffect, useState } from 'react';
import styles from './index.module.less';
import store from '@/store';
const { Provider } = store;

const Card = () => {
  const [state, stateDispatcher] = store.useModel('list');
  const [time, timeDispatcher] = useState({
    num: 0,
    timeText: '',
  });
  useEffect(() => {
    let date = new Date();
    let hour = date.getHours();
    let timeText = hour > 12 ? hour - 12 + 'pm' : hour + 'am';
    timeDispatcher({
      num: hour,
      timeText,
    });
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        {/* <img src={`/public/icon/${state.wea_img}l.png`} alt="" /> */}
        <img src={`/public/icon/${state.wea_img}${time.num > 21 ? 'd' : 'l' }.png`} alt="" />
      </div>
      <div className={styles.city}>{state.city}</div>
      <div className={styles.temperature}>
        <span className={styles.num}>{state.tem}</span>
        <span className={styles.sign}>°C</span>
      </div>
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
