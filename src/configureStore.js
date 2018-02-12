import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import app from './reducers'
import rootSaga from'./sagas'

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
    let store = createStore(app, applyMiddleware(sagaMiddleware));
    return {
        ...store,
        runSaga: sagaMiddleware.run(rootSaga)
    }
}

