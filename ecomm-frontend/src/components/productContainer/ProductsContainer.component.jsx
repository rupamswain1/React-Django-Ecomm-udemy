import React,{useState,useEffect} from 'react';
//import products from '../../productData/products';
import ProductCard from '../../components/productCard/ProductCard.component'

import axios from 'axios';
import './ProductContainer.style.scss'
const ProductsContainer=()=>{
   // console.log(products);
   const [products,setProducts]=useState([]);
   useEffect(()=>{
        const fetchProducts=async ()=>{ 
            //console.log('func')
           const {data}=await axios.get('/api/products/');
           
           //console.log(data)
           setProducts(data);
        };
        fetchProducts();
   },[])
    return(
        
        <div className='productsContainer'>
            <div className="productContainerHeaderContainer">
                <h1 className=''>Latest Product</h1>
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