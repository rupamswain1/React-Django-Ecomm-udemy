import React from 'react';

import './Header.style.scss';

const Header=()=>{
    return(
        <nav className='headerContainer'>
            <div className='logoContainer'>
                <div className='logo'>
                    React-Django-Ecomm
                </div>
            </div>
            <div className='searchBoxContainer'>
                <div className='searchBox'>
                    Search Box Here
                </div>            
            </div>
            <div className='optionContainer'>
                <div className='option'>
                    Cart
                </div>
                <div className='option'>
                    SignIn
                </div>
            </div>
        </nav>
    );
}

export default Header;