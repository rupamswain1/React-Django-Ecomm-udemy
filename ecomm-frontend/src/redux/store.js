

import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {persistStore} from 'redux-persist';
import {persistReducer1} from './root-reducer';

import {fetchProductListStart} from './productList/productList.sagas';
import {fetchProductDetailsStart} from './productDetail/productDetail.sagas';

import rootSaga from './root.saga';
const sagaMiddleware=createSagaMiddleware();
const middleware=[sagaMiddleware,logger];

export const store=createStore(persistReducer1,applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export const persistor=persistStore(store);
//export default {store, persistor};