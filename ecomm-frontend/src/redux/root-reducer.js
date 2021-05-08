import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {productListReducer} from './productList/productList.reducer';
import {ProductDetailReducer} from './productDetail/productDetail.reducer';
import {ProductQuantityReducer} from './productQuantity/productQuantity.reducer';
import {cartReducer} from './cart/cart.reducer';
import {LoginReducer} from './login/login.reducer';
const persitConfig={
    key:'root',
    storage,
    whiteList:['cartReducer'],
}

export const rootReducer=combineReducers({
    latestProducts: productListReducer,
    productDetailReducer:ProductDetailReducer,
    ProductQuantityReducer:ProductQuantityReducer,
    cartReducer:cartReducer,
    LoginReducer:LoginReducer,
    });
// export const rootReducer=combineReducers({
//     latestProducts: productListReducer,
//     productDetailReducer:ProductDetailReducer,
//     ProductQuantityReducer:ProductQuantityReducer,
//     cartReducer:cartReducer,
//     })
export const persistReducer1=persistReducer(persitConfig,rootReducer);
//export default persistReducer(persitConfig,rootReducer);