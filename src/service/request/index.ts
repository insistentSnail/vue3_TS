import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { LXRequestHook, LXRequestConfig } from './type'

class LXRequest {
  instance: AxiosInstance
  interceptors?: LXRequestHook

  constructor(config: LXRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 添加所有实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('所有实例的请求拦截')
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        console.log('所有实例的响应拦截')
        return res.data
      },
      (err) => {
        return err
      }
    )
  }
  request(config: LXRequestConfig): void {
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config)
    }
    this.instance.request(config).then((res) => {
      if (config.interceptors?.responseInterceptor) {
        res = config.interceptors.responseInterceptor(res)
      }
    })
  }
}
export default LXRequest
