import React from 'react';
import products from '../../productData/products';
import ProductCard from '../../components/productCard/ProductCard.component'
import './ProductContainer.style.scss'
const ProductsContainer=()=>{
   // console.log(products);
    return(
        
        <div className='productsContainer'>
            <div className="productContainerHeaderContainer">
                <h1 className='productContainerHeader'>Latest Product</h1>
            </div>
            <div className="latestProducts">
                {products.map((product)=>{
                    //console.log(product)
                    return(
                    <ProductCard key={product.id} product={product}/>
                )}
                )
                }
            </div>
        </div>
    )
    
}
export default ProductsContainer; 