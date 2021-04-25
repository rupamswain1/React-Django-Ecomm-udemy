import React from 'react';
import Rating from '../rating/Rating.component'

import {Link} from 'react-router-dom';
import './ProductCard.style.scss'

const ProductCard=({product})=>{
    
    return(
        <div className='cardBox'>
            <Link key={`${product._id}link`} to={`/product/${product._id}/`}>        
                <div className='cardImage'>
                    <img src={`${product.image}`} className="productImage" alt={`${product.name} Image`}/>            
                </div>
                <div className='productNameContainer'>
                    <span className='productName'>{product.name}</span>
                </div>
                <div className='CardRating'>
                    <Rating key={`${product._id}cardRating`} value={product.rating} reviews={product.numReviews}/>
                </div>
                <div className='price'>
                    &#8377; {product.price} 
                </div>
            </Link>
        </div>
        
    );
}

export default ProductCard;