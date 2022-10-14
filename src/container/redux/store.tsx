import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducers from './reducers';
import thunk from 'redux-thunk'
 const store = createStore(rootReducers, applyMiddleware(thunk, logger));
 export default store;
 





