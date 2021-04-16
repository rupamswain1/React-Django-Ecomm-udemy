import React from 'react';
import products from '../../productData/products';
import Rating from '../../components/rating/Rating.component'

import './ProductPage.style.scss';
const ProductPage=({match})=>{
    const prod=products.find((product)=>(product._id===match.params.prodId));
    //console.table(prod);
    return(
        <div className='productPageMainContainer'>
            <div className="productPageImageContainer">
                <img className="productImage" src={`${prod.image}`}  alt={`${prod.name} image`}/>
            </div>
            <div className="productDetailscontainer">
                <div className="productName">
                    {prod.name}
                </div>
                <div className="productPageRating">
                    <Rating value={prod.rating} reviews={prod.numReviews}/>
                </div>
                <div className="productPrice">
                    Price: &#8377;{prod.price}
                </div>
                <div className="productDescription">
                    Description: {prod.description}
                </div>
            </div>
            ProductPage
        </div>
    );
}

export default ProductPage;