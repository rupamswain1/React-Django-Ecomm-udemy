import {all,call} from 'redux-saga/effects';
import {fetchProductListStart} from './productList/productList.sagas';
import {fetchProductDetailsStart} from './productDetail/productDetail.sagas';

export default function* rootSaga(){
    yield all([call(fetchProductListStart),call(fetchProductDetailsStart)]);
}