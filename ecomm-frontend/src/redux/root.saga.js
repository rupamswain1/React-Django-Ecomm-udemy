import {all,call} from 'redux-saga/effects';
import {fetchProductListStart} from './productList/productList.sagas';
import {fetchProductDetailsStart} from './productDetail/productDetail.sagas';
import {addItemToCartStart,removeItemFromCartStart,subtractItemFromCartStart} from './cart/cart.sagas';

export default function* rootSaga(){
    yield all([call(fetchProductListStart),call(fetchProductDetailsStart),call(addItemToCartStart),call(removeItemFromCartStart),call(subtractItemFromCartStart)]);
}