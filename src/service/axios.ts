import axios from 'axios'

axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
  console.log(res)
})

axios.interceptors.request.use(
  (config) => {
    console.log('请求发送成功的拦截')
    return config
  },
  (err) => {
    console.log('请求发送失败的拦截')
    return err
  }
)

axios.interceptors.response.use(
  (res) => {
    console.log('请求响应成功的拦截', 'status 20X')
    return res.data
  },
  (err) => {
    console.log('请求响应失败的拦截')
    return err
  }
)
