import React,{useEffect} from 'react';
//import products from '../../productData/products';
import Rating from '../../components/rating/Rating.component'
import Button from '../../components/button/Button.component';
import SelectQuantity from '../../components/selectQuantity/SelectQuantity.component';
import {productDetailFetchStart} from '../../redux/productDetail/productDetail.action';
import {useDispatch, useSelector} from 'react-redux';
import{addItemToCartStart} from '../../redux/cart/cart.action';

import Spinner from '../../components/spinner/Spinner.component';
import ErrorPage from '../../components/errorPage/ErrorPage.component';
import './ProductPage.style.scss';

const ProductPage=({match})=>{

    const dispatch=useDispatch();
    const {isLoading,error,productDetails}=useSelector(state=>state.productDetailReducer);
    const quantity= useSelector(state=>state.ProductQuantityReducer.productQuantity[productDetails._id]);
    
    useEffect(()=>{
        
        dispatch(productDetailFetchStart(`${match.params.prodId}`));

    },[dispatch]);
    //console.log(productDetails);
    
    const prod=productDetails;
    const enable=prod.countInStock>0?true:false;
    const lowStock=(prod.countInStock-quantity)>3?true:false;
    //console.table(prod);
    return(
        isLoading?<Spinner key={`spinner-${prod._id}`}/>
            :error?<ErrorPage message={error} key={`error-${prod._id}`}/>
            :
        <div className='productPageMainContainer'>
            <div className="productPageImageContainer">
                <img key={prod.name} className="productImage" src={`${prod.image}`}  alt={`${prod.name} image`}/>
            </div>
            <div className="productDetailscontainer">
                <div className="productName">
                    {prod.name}
                </div>
                <div className="productPageRating">
                    <Rating key={`${prod.name}Rating`} value={prod.rating} reviews={prod.numReviews}/>
                </div>
                <div className="productPrice">
                    Price: &#8377;{prod.price}
                </div>
                <div className="productDescription">
                    Description: {prod.description}
                </div>
            </div>
            <div className="productQuantityAndAddToCartContainer">
                 
               <SelectQuantity key={`quantitySelector${prod._id}`}/>
                <div className="quntityPriceContainer">
                    <div className="totalPriceContainer">
                        Total Price:&nbsp; 
                    </div>
                    <div className="productPrice">
                        &#8377;{(prod.price*quantity).toFixed(2)}
                    </div>
                   
                </div>
                <div className="addToCartButtuon">
                    {   
                        <Button key={`${prod.name}button`} cls="addToCartBtn" text="Add To Cart" displayType="primary" onClickMethod={()=>dispatch(addItemToCartStart(prod._id,quantity))} enabled={enable}/>
                    }
                </div>
                <div className="lowStockContainer">
                {
                    lowStock?null:
                        enable? 
                            <div className="lowStockMsg">
                                *Only {prod.countInStock-quantity} items left in stock
                            </div> 
                        :
                         <div className="lowStockMsg">
                            *This Item is not in stock
                         </div>
                }
                </div>
            </div>
            
        </div>
        
    );
}

export default ProductPage;