import React from 'react';

import './Rating.style.scss';

const Rating=({value,reviews})=>{
    
    let stars=[];
    for(let i=0;i<5;i++){
        stars.push(
                value>=parseInt(i)+1?
                    'fa fa-star checked'
                    :value>=parseInt(i)+0.5?
                        'fa fa-star-half-o':
                        'fa fa-star-o fa_custom'
            
        )
    }
    //console.log(stars)
    return(
    <div className='ratingContainer'>
          {
              stars.map((star)=>(
                <span color="#f8e825" className={star}></span>  

              ))
          }
          &nbsp;of {reviews} Reviews

    </div>

)}

export default Rating;