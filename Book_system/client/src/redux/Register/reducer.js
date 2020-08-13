import {
    REGISTER_USER_FAILURE,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_PASSWORD_FAILURE,
    REGISTER_PASSWORD_SUCCESS,
    REGISTER_PASSWORD_REQUEST,
  } from "./actionType";
  
  const initState = {
    isAuth: false,
    isRegister: false,
    registerData: "",
    message: "",
    userData: "",
    userEmail: "",
    userToken: "",
    userName: ""
  };
  
  const reducer = (state = initState, action) => {
    switch (action.type) {
      case REGISTER_USER_REQUEST:
        return {
          ...state,
        };
  
      case REGISTER_USER_SUCCESS: 
          return {
            ...state,
            userData:action.payload,
            token: action.payload._id,
            userEmail: action.payload.msg,
            isRegister: action.payload.status  
          }
      case REGISTER_USER_FAILURE:
        return {
          ...state,
        //   message: action.payload.msg,
          isRegister: action.payload.status
        };
      default:
        return { ...state };
    }
  };  
  
  export default reducer;
  