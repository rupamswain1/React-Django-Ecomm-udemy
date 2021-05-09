import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux';

import InputTextBox from '../../components/inputTextBox/inputTextBox.component';
import './LoginModal.style.scss';
import Button from '../../components/button/Button.component'
import {toggleLoginModalDisplay,loginUserStart} from '../../redux/login/login.action';
import Spinner from '../../components/spinner/Spinner.component'
const LoginModal=()=>{
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const {error,isLoading}=useSelector(state=>state.LoginReducer);
    let tempEmail='';
    const updateCredentials=event=>{
        let targetName=event.target.name;
        
        if (targetName==='Email'){
            
            setEmail(event.target.value);
        }
        else if (targetName==='Password'){
            setPassword(event.target.value);
        }
    }
    const dispatch = useDispatch();
    return (
        
            <div className='loginModalContainer'>
                <div className='loginModalCloseContainer'>
                    <div className='closeLoginContainerButton' onClick={()=>dispatch(toggleLoginModalDisplay())}>
                        &times;
                    </div>
                </div>            
                <div className='loginFieldsContainer'>
                    <span className='signInText'>Sign-In</span>
                    {error?<div className='errorMessage'><span>{error}</span></div>:''}
                    
                    <InputTextBox key='Email'  value={email} placeHolder='Email' type='text' handleChange={updateCredentials}/>
                    <InputTextBox key='password' value={password} placeHolder='Password' type='password' handleChange={updateCredentials}/>
                    <Button key='loginButton' text='Login' displayType='primary' enabled={!isLoading} onClickMethod={()=>dispatch(loginUserStart(email,password))}/>
                    
                    </div>
                <div className='registerUserLinkContainer'></div>
            </div>
        
        
    )
}
export default LoginModal;