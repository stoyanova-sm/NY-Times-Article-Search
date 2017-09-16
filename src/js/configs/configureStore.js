import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createHashHistory';
import rootReducer from '../reducers';

export const history = createHistory();

export default function configureStore() {
  const initState = {};
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //eslint-disable-line
  const enhancers = composeEnhancers(applyMiddleware(thunk, routerMiddleware(history)));
  return createStore(rootReducer, initState, enhancers);
}

