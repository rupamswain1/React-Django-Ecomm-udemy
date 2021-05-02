import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {addLocalProductQuantity,removeLocalProductQuantity} from '../../redux/productQuantity/productQuantity,action'
import './SelectQuantity.style.scss';
import{addItemToCartStart,subtractItemFromCartStart} from '../../redux/cart/cart.action';
const SelectQuantity=({prodDetails})=>{

    const dispatch = useDispatch();
    let productDetails=useSelector(state=>state.productDetailReducer.productDetails);
    //console.log(productDetails._id);
    let {isLoading,error}=useSelector(state=>state.productDetailReducer);
    if(prodDetails!=undefined){
        productDetails=prodDetails;  
    }
    
    const quantityList= useSelector(state=>state.ProductQuantityReducer.productQuantity);
    const quantity=quantityList[productDetails._id];
    useEffect(()=>{
        
    },[dispatch]);

    const addQuantity=()=>{
        if((quantity+1)<=productDetails.countInStock){
            dispatch(addLocalProductQuantity(productDetails._id));
            if(prodDetails!=undefined){
                dispatch(addItemToCartStart(productDetails._id,parseInt(1)))
            }
        }
        //console.log(quantity+1)
    }
    const removeQuantity=()=>{
        if((quantity-1)>=1){
        dispatch(removeLocalProductQuantity(productDetails._id));
        }
        if(prodDetails!=undefined){
            dispatch(subtractItemFromCartStart(productDetails._id,parseInt(1)))
        }
    }
    return(
        <div className="productQuantity">
            <div className="quantityContainer">
                Quantity:
            </div>
            <div className='quantityButtonContainer'>
                <div className={`removeQuantityButton-${prodDetails?(prodDetails.actualQuantity<=1?'disable':'enable'): quantity<=1?'disable':'enable'}`}
                    onClick={removeQuantity}
                >
                    -
                </div>
                <div className="addProductQuantity">
                    {
                      prodDetails?prodDetails.actualQuantity:quantity
                    }
                </div>
                <div className={`addQuantityButton-${quantity>=productDetails.countInStock?'disable':'enable'}`}
                    onClick={addQuantity}
                >
                    +
                </div>        
            </div>
        </div>

    )
}

export default SelectQuantity;