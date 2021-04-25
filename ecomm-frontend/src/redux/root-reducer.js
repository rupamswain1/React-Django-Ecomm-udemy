import {combineReducers} from 'redux';
import {productListReducer} from './productList/productList.reducer';
import {ProductDetailReducer} from './productDetail/productDetail.reducer';
import {ProductQuantityReducer} from './productQuantity/productQuantity.reducer';
import {cartReducer} from './cart/cart.reducer';
export const rootReducer=combineReducers({
    latestProducts: productListReducer,
    productDetailReducer:ProductDetailReducer,
    ProductQuantityReducer:ProductQuantityReducer,
    cartReducer:cartReducer,
    })
