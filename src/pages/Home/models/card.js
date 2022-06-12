import axios from '@/utils/api';

export default {
  state: {
    weather: null
  },
  reducers: {},
  effects: (dispatch) => ({
    getWeather() {
      axios
        .get('https://www.tianqiapi.com/free/day', {
          params: {
            appid: '98461315',
            appsecret: '5WK6Xbeq',
          },
        })
        .then((res) => {
          console.log(res);
        });
    }
  })
}