import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import './Header.style.scss';
import {loginUserStart, toggleLoginModalDisplay} from '../../redux/login/login.action';

const Header=()=>{
    const dispatch = useDispatch();
    const {isAuthenticated,loginData} =useSelector(state=>state.LoginReducer)
    const toggleLoginModalDisplayLocal=()=>{
        dispatch(toggleLoginModalDisplay())
    }
    return(
        <nav className='headerContainer'>
            <Link key='appLogo' to='/'>
                <div className='logoContainer'>
                    <div className='logo'>
                        React-Django-Ecomm
                    </div>
                </div>
            </Link>

            <div className='searchBoxContainer'>
                <div className='searchBox'>
                    Search Box Here
                </div>            
            </div>
            <div className='optionContainer'>
                <Link key='headerCasrtUrl' to='/cart/'>
                    <div className='option'>
                        Cart
                    </div>
                </Link>
               {isAuthenticated?
                    <div className='option'>
                         <div className='dropDownHeader'>
                            Hi,{loginData.name}
                         </div>
                         <div className='dropDown-content'>
                            <Link to="#">Profile</Link>
                            <Link to="#">Log Out</Link>
                         </div>
                    </div>
                :
                    <div className='option' onClick={()=>toggleLoginModalDisplayLocal()}>
                        SignIn
                    </div>
                    
                } 
                
            </div>
        </nav>
    );
}

export default Header;