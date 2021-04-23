import {productListType} from './productList.type';

export const fetchLatestProducts=()=>({
    type:productListType.FETCH_ALL_LATEST_PRODUCTS_START,
    
});

export const fetchLatestProductsSuccess=(products)=>{
    //console.log(products)
    return({
    type:productListType.FETCH_ALL_LATEST_PRODUCTS_SUCCESS,
    payload:products,
})}

export const fetchLatestProductsFail=(error)=>{
    return({
    type:productListType.FETCH_ALL_LATEST_PRODUCTS_FAIL,
    payload:error,
}) }