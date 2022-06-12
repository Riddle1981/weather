import React, { useEffect, useState } from 'react';
import { Button } from '@alifd/next';
import styles from './index.module.css';
import store from '@/pages/Home/store';

const Card = () => {
  const [state, stateDispatcher] = store.useModel('card');
  useEffect(() => {
    stateDispatcher.getWeather()
  }, [])
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.icon}>
          <img src={`/public/icon/1l.png`} alt="" />
          {/* <img src={`/public/icon/${state.weatherImg}${state.timeImg}.png`} alt="" /> */}
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
          <div className={styles.infoRight}>90%</div>
        </div>
        <div className={styles.infoBox}>
          <div className={styles.infoLeft}>风速</div>
          <div className={styles.infoRight}>19 km/h</div>
        </div>
      </div>
      <div className={styles.navBar}></div>
    </div>
  );
};

export default Card;
