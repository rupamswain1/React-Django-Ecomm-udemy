

import {createStore, applyMiddleware} from 'redux';
//import logger from 'react-logger';
import createSagaMiddleware from 'redux-saga';

import {rootReducer} from './root-reducer';

const sagaMiddleware=createSagaMiddleware();
const middleware=[sagaMiddleware];

const store=createStore(rootReducer,applyMiddleware(...middleware))

export default store;