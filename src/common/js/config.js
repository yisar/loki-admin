import axios from 'axios'

// 拦截请求

axios.interceptors.request.use((config)=>{
  console.log('loading……')
  return config
})

axios.interceptors.response.use((config)=>{
  console.log('hide……')
  return config
})
