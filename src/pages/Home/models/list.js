import axios from '@/utils/api';
const dic = {
  'xue': '5',
  "lei": '6',
  "shachen": "3",//大风
  "wu": "2",
  "bingbao": "5",//雪
  "yun": "2",
  "yu": "4",
  "yin": "2", //多云
  "qing": "1" // 晴
}

export default {
  state: {
    city: '',
    tem: '',
    date: '',
    time: '',
    win: '',
    wea: '',
    wea_img: '',
    win_meter: '',
    humidity: '',
    time_img: 'l',
    update_time: ''
  },
  reducers: {
    updateSeven(prevState, payload) {
      let { air, city, tem, wea, win, wea_img, update_time } = payload
      prevState = Object.assign(prevState, payload)
      prevState.wea_img = dic[wea_img]
      // prevState.city = payload
    }
  },
  effects: (dispatch) => ({
    getSeven() {
      axios
        .get('https://yiketianqi.com/api', {
          params: {
            // appid: '98461315',
            // appsecret: '5WK6Xbeq',
            appid: '23035354',
            appsecret: '8YvlPNrz',
            version: 'v1'
          },
        })
        .then((res) => {
          dispatch.card.updateSeven(res)
        });
    }
  })
}