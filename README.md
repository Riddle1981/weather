### 天气App


#### 样式适配方案
样式适配由rem完成
- px转rem
- rem跟随窗口变化
> npm：https://www.npmjs.com/package/postcss-pxtorem

#### 网络请求方案
使用axios封装，封装内容包含以下部分

- 请求拦截器，用于防止请求未返回时相同请求发出，适用于慢网情况下按钮多次点击引起的请求重复发送
- 响应拦截器，处理统一错误，格式统一。如有错误、数据上报加于此处


#### 通信机制
使用redux进行通信

- 页面内使用store共享数据
- 组件使用models来进行数据处理
- 数据存在于state，仅使用reduce更新state
- effect在useEffect中调用

#### 第三方API选用
> http://doc.tianqiapi.com/1631612
