import "regenerator-runtime/runtime";
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import inputReducer from './input/reducer';
import inputSaga from './input/sagas';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    inputReducer,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(inputSaga)

/*uncomment or debugging*/
window.$store = store;
export default store;
