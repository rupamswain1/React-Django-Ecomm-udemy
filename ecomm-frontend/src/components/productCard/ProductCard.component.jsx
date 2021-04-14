import React from 'react';
import Rating from '../rating/Rating.component'
import './ProductCard.style.scss'

const ProductCard=({product})=>{
    
    return(
        <div className='cardBox'>
        
            <div className='cardImage'>
                <img src={`${product.image}`} className="productImage" alt={`${product.name} Image`}/>            
            </div>
            <div className='productNameContainer'>
                <span className='productName'>{product.name}</span>
            </div>
            <div className='CardRating'>
                {product.rating} of {product.numReviews} Reviews
                <Rating value={product.rating} reviews={product.numReviews}/>
            </div>
            <div className='price'>
                &#8377; {product.price} 
            </div>
        
        </div>
        
    );
}

export default ProductCard;