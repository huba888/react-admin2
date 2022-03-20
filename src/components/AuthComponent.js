
import {getToken} from '@/utils'
import {Navigate} from 'react-router-dom'
function AuthComponent ({children}) {
    let token = getToken()
    if(token){
        return (<>{children}</>)
    }else{
        return <Navigate to="/login" replace/>
    }
}
export default AuthComponent