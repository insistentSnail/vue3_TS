import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface LXRequestHook {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (config: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

export interface LXRequestConfig extends AxiosRequestConfig {
  interceptors?: LXRequestHook
  headers?: any
}
