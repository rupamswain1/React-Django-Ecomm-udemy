import React from 'react';
import './inputTextBox.style.scss'
const InputTextBox=({placeHolder, value, type, handleChange})=>{
   
    return(
        <div className={`inputtextBoxContainer-${placeHolder}`}>           
            <input name={placeHolder} id='Email' onChange={handleChange} type={type} value={value} className={`inputtextBoxInput-${placeHolder}`}/>
            <label className={`inputtextBoxLabel-${placeHolder}-${value.length?'shrink':''}`} for={`inputtextBoxLabel-${placeHolder}`}>{placeHolder}</label>
        </div>
    )
}
export default InputTextBox;