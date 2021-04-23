import {takeEvery,put} from 'redux-saga/effects';
import {productListType} from './productList.type';
import {fetchLatestProductsSuccess,fetchLatestProductsFail} from './productList.action';
import {fetchLatestProductFromBackend} from '../../backendLogic/fetchProductList';

export function* fetchProductListAsync(){
    try{
        const data=yield fetchLatestProductFromBackend();
        //console.log(data)
        yield put(fetchLatestProductsSuccess(data))
    }
    catch(error){
        yield put(fetchLatestProductsFail(error));
        console.log(error);
    }

}

export function* fetchProductListStart(){
    yield takeEvery(productListType.FETCH_ALL_LATEST_PRODUCTS_START,
        fetchProductListAsync);
}
