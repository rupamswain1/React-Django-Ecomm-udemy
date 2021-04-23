import React,{useState,useEffect} from 'react';
//import products from '../../productData/products';
import ProductCard from '../../components/productCard/ProductCard.component';
import {connect} from 'react-redux';
import axios from 'axios';
import './ProductContainer.style.scss'
import {fetchLatestProducts} from '../../redux/productList/productList.action'
const ProductsContainer=({products1,productList,isLoading})=>{
   const [products,setProducts]=useState([]);
   useEffect(()=>{
       console.log('i am calling')
       products1();
       setProducts(productList)
       
        
   },[])
   console.log(productList)

    return(
        (productList.length>0)?
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

const mapDispatchToProps=dispatch=>(
    {
    products1:()=>dispatch(fetchLatestProducts()),
})
const mapStateToProps=state=>({
    productList:state.latestProducts.latestProducts,
    isLoading:state.latestProducts.isLoading,
})
export default connect(mapStateToProps,mapDispatchToProps)(ProductsContainer); 