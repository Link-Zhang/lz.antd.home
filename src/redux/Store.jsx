import {createLogger} from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import {applyMiddleware, createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import {composeWithDevTools} from 'redux-devtools-extension';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';

import initState from './PreloadedState';
import createRootReducer from './Reducer';

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: hardSet,
    whitelist: ['App'],
};

const getMiddleware = () => {
    return applyMiddleware(createLogger())
};

const rootReducer = createRootReducer();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const enhancer = composeWithDevTools(getMiddleware());

export default () => {
    let store = createStore(persistedReducer, initState, enhancer);
    let persistor = persistStore(store);
    return {store, persistor}
}
