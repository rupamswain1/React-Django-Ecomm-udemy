import ProductDetailType from './productDetail.type';


const INITIAL_STATE={
    isLoading:false,
    error:"",
    productDetails:{},
    
}

export const ProductDetailReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case ProductDetailType.PRODUCT_DETAIL_FETCH_START:
            return{
                ...state,
                isLoading:true
            }
        case ProductDetailType.PRODUCT_DETAIL_FETCH_SUCCESS:
            return{
                ...state,
                isLoading:false,
                productDetails:action.payload,
            }
        case ProductDetailType.PRODUCT_DETAL_FETCH_FAILED:
            return{
                ...state,
                isLoading:false,
                error:action.payload
            }
        default:
            return state;

    }
}