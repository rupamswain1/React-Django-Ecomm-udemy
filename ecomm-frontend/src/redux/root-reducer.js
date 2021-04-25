import {combineReducers} from 'redux';
import {productListReducer} from './productList/productList.reducer';
import {ProductDetailReducer} from './productDetail/productDetail.reducer';
export const rootReducer=combineReducers({
    latestProducts: productListReducer,
    productDetailReducer:ProductDetailReducer,
    })
