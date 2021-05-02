import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import './CartPage.style.scss';
import CartItem from '../../components/cartItem/CartItem.component';
import{addItemToCartStart} from '../../redux/cart/cart.action';
import Button from '../../components/button/Button.component';
const CartPage=()=>{
    const dispatch = useDispatch();
    const {cartItems,error,isCartUpdating}=useSelector(state=>state.cartReducer);
    console.log(cartItems);
    useEffect(()=>{
        
    },[dispatch]);
    let totalquantity=0;
    let totalPrice=0;
    Object.keys(cartItems).map(key=>{
        totalquantity=totalquantity+cartItems[key].actualQuantity;
        totalPrice=totalPrice+(cartItems[key].actualQuantity*cartItems[key].price)
        return(
        null

    )})
    //console.log(totalquantity);
    //console.log(totalPrice)
    return(
    <div className='cartContainer'>
        <div className='cartHeadercontainer'>
            <div className='cartHeader'>
                SHOPPING CART
            </div>    
        </div>
        <div className='itemAndTotalContainer'>
            <div className='cartItemsContainer'>
                <div className='cartItems'>
                    {Object.keys(cartItems).map(key=>(
                        <div>
                            <CartItem key={key} cartItems={cartItems[key]} />
                            <div className='horizontalLine'>
                                <hr/>
                            </div>
                            
                        </div>
                    ))}
                    
                </div>
            </div>
            <div className='subTotalsAndCheckoutContainer'>
                <div className='subTotal'>
                        <h2>
                            Subtotal ({totalquantity}) Items:
                        </h2>
                        <div>
                            Total Price: &#8377; {totalPrice.toFixed(2)}
                        </div>
                </div>
                <div className='checkoutButton'>
                <Button text='Proceed to Buy' key='Proceed to Buy' enabled={true} displayType='primary' onClickMethod={()=>(null)}/>
                </div>
            </div>
        </div>
    </div>
)
}
export default CartPage;