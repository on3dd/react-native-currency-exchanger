import { CHANGING_AMOUNT } from '@utils/actionTypes';
import AmountState from '@typesdir/states/amount';

const initialState: AmountState = {
  number: 1.0,
};

type Action = {
  type: string;
  payload: any;
};

const amountReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case CHANGING_AMOUNT:
      return Object.assign({}, state, {
        number: action.payload,
      });

    default:
      return state;
  }
};

export default amountReducer;
