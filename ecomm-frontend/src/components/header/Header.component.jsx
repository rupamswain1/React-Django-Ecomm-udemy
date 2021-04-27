import React from 'react';
import {Link} from 'react-router-dom';
import './Header.style.scss';

const Header=()=>{
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
                <div className='option'>
                    SignIn
                </div>
            </div>
        </nav>
    );
}

export default Header;