import {
    LOGIN_USER_FAILURE,
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS
} from './actionType';
 
const initState = {
    isAuth: false,
    isLogin:false,
    loginData:"",
    token:"",
    userData:"",
    userEmail:"",
    userToken:"",
    userName:""
}

const loginReducer = (state = initState, action)=>{
    switch(action.type){
        case LOGIN_USER_REQUEST:
            return {
                ...state,
            }
        case LOGIN_USER_SUCCESS:
            return{
                    ...state,
                    message: action.payload._id,
                    userEmail:action.payload.mail,
                    isLogin:action.payload.status
                }
        case LOGIN_USER_FAILURE:
            return{
                ...state,
                isLogin:action.payload.status,
             }
        default:
            return {...state}
    }
}

export default loginReducer