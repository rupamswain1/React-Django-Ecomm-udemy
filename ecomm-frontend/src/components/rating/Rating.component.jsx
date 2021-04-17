import React from 'react';

import './Rating.style.scss';

const Rating=({value,reviews})=>{
    
    let stars=[];
    for(let i=0;i<5;i++){
        stars.push(
                value>=parseInt(i)+1?
                    'fa fa-star checked '+parseInt(i)
                    :value>=parseInt(i)+0.5?
                        'fa fa-star-half-o '+parseInt(i):
                        'fa fa-star-o fa_custom '+parseInt(i)
            
        )
    }
    //console.log(stars)
    return(
    <div className='ratingContainer'>
          {
              stars.map((star)=>(
                <span key={star} color="#f8e825" className={star}></span>  

              ))
          }
          &nbsp;of {reviews} Reviews

    </div>

)}

export default Rating;