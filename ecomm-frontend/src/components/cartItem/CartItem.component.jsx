import React from 'react';
import './CartItem.style.scss';
import {cartProduct} from '../../productData/cartProduct'
import SelectQuantity from '../selectQuantity/SelectQuantity.component';
import Button from '../button/Button.component';
const CartItem=()=>{
    console.log(cartProduct[1].name)
    return(
        <div className='cartItemContainer'>
            <div className='internalContainer'>
                <div className='imageContainer'>
                    <img src={cartProduct[1].image}/>
                </div>
                <div className='productNameContainer'>
                    <div className='productName'>
                        {cartProduct[1].name}
                    </div>    
                </div>
                <div className='priceContainer'>
                    <div className='productPrice'>
                    &#8377; {cartProduct[1].price}    
                    </div>
                </div>
                <div className='quantityContainer'>
                    <SelectQuantity prodId={cartProduct[1]._id}/>
                </div>
                <div className='removeContainer'>
                    <div className='removeButton'>
                        <Button text='Remove' enabled={true} displayType='secondary'/>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default CartItem;