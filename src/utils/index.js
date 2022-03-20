//先把所有的工具函数导出的模块在这里导入
//为什么要这样做  以后需要用的时候 import { } from '@/utils' 就行
import {request} from './http'
import {setToken,removeToken,getToken} from './token'

export {
    request,
    setToken,
    removeToken,
    getToken
}