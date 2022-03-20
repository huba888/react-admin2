import axios from 'axios'
import {getToken} from '@/utils'
import history from './history'
const request = axios.create({
    baseURL:'http://geek.itheima.net/v1_0',
    timeout:5000
})

//添加请求拦截器
request.interceptors.request.use((config)=>{
    const token = getToken()
    if(token){
        config.headers.Authorization = token
    }
    return config
},(error)=>{
    return Promise.reject(error)
})
//响应拦截器
request.interceptors.response.use((response)=>{
    if(response.data.code === 401){
        history.push('/login')
    }
    return response
},(error)=>{
    return Promise.reject(error)
})

export {request}