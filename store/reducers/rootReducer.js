import { combineReducers } from 'redux';
import colorsReducer from './colorReducers';

const rootReducer = combineReducers({
  colors: colorsReducer
});

export default rootReducer;
