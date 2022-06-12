import axios from 'axios'
import qs from 'qs'

const errorHandler = err => {
  return Promise.reject(err)
}

// 创建实例时设置配置的默认值
const instance = axios.create({
  timeout: 10000, // 设置超时10s
  withCredentials: false, // 跨域时是否发送cookie
  // headers: {
  //   'content-type': 'application/json',
  // }
})

axios.cancels = Object.create(null)

// 添加请求拦截器
// 将数据字符串化
instance.interceptors.request.use(config => {
  // console.log(config, 'axios config')
  // if (config.method === 'post' && !config.notStringify) {
  //   config.data = qs.stringify(config.data)
  // }
  // console.log(config.data, 'axios data')
  const cancelGroupName = config.cancelGroupName
  // 请求唯一性
  if (cancelGroupName) {
    if (axios.cancels[cancelGroupName] && axios.cancels[cancelGroupName].cancel) {
      axios.cancels[cancelGroupName].cancel(
        `${config.url} is still pending, the request has been canceled`
      )
    }
    config.cancelToken = new axios.CancelToken(c => {
      axios.cancels[cancelGroupName] = { cancel: c }
    })
  }
  return config
}, errorHandler)

// 添加响应拦截器
instance.interceptors.response.use(res => {
  // then中状态值正常且数据存在，不符合需求的信息也会在报错中抛出，可根据业务需求处理
  // 数据不存在进行空数据错误抛出，可在参数中获取完整请求信息
  // 数据状态不为1时，data为提示信息则返回data，否则抛出网络异常错误
  if (res.status === 200) {
    const { stat, data } = res.data
    let resData = data
    if (stat) {
      if (!data) {
        return Promise.reject({
          msg: '暂无数据，请稍后再试～',
          res
        })
      } else if (typeof data === 'string' && /{/.test(data)) {
        try {
          // 只将请求结果的data字段返回(JSON格式处理)
          resData = JSON.parse(data)
        } catch (e) {
          resData = data
        }
      } else {
        resData = res.data
      }
    } else {
      const info = data && typeof data === 'string'
        ? data
        : '网络异常，请稍后再试～'
      return Promise.reject({
        msg: info,
        res
      })
    }
    return resData
  }
}, errorHandler)

export default instance
