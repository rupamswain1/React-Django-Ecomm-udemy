import {combineReducers} from 'redux';
import {productListReducer} from './productList/productList.reducer'
export const rootReducer=combineReducers({
    products: productListReducer,
    })
