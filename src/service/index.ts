import LXRequest from './request'

console.log(process.env.NODE_ENV, process.env)
const lxRequest = new LXRequest({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 5000,
  interceptors: {
    requestInterceptor: (config) => {
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})

export default lxRequest
