

import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import {rootReducer} from './root-reducer';

const sagaMiddleware=createSagaMiddleware();
const middleware=[logger];

const store=createStore(rootReducer,applyMiddleware(...middleware))

export default store;