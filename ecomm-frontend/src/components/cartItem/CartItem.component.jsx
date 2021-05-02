import React from 'react';
import './CartItem.style.scss';
import {cartProduct} from '../../productData/cartProduct'
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom';
import SelectQuantity from '../selectQuantity/SelectQuantity.component';
import Button from '../button/Button.component';
import {removeItemFromCartStart} from '../../redux/cart/cart.action';
const CartItem=({cartItems})=>{
    
    //console.log(cartProduct[1].name)
    const dispatch=useDispatch();
    const removeCartItemCliked=(prodId)=>{
        console.log(cartItems._id)
        dispatch(removeItemFromCartStart(prodId));
        console.log('removed')
    }
    return(
        <div className='cartItemContainer'>
            <div className='internalContainer'>
                <div className='imageContainer'>
                    <img src={cartItems.image}/>
                </div>
                <div className='productNameContainer'>
                    <div className='productName'>
                        {cartItems.name}
                    </div>    
                </div>
                <div className='priceContainer'>
                    <div className='productPrice'>
                    &#8377; {cartItems.price}    
                    </div>
                </div>
                <div className='quantityContainer'>
                    <SelectQuantity key={cartItems._id} prodDetails={cartItems}/>
                </div>
                <div className='removeContainer'>
                    <div className='removeButton'>
                        <Link to='/cart/' key={`key-${cartItems._id}`}>
                            <Button text='Remove' enabled={true} displayType='secondary' onClickMethod={()=>(removeCartItemCliked(cartItems._id))}/>
                        </Link>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default CartItem;