import LXRequest from './request'

console.log(process.env.NODE_ENV, process.env)

// 假如项目中不同模块baseURL不同,可以创建多个实例,每个实例的请求和响应拦截器也可以自定义
const lxRequest = new LXRequest({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 5000,
  interceptors: {
    requestInterceptor: (config) => {
      console.log('某个实例的请求拦截')
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      console.log('某个实例的响应拦截')
      return res
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})

export default lxRequest
