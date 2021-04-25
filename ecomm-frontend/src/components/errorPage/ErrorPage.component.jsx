import React from 'react';
import './ErrorPage.style.scss'
const ErrorPage=({message})=>(
    <div className='errorPageContainer'>
        <div className='errorPageImage'>
            <img src='https://i.imgur.com/oCkEbrA.png'/>
        </div>
        <div className="errorMessage">
            <div className='errorText'>
                {message}
            </div>
        </div>
        
    </div>
)

export default ErrorPage;