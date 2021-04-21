import React,{useState,useEffect} from 'react';
//import products from '../../productData/products';
import ProductCard from '../../components/productCard/ProductCard.component';
import {connect} from 'react-redux';
import axios from 'axios';
import './ProductContainer.style.scss'
import {fetchLatestProducts} from '../../redux/productList/productList.action'
const ProductsContainer=({products1,productList})=>{
  // console.log(products1);
   const [products,setProducts]=useState([]);
   useEffect(()=>{
       //const productList=products1;
       //console.log(productList)
        const fetchProducts=async ()=>{ 
            //console.log('func')
         //  const {data}=await axios.get('/api/products/');
           
           //console.log(data)
           products1()
           setProducts(productList);
        };
        fetchProducts();
        
   },[productList])
   console.log(productList)

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

const mapDispatchToProps=dispatch=>(
    {
    products1:()=>dispatch(fetchLatestProducts()),
})
const mapStateToProps=state=>({
    productList:state.products.products,
})
export default connect(mapStateToProps,mapDispatchToProps)(ProductsContainer); 