import LoginActionType from './login.type'

export const toggleLoginModalDisplay=()=>{
    return({
    type: LoginActionType.TOGGLE_LOGIN_MODAL_DISPLAY,
})
}

export const loginUserStart=(email,password)=>{
    return({
        type:LoginActionType.LOGIN_USER_START,
        email:email,
        password:password
    })
}

export const loginUserSuccess=(loginData)=>{
    return({
        type:LoginActionType.LOGIN_USER_SUCCESS,
        loginData:loginData
    })
}

export const loginUserFail=(error)=>{
    return({
        type:LoginActionType.LOGIN_USER_FAIL,
        error: error.response.status +' '+ error.response.statusText
    })
}