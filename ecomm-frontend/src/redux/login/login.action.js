import LoginActionType from './login.type'

export const toggleLoginModalDisplay=()=>{
    return({
    type: LoginActionType.TOGGLE_LOGIN_MODAL_DISPLAY,
})
}