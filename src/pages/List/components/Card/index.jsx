import React, { useEffect, useState } from 'react';
import styles from './index.module.less';
import store from '@/store';
import { Link, useHistory } from 'ice';
const { Provider } = store;

const Card = () => {
  const [state, stateDispatcher] = store.useModel('list');
  const history = useHistory();
  console.log('sc', state);
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
        <img src={`/public/icon/${state.wea_img}${time.num > 21 ? 'd' : 'l'}.png`} alt="" />
      </div>
      <div
        className={styles.back}
        onClick={() => {
          history.push('/card');
        }}
      >
        {/* <img src={`/public/icon/${state.wea_img}l.png`} alt="" /> */}
        <img src={`/public/icon/back.png`} alt="" />
      </div>
      <div className={styles.city}>{state.city}</div>
      <div className={styles.temperature}>
        <span className={styles.num}>{state.tem}</span>
        <span className={styles.sign}>°C</span>
      </div>
      <div className={styles.info}>
        <div className={styles.infoBox1}>
          <div className={styles.infoIcon}>
            <img src="/public/icon/jsl.png" alt="" />
          </div>
          {/* <div className={styles.infoLeft}>降水量</div> */}
          <div className={styles.infoRight}>6%</div>
        </div>
        <div className={styles.infoBox2}>
          <div className={styles.infoIcon}>
            <img src="/public/icon/humidity.png" alt="" />
          </div>
          {/* <div className={styles.infoLeft}>湿度</div> */}
          <div className={styles.infoRight}>{state.humidity}</div>
        </div>
        <div className={styles.infoBox3}>
          <div className={styles.infoIcon}>
            <img src="/public/icon/wind.png" alt="" />
          </div>
          {/* <div className={styles.infoLeft}>风速</div> */}
          <div className={styles.infoRight}>{state.win_meter}</div>
        </div>
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
