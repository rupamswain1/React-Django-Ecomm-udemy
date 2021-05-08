import LoginActionType from './login.type'

const INITIAL_STATE={
    loginModalDisplay:false,
}

export const LoginReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case LoginActionType.TOGGLE_LOGIN_MODAL_DISPLAY:
            //console.log(!(state.loginModalDisplay))
            return{
                ...state,
                loginModalDisplay:!(state.loginModalDisplay)
            }
        default:
            return state;
    }
}