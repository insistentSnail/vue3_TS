import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入axios
import lxRequest from './service'

lxRequest.request({
  url: '/home/multidata',
  method: 'GET'
})

// 按需引入element-plus
import { registerApp } from './global'

const app = createApp(App)

app.use(registerApp).use(store).use(router).mount('#app')
