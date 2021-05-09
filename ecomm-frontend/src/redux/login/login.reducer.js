import LoginActionType from './login.type'

const INITIAL_STATE={
    loginModalDisplay:false,
    isAuthenticated:false,
    loginData:null,
    error:null,
    isLoading:false,
}

export const LoginReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case LoginActionType.TOGGLE_LOGIN_MODAL_DISPLAY:
            //console.log(!(state.loginModalDisplay))
            return{
                ...state,
                loginModalDisplay:!(state.loginModalDisplay),
                error:null
            }
        case LoginActionType.LOGIN_USER_START:
            return{
                ...state,
                isLoading:true,
            }
        case LoginActionType.LOGIN_USER_SUCCESS:
            return{
                ...state,
                isAuthenticated:true,
                loginData:action.loginData,
                loginModalDisplay:!(state.loginModalDisplay),
                isLoading:false,
            }
        case LoginActionType.LOGIN_USER_FAIL:
            let msg='';
            console.log(action.error)
            if(action.error.includes('401')){
                msg='Email or Password is incorrect, please check your credentials'
            }
            else if(action.error.includes('500')){
                msg='server encounterd a problem, please try again'
            }
            return{
                ...state,
                error:msg,
                isLoading:false,
            }
        default:
            return state;
    }
}