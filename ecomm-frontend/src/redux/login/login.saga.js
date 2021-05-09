import LoginActionType from './login.type'
import {takeEvery,put,call} from 'redux-saga/effects';
import {loginUserSuccess,loginUserFail} from './login.action';
import {loginUserFromBackend} from '../../backendLogic/loginUser'
import axios from 'axios';


function* loginUserStartAsync({type,email,password}){
    try{
        const data=yield loginUserFromBackend(email,password);
        //console.log(data)
        yield put(loginUserSuccess(data));
    }
    catch(error){
        //console.log(error.statusCode)
        yield put(loginUserFail(error));
    }
    
    
}
export function* loginUserStart(){
    yield takeEvery(LoginActionType.LOGIN_USER_START, loginUserStartAsync)
}
