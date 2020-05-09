import { createStore, applyMiddleware, compose } from 'redux'
import reducers from '../reducers'
// import createSagaMiddleware from 'redux-saga'
// import rootSaga from '../sagas'
import thunk from 'redux-thunk';
import IpcCommunication from '../middlewares';

// const initialiseSagaMiddleware = createSagaMiddleware();

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  // INITIAL_GLOBAL_STATE,
  storeEnhancers(
    applyMiddleware(IpcCommunication)
  )
);

//initialiseSagaMiddleware.run(rootSaga);

export default store;