import {makeAutoObservable} from 'mobx'
// import {request} from '@/utils'
class UserStore {
    userInfo = {}
    constructor(){
        makeAutoObservable(this)
    }
    async getUserInfo(){
        try{
            // let res = await request({
            //     method:"GET",
            //     url:'/user/profile'
            // })
            this.userInfo = {username:'huba'}
        }catch(error){

        }
    }
}
export default UserStore