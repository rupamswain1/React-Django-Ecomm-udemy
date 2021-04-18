import React from 'react';
import './Button.style.scss'
const Button=({text,cls,displayType,enabled,onClickMethod})=>{
    const enableButton=(enabled==true)?null:"disable";
    //console.log(enableButton)
    return(
        <button 
            disabled={enableButton}
            className={`customButton-${displayType}-${cls}-${enableButton}`} >
            {text}
        </button>

    )
}

export default Button