
import LoginStore from "./login.Store";
import UserStort from './user.Store'
import React from 'react'

class RootStore {
    constructor(){
        this.loginStore = new LoginStore()
        this.userStore = new UserStort()
    }
}

const context = React.createContext(new RootStore())
const useStore = () => React.useContext(context)

export default useStore