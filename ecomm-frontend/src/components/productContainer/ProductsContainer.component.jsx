import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import ProductCard from '../../components/productCard/ProductCard.component';
import './ProductContainer.style.scss'
import {fetchLatestProducts} from '../../redux/productList/productList.action'
const ProductsContainer=()=>{
   const dispatch = useDispatch();
   const productList=useSelector(state=>state.latestProducts);
   console.log(productList)
   const {error,isLoading,latestProducts}=productList;
   
   const products=latestProducts;
   useEffect(()=>{
            
          dispatch(fetchLatestProducts());
        
   },[dispatch])
   //console.log(productList)
   //const error=null;
   console.log(error.response);
    return(
       
        <div className='productsContainer'>
            <div className="productContainerHeaderContainer">
                <h1 className=''>Latest Product</h1>
            </div>
            {isLoading?<h2>Loading</h2>:
            error?<h2>{error}</h2>:
            <div className="latestProducts">
            {products.map((product)=>{
                //console.log(product)
                return(
                <ProductCard key={product.id} product={product}/>
            )}
            )
            }
        </div>
        
        }
           
        </div>
    )
    
}


export default ProductsContainer; 