import { Switch } from 'react-router';
import {productListType} from './productList.type';
import products from '../../productData/products'
const INITIAL_STATE={
    products:[],
}

export const productListReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
          case productListType.FETCH_ALL_LATEST_PRODUCTS:
            return{
                ...state,
                products:products,
            }
          default:
            return state;
    }
}