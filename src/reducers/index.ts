import { combineReducers } from 'redux';

import symbolsReducer from '@reducers/symbolsReducer';
import currencyReducer from '@reducers/currencyReducer';
import amountReducer from '@reducers/amountReducer';
import convertReducer from '@reducers/convertReducer';

export default combineReducers({
  symbols: symbolsReducer,
  currency: currencyReducer,
  amount: amountReducer,
  convert: convertReducer,
});
