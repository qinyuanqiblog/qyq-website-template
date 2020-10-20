import axios from 'axios'
// import store from '@/store'
// import { Toast } from 'vant'
// import VueEnv from '../../vue-env'
// create an axios instance
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // 个人不喜欢维护.env 等文件，所以就把他们都丢到一个js文件里面去做处理
  baseURL: '', // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 10000, // request timeout
})

let requestCount = 0

// request interceptor
service.interceptors.request.use(
  config => {
    // 有这个字段显示转圈圈
    const { loadingFlag = true } = config.headers || {}
    // console.log('loadingFlag', loadingFlag)
    if (loadingFlag) {
      // Toast.loading({
      //   duration: 0,
      //   message: '加载中...',
      //   forbidClick: true,
      // })
    }
    requestCount++

    // axios 配置 https://www.kancloud.cn/yunye/axios/234845
    // 删除这个标识，不上传给后台
    delete config.headers.loadingFlag
    config.validateStatus = function(status) {
      // return status >= 200 && status < 300; // 默认的
      return (status >= 200 && status < 300) || status == 400
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    requestCount--
    const res = response.data
    if (res.status === 400) {
      // Toast({
      //   duration: 4000,
      //   message: '参数错误',
      //   icon: 'close',
      // })
      return Promise.reject(res)
    }
    // if the custom code is not 20000, it is judged as an error.
    if (parseInt(res.code) !== 0) {
      if (typeof res.errorDesc === 'string' && res.errorDesc.length > 10) {
        // Toast(res.errorDesc)
      } else {
        // Toast({
        //   duration: 4000,
        //   message: res.errorDesc || '系统繁忙，请稍候再试~',
        //   icon: 'close',
        // })
      }
      const { config = {} } = response || {}
      const error = {
        data: response.data,
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
        config: {
          url: config.url,
          method: config.method,
          data: config.data,
          headers: config.headers,
        },
      }
      return Promise.reject(error)
    } else {
      if (requestCount <= 0) {
        // Toast.clear()
      }
      if (Object.keys(res).includes('data')) {
        return res.data
      } else {
        return res
      }
    }
  },
  (error = {}) => {
    requestCount--
    // 请求超时 和 后台http 状态码不是 200 304 400 的时候就走这里
    console.log('%c xhr response error ==> ', 'color:red', error) // for debug
    if (requestCount <= 0) {
      // Toast.clear()
    }
    console.log('%c error.config.url ==>', 'color:red', error.config.url)
    console.log(
      '%c common/recordActionLog.json ==>',
      'color:red',
      error.config.url.indexOf('common/recordActionLog.json') !== -1
    )
    // 20200416 苹果机 在详情页点打招呼去聊天，一直重复点，axios会取消请求，抓包又是请求已经发出去了，找不到问题，就这么搞咯,因为那里只调用了埋点的接口，就这么处理，如果调用了别的接口， 应该就gg 了
    if (error.config.url && error.config.url.indexOf('common/recordActionLog.json') !== -1) {
      console.log('日志接口不报错~')
    } else if (typeof error.errorDesc === 'string' && error.errorDesc.length > 10) {
      // Toast(error.errorDesc)
    } else {
      // Toast({
      //   duration: 4000,
      //   message: error.errorDesc || '系统繁忙，请稍候再试~',
      //   icon: 'close',
      // })
    }

    return Promise.reject(error)
  }
)

export default service
