import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface LXRequestHook<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  // responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface LXRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: LXRequestHook<T>
  headers?: any
  showLoading?: boolean
}
