import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './combineReducer';

const middlewares = [thunk];
if (process.env.NODE_ENV === 'development') {
  const { createLogger } = require('redux-logger'); // eslint-disable-line global-require

  const logger = createLogger({
    level: 'log',
    collapsed: true,
    // predicate: (getState, action) => !includes(action.type, '@@redux-form')
  });

  middlewares.push(logger);
}

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

/* eslint-disable no-underscore-dangle */
const store = createStoreWithMiddleware(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

export default store;
