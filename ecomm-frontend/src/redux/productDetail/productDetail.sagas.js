import {takeEvery, put,call} from 'redux-saga/effects';
import {productDetailfetchSuccess,productDetailfetchFailed} from './productDetail.action';
import ProductDetailType from './productDetail.type';
import {fetchProductDetailsfromBackend} from '../../backendLogic/fetchProductDetails';

export function* productDetailFetchStartAsync({type,payload}){
    try{
        const data=yield call(fetchProductDetailsfromBackend,payload)
        //console.log(data)
        yield put(productDetailfetchSuccess(data));
    }
    catch(error){
        yield put(productDetailfetchFailed(error.response.status +' '+ error.response.statusText));
    }
}

export function* fetchProductDetailsStart(){

    yield takeEvery(ProductDetailType.PRODUCT_DETAIL_FETCH_START,productDetailFetchStartAsync);
}