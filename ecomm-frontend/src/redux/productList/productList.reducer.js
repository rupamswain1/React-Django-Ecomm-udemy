
import {productListType} from './productList.type';

const INITIAL_STATE={
    latestProducts:[],
    isLoading:true,
    error:"",
}

export const productListReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
          case productListType.FETCH_ALL_LATEST_PRODUCTS_SUCCESS:
            return{
                ...state,
                latestProducts:action.payload,
                isLoading:false,
            }
          case productListType.FETCH_ALL_LATEST_PRODUCTS_START:
            return{
                ...state,
                isLoading:true,
                
            }
          case productListType.FETCH_ALL_LATEST_PRODUCTS_FAIL:
            return{
                ...state,
                isLoading:false,
                error:action.payload,
                
            }
          default:
            return state;
    }
}