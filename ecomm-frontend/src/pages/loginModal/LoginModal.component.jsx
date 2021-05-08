import React from 'react'
import {useDispatch} from 'react-redux';

import InputTextBox from '../../components/inputTextBox/inputTextBox.component';
import './LoginModal.style.scss';
import Button from '../../components/button/Button.component'
import {toggleLoginModalDisplay} from '../../redux/login/login.action';
const LoginModal=()=>{
    var abc='';
    const valueUpdate=event=>{
        abc=abc+event.target.value;
        console.log(abc)
        console.log(event.target.name)
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
                    <InputTextBox key='Email'  value={abc} placeHolder='Email' type='text' handleChange={valueUpdate}/>
                    <InputTextBox key='password' value={abc} placeHolder='Password' type='password' handleChange={valueUpdate}/>
                    <Button key='loginButton' text='Login' displayType='primary' enabled={true} />
                </div>
                <div className='registerUserLinkContainer'></div>
            </div>
        
        
    )
}
export default LoginModal;