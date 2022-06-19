import React, { useEffect, useState } from 'react';
import styles from './index.module.less';
import store from '@/store';
import { AreaChart } from 'bizcharts';
const { Provider } = store;

const Card = () => {
  const [state, stateDispatcher] = store.useModel('list');
  console.log('data h', state.hours);
  // useEffect(() => {

  // }, []);
  return (
    <div className={styles.container}>
      <div className={styles.today}>Today</div>
      <div className={styles.chart}>
        <AreaChart
          data={state.hours}
          autoFit
          xField="hours"
          yField="tem"
          areaStyle={{
            fill: '#F8F0D1',
            stroke: '#E4C856',
          }}
          smooth={true}
          line={{
            visible: false,
          }}
          xAxis={{
            visible: true,
            // grid: {
            //   visible: false,
            // },
            // line: {
            //   visible: false,
            // },
            // tickLine: {
            //   visible: false,
            // },
            label: {
              visible: true,
              // autoRotate: true,
              autoHide: true,
            },
          }}
          yAxis={{
            visible: false,
          }}
        />
      </div>
      <div className={styles.temp}>
        <div className={styles.tempBox}>
          <div className={styles.num}>{`${state.hours[0]?.tem}°C`}</div>
          <div className={styles.time}>{`${state.hours[0]?.hours}`}</div>
        </div>
        <div className={styles.tempBox}>
          <div className={styles.num}>{`${state.hours[13]?.tem}°C`}</div>
          <div className={styles.time}>{`${state.hours[13]?.hours}`}</div>
        </div>
        <div className={styles.tempBox}>
          <div className={styles.num}>{`${state.hours[23]?.tem}°C`}</div>
          <div className={styles.time}>{`${state.hours[23]?.hours}`}</div>
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
