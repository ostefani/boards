import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from 'src/redux/reducers';
// import rootSaga from 'src/redux/sagas';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = (typeof window !== 'undefined'
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
    combineReducers({ ...reducers }),
    composeEnhancers(),
    // composeEnhancers(applyMiddleware(sagaMiddleware)),
);

// sagaMiddleware.run(rootSaga);

export default store;
