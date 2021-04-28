import React from 'react';
import './CartPage.style.scss';
import CartItem from '../../components/cartItem/CartItem.component';
const CartPage=()=>(
    <div className='cartContainer'>
        <div className='cartHeadercontainer'>
            <div className='cartHeader'>
                SHOPPING CART
            </div>    
        </div>
        <div className='itemAndTotalContainer'>
            <div className='cartItemsContainer'>
                <div className='cartItems'>
                    <CartItem/>
                </div>
            </div>
            <div className='subTotalsAndCheckoutContainer'>
                <div className='subTotal'></div>
                <div className='checkoutButton'></div>
            </div>
        </div>
    </div>
)

export default CartPage;