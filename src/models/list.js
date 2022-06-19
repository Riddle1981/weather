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
    update_time: '',
    weekList: [],
    hours: []
  },
  reducers: {
    updateWeather(prevState, payload) {
      let { air, city, tem, wea, win, wea_img, update_time, hours} = payload
      prevState = Object.assign(prevState, payload)
      prevState.wea_img = dic[wea_img]
      prevState.hours = hours.map(x => {
        return {
          hours: x.hours,
          tem: x.tems
        }
      })
      prevState.tem = tem.replace('℃', '')
      // console.log(prevState, 'payload')
    },
    updateSeven(prevState, payload) {
      let data = payload?.map(x => {
        return {
          tem: x.tem,
          tem1: x.tem1,
          week: x.week,
          wea_img: dic[x.wea_img]
        }
      })
      prevState.weekList = data
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
          dispatch.list.updateWeather(res.data?.[0])
          dispatch.list.updateSeven(res.data)
        });
    }
  })
}