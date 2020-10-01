import { combineReducers } from 'redux';

import symbolsReducer from '@reducers/symbolsReducer';
import currencyReducer from '@reducers/currencyReducer';

export default combineReducers({
  symbols: symbolsReducer,
  currency: currencyReducer,
});
