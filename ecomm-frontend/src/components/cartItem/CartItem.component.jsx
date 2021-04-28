import React from 'react';
import './CartItem.style.scss';
import {cartProduct} from '../../productData/cartProduct'
const CartItem=()=>{
    console.log(cartProduct[1].name)
    return(
        <div className='cartItemContainer'>
            <div className='imageContainer'>
                <img src={cartProduct[1].image}/>
            </div>
            <div className='productNameContainer'>{cartProduct[1].name}</div>
            <div className='priceContainer'>{cartProduct[1].price}</div>
            <div className='quantityContainer'>{cartProduct[1].actualQuantity}</div>
            <div className='removeContainer'>Remove</div>
        </div>
    )
}
export default CartItem;