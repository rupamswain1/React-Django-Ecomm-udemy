import {takeEvery,put} from 'redux-saga/effects';
import CartTypes from './cart.types';
import {addItemToCartSuccess,addItemToCartFailed,removeItemFromCartSuccess,removeItemFromCartFail,subtractItemFromCartSuccess,subtractItemFromCartFailed} from './cart.action';
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

function* removeItemFromCartAsync({type,prodId}){
    try{
        console.log(prodId)
        yield put(removeItemFromCartSuccess(prodId))
    }
    catch(error){
        yield put(removeItemFromCartFail(error));
    }
}

function* subtractItemFromCartAsync({type,prodId,quantity}){
    try
    {yield put(subtractItemFromCartSuccess(prodId,quantity))
    }
    catch(error){
        yield put(subtractItemFromCartFailed(error))
    }
}

export function* addItemToCartStart(){
    yield takeEvery(CartTypes.ADD_PRODUCT_TO_CART_START,addItemToCartAsync);
}

export function* subtractItemFromCartStart(){
    yield takeEvery(CartTypes.SUBTRACT_PRODUCT_FROM_CART_START,subtractItemFromCartAsync);
}

export function* removeItemFromCartStart(){
    yield takeEvery(CartTypes.REMOVE_ITEM_FROM_CART_START,removeItemFromCartAsync);
}