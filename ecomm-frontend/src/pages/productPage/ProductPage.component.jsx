import React,{useState,useEffect} from 'react';
//import products from '../../productData/products';
import Rating from '../../components/rating/Rating.component'
import Button from '../../components/button/Button.component';
import axios from 'axios';
import './ProductPage.style.scss';
const ProductPage=({match})=>{
    const [product,setProduct]=useState([]);
    useEffect(()=>{
        const fetchProduct=async ()=>{
            const {data}= await axios.get(`/api/products/${match.params.prodId}/`);
            setProduct(data);
        }
        fetchProduct();

    },[]);


    const prod=product;
    const enable=prod.countInStock>0?true:false;
    const lowStock=prod.countInStock>3?true:false;
    //console.table(prod);
    return(
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
                 
                <div className="productQuantity">
                        <div className="quantityContainer">
                            Quantity:
                        </div>
                        <div className="removeQuantityButton">
                            -
                        </div>
                        <div className="addProductQuantity">
                            30
                        </div>
                        <div className="addQuantityButton">
                            +
                        </div>        

                </div>
                <div className="quntityPriceContainer">
                    <div className="totalPriceContainer">
                        Total Price:&nbsp; 
                    </div>
                    <div className="productPrice">
                        &#8377;100000.00
                    </div>
                   
                </div>
                <div className="addToCartButtuon">
                    {   
                        <Button key={`${prod.name}button`} cls="addToCartBtn" text="Add To Cart" displayType="primary" enabled={enable}/>
                    }
                </div>
                <div className="lowStockContainer">
                {
                    lowStock?null:
                        enable? 
                            <div className="lowStockMsg">
                                *Only {prod.countInStock} items left in stock
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