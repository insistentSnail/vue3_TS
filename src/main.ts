import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入axios
import lxRequest from './service'

interface DataType {
  data: any
  returnCode: string
  success: boolean
}

lxRequest
  .request<DataType>({
    url: '/home/multidata',
    method: 'GET'
    // interceptors: {
    //   requestInterceptor: (config) => {
    //     console.log('某个接口的请求拦截')
    //     return config
    //   },
    //   requestInterceptorCatch: (err) => {
    //     return err
    //   },
    //   responseInterceptor: (res) => {
    //     console.log('某个接口的响应拦截')
    //     return res
    //   },
    //   responseInterceptorCatch: (err) => {
    //     return err
    //   }
    // }
  })
  .then((res) => {
    console.log(res.data, res.returnCode, res.success)
  })

// 按需引入element-plus
import { registerApp } from './global'

const app = createApp(App)

app.use(registerApp).use(store).use(router).mount('#app')
