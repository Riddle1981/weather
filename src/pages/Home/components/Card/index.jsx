import React, { useEffect, useState } from 'react';
import { Button } from '@alifd/next';
import styles from './index.module.less';
import store from '@/store';
const { Provider } = store;

const Card = () => {
  const [state, stateDispatcher] = store.useModel('card');
  const [time, timeDispatcher] = useState({
    num: 0,
    timeText: ''
  })
  useEffect(() => {
    let date = new Date()
    let hour = date.getHours()
    let timeText = hour > 12 ? hour - 12 + 'pm' : hour + 'am'
    timeDispatcher({
      num: hour,
      timeText
    })
    stateDispatcher.getWeather();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.icon}>
          {/* <img src={`/public/icon/1l.png`} alt="" /> */}
          <img src={`/public/icon/${state.wea_img}l.png`} alt="" />
          {/* <img src={`/public/icon/${state.wea_img}${time.num > 12 ? 'l' : 'd' }.png`} alt="" /> */}
        </div>
        <div className={styles.city}>{state.city}</div>

        <div className={styles.cardContent}>
          <div className={styles.leftBox}>
            <div className={styles.temperature}>
              <span className={styles.num}>{state.tem}</span>
              <span className={styles.sign}>°C</span>
            </div>

            <div className={styles.timeInfo}>
              <span className={styles.date}>{state.week},</span>
              <span className={styles.time}>{time.timeText}</span>
            </div>
          </div>
          <div className={styles.rightBox}>
            <div className={styles.wind}>{state.wea}</div>
            <div className={styles.cloud}>{state.win}</div>
          </div>
        </div>
        <div className={styles.button}>详情</div>
      </div>
      <div className={styles.info}>
        <div className={styles.infoBox}>
          <div className={styles.infoLeft}>降水量</div>
          <div className={styles.infoRight}>6%</div>
        </div>
        <div className={styles.infoBox}>
          <div className={styles.infoLeft}>湿度</div>
          <div className={styles.infoRight}>{state.humidity}</div>
        </div>
        <div className={styles.infoBox}>
          <div className={styles.infoLeft}>风速</div>
          <div className={styles.infoRight}>{state.win_meter}</div>
        </div>
      </div>
      <div className={styles.navBar}></div>
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
