import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { reloadKeepStore } from './store'

// 引入axios
// import lxRequest from './service'

// 初始化样式
import 'normalize.css'
import '@/assets/css/base.css'

// 按需引入element-plus
import { registerApp } from './global'
// 引入element-plus/icons  element-plus 2.0版本后图标引用的方式
// import icons from './global/globalIcon'

const app = createApp(App)

// app.use(icons)

app.use(registerApp)
app.use(router)
app.use(store)

// 防止刷新页面store被清空
reloadKeepStore()

app.mount('#app')

// interface DataType {
//   data: any
//   returnCode: string
//   success: boolean
// }

// lxRequest
//   .request<DataType>({
//     url: '/home/multidata',
//     method: 'GET',
//     interceptors: {
//       requestInterceptor: (config) => {
//         console.log('某个接口的请求拦截')
//         return config
//       },
//       requestInterceptorCatch: (err) => {
//         return err
//       },
//       responseInterceptor: (res) => {
//         console.log('某个接口的响应拦截')
//         return res
//       },
//       responseInterceptorCatch: (err) => {
//         return err
//       }
//     }
//   })
//   .then((res) => {
//     console.log(res.data, res.returnCode, res.success)
//   })
