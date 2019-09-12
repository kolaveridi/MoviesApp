import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSagas";
import logger from "redux-logger";

const bindMiddleware = middleware => {
  return applyMiddleware(...middleware);
};


function configureStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];
  middleware.push(logger);
  const store = createStore(
    rootReducer,
    initialState,
    bindMiddleware(middleware)
  );
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
}

export default configureStore;
