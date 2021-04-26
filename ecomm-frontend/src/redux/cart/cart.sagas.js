import {takeEvery,put} from 'redux-saga/effects';
import CartTypes from './cart.types';
import {addItemToCartSuccess,addItemToCartFailed} from './cart.action';
import {fetchProductDetailsfromBackend} from '../../backendLogic/fetchProductDetails';
function* addItemToCartAsync({type,prodId,quantity}){
    try{
        const data=yield fetchProductDetailsfromBackend(prodId);
        const {_id,name,image,price,countInStock}=data;
        
        yield put(addItemToCartSuccess(_id,name,image,price,countInStock,quantity));
    }
    catch(error){
        yield put(addItemToCartFailed(error))
    }
    
}

export function* addItemToCartStart(){
    yield takeEvery(CartTypes.ADD_PRODUCT_TO_CART_START,addItemToCartAsync);
}