import ProductDetailType from './productDetail.type';

export const productDetailFetchStart=(prodId)=>{
    return({
    type:ProductDetailType.PRODUCT_DETAIL_FETCH_START,
    payload:prodId,
})}

export const productDetailfetchSuccess=(data)=>({
    type: ProductDetailType.PRODUCT_DETAIL_FETCH_SUCCESS,
    payload:data,
})

export const productDetailfetchFailed=(error)=>({
    type: ProductDetailType.PRODUCT_DETAL_FETCH_FAILED,
    payload:error,
})
