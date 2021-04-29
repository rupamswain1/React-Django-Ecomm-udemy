import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {addLocalProductQuantity,removeLocalProductQuantity} from '../../redux/productQuantity/productQuantity,action'
import './SelectQuantity.style.scss';

const SelectQuantity=({prodDetails})=>{
    const dispatch = useDispatch();
    let productDetails=useSelector(state=>state.productDetailReducer.productDetails);
    //console.log(productDetails._id);
    let {isLoading,error}=useSelector(state=>state.productDetailReducer);
    if(prodDetails!=undefined){
        //console.log('called')
        productDetails=prodDetails;  
    }
    
    const quantityList= useSelector(state=>state.ProductQuantityReducer.productQuantity);
    const quantity=quantityList[productDetails._id];
    useEffect(()=>{
        
    },[dispatch]);

    const addQuantity=()=>{
        if((quantity+1)<=productDetails.countInStock){
        dispatch(addLocalProductQuantity(productDetails._id));
        }
        //console.log(quantity+1)
    }
    const removeQuantity=()=>{
        if((quantity-1)>=1){
        dispatch(removeLocalProductQuantity(productDetails._id));
        }
    }
    return(
        <div className="productQuantity">
            <div className="quantityContainer">
                Quantity:
            </div>
            <div className='quantityButtonContainer'>
                <div className={`removeQuantityButton-${quantity<=1?'disable':'enable'}`}
                    onClick={removeQuantity}
                >
                    -
                </div>
                <div className="addProductQuantity">
                    {quantity}
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