

import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import {rootReducer} from './root-reducer';

import {fetchProductListStart} from './productList/productList.sagas';

const sagaMiddleware=createSagaMiddleware();
const middleware=[sagaMiddleware,logger];

const store=createStore(rootReducer,applyMiddleware(...middleware))
sagaMiddleware.run(fetchProductListStart)
export default store;