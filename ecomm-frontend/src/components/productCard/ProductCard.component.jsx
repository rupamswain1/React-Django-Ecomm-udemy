import React from 'react';
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
            <div className='rating'>
                {product.rating} of {product.numReviews} Reviews
            </div>
            <div className='price'>
                &#8377; {product.price} 
            </div>
        </div>
    );
}

export default ProductCard;