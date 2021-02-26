import { combineReducers } from 'redux';
import { forexReducer } from './forexReducer';

export default combineReducers({
  forex: forexReducer
});