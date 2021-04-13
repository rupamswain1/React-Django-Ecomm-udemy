import React from 'react';
import './Footer.style.scss';

class Footer extends React.Component{
    render(){
       return( 
        <div className='footerContainer'>
            <div className='footerText'>
                Copyright &copy; React-Django-Ecomm
            </div>
            
        </div>
       )
    }
}

export default Footer;