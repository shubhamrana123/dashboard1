import { combineReducers } from 'redux';
import { counterReducer } from './dashboard';

const rootReducers = combineReducers({
     counterReducer
});
export default rootReducers;