import React,{useEffect} from 'react';
import {useSelector} from 'react-redux';
import ReactDOM from 'react-dom'
import LoginModal from '../loginModal/LoginModal.component'

import './ModalManager.style.scss';

const ModalManager=()=>{
    const {loginModalDisplay}=useSelector(state=>state.LoginReducer);
    console.log(loginModalDisplay)
    useEffect(()=>{
        
    },[loginModalDisplay])

    

    return ReactDOM.createPortal(
        <div className='MainModal'>
            
            {loginModalDisplay?
                <div className='MainModalContainer'>
                    <LoginModal key='loginModal'/>
                </div>:
                null
            }
        
        </div>,
        document.getElementById('modal-root')
    )
}

export default ModalManager;