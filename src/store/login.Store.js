
import {request} from '@/utils'
import {makeAutoObservable} from 'mobx'
import {getToken,setToken,removeToken} from '../utils/token'
class LoginStore {
    token = getToken() || ''
    constructor(){
        makeAutoObservable(this)
    }
     setToken = async ({mobile,code}) =>{
         console.log('qwee')
        try{
            console.log('setToken')        
            let res = await request({
                url:'http://geek.itheima.net/v1_0/authorizations',
                method:'POST',
                data:{
                 mobile,
                 code
                }
            })
             setToken(res.data.data.token)
        }catch(error){
            console.log(error)
        }
    }
    loginOut = ()=>{
        removeToken()
        this.token = ''
    }
}

export default LoginStore