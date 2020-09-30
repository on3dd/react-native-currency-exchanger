import { combineReducers } from 'redux';
import symbolsReducer from '@reducers/symbolsReducer';

export default combineReducers({
  symbols: symbolsReducer,
});
