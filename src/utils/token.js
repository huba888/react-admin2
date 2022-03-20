
const key = 'token'
const getToken = () => {
    return window.localStorage.getItem(key)
}

const setToken = (value)=>{
    return window.localStorage.setItem(key,value)
}

const removeToken = () => {
    return window.localStorage.removeItem(key)
}

export {getToken,setToken,removeToken}