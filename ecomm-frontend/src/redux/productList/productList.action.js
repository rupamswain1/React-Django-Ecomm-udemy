import {productListType} from './productList.type';

export const fetchLatestProducts=()=>({
    type:productListType.FETCH_ALL_LATEST_PRODUCTS,
})