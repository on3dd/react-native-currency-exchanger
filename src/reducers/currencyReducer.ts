import { CHANGE_FROM, CHANGE_TO } from '@utils/actionTypes';
import CurrencyState from '@typesdir/states/currency';

const initialState: CurrencyState = {
  from: { code: 'USD', description: 'United States Dollar' },
  to: { code: 'RUB', description: 'Russian Ruble' },
};

type Action = {
  type: string;
  payload: any;
};

const symbolsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case CHANGE_FROM:
      return Object.assign({}, state, {
        from: action.payload,
      });

    case CHANGE_TO:
      return Object.assign({}, state, {
        to: action.payload,
      });

    default:
      return state;
  }
};

export default symbolsReducer;
