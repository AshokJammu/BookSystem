import {REGISTER_USER_FAILURE, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS,REGISTER_PASSWORD_FAILURE,REGISTER_PASSWORD_SUCCESS,REGISTER_PASSWORD_REQUEST} from './actionType'
// import axios from 'axios'

export const registerUserRequest = payload => ({
    type: REGISTER_USER_REQUEST
})

export const registerUserSuccess = payload => ({
    type: REGISTER_USER_SUCCESS,
    payload
})

export const registerUserFailure = payload => ({
    type: REGISTER_USER_FAILURE,
    payload
})
export const registerUserData = payload => dispatch => {
    // console.log(payload)
    dispatch(registerUserRequest(payload))
    let {mode,password,email} = payload 
    // var mode = payload.mode
    var axios = require('axios');
        var data = JSON.stringify({"email": email, "password": password});
    
        var config = {
            method: 'post',
            url: 'http://localhost:3000/users',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };
    
        axios(config)
            .then(res => res.data)
            .then(res => dispatch(registerUserSuccess(res)))
            .catch(err => dispatch(registerUserFailure(err)));
}
